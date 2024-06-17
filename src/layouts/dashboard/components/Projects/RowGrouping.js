import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Checkbox, FormControlLabel, FormGroup, Grid, IconButton, Menu, MenuItem, Tooltip, Typography, TextField } from '@mui/material';
import { ExpandLess, ExpandMore, MoreVert } from '@mui/icons-material';

const columns = [
  { field: 'object', headerName: 'Objects', width: 200 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'updated', headerName: 'Updated', width: 150 },
  { field: 'tags', headerName: 'Tags', width: 150 },
  { field: 'key', headerName: 'Key', width: 150 },
  { field: 'number', headerName: 'Number', width: 150 },
  { field: 'abc', headerName: 'ABC', width: 150 },
  { field: 'abcdStatus', headerName: 'abcd Status', width: 150 }
];

const initialRows = [
  { id: 1, object: 'Parent 1', status: 'Active', updated: '2024-06-18', tags: 'Tag1', key: 'Key1', number: '123', abc: 'ABC1', abcdStatus: 'Status1', parent: null },
  { id: 2, object: 'Child 1.1', status: 'Active', updated: '2024-06-18', tags: 'Tag2', key: 'Key2', number: '456', abc: 'ABC2', abcdStatus: 'Status2', parent: 1 },
  { id: 3, object: 'Child 1.2', status: 'Inactive', updated: '2024-06-18', tags: 'Tag3', key: 'Key3', number: '789', abc: 'ABC3', abcdStatus: 'Status3', parent: 1 },
  { id: 4, object: 'Parent 2', status: 'Inactive', updated: '2024-06-18', tags: 'Tag4', key: 'Key4', number: '101', abc: 'ABC4', abcdStatus: 'Status4', parent: null },
  { id: 5, object: 'Child 2.1', status: 'Active', updated: '2024-06-18', tags: 'Tag5', key: 'Key5', number: '112', abc: 'ABC5', abcdStatus: 'Status5', parent: 4 },
  { id: 6, object: 'Child 2.2', status: 'Inactive', updated: '2024-06-18', tags: 'Tag6', key: 'Key6', number: '131', abc: 'ABC6', abcdStatus: 'Status6', parent: 4 }
];

const getVisibleColumns = (allColumns, visibleColumnIds) => {
  return allColumns.filter(col => visibleColumnIds.includes(col.field));
};

const getVisibleRows = (rows, expandedParents) => {
  const map = new Map();
  rows.forEach(row => {
    map.set(row.id, { ...row, children: [] });
  });

  const visibleRows = [];

  rows.forEach(row => {
    if (row.parent === null) {
      visibleRows.push(map.get(row.id));
    } else {
      const parent = map.get(row.parent);
      if (parent) {
        parent.children.push(map.get(row.id));
      }
    }
  });

  const flattenRows = (rows, depth = 0) => {
    return rows.flatMap(row => [
      { ...row, depth, isExpanded: expandedParents.has(row.id) },
      ...(expandedParents.has(row.id) ? flattenRows(row.children, depth + 1) : [])
    ]);
  };

  return flattenRows(visibleRows);
};

export default function TreeGrid() {
  const [rows, setRows] = useState(initialRows);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [expandedParents, setExpandedParents] = useState(new Set());
  const [visibleColumnIds, setVisibleColumnIds] = useState(['object', 'status', 'updated', 'tags', 'key', 'number', 'abc', 'abcdStatus']);
  const [showSelectionColumn, setShowSelectionColumn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterText, setFilterText] = useState('');

  const handleRowSelection = (rowId) => {
    const newSelectedRows = new Set(selectedRows);
    const row = rows.find(r => r.id === rowId);

    const toggleRow = (id, selected) => {
      if (selected) {
        newSelectedRows.add(id);
      } else {
        newSelectedRows.delete(id);
      }
    };

    const selectChildren = (row, selected) => {
      toggleRow(row.id, selected);
      rows.filter(r => r.parent === row.id).forEach(child => selectChildren(child, selected));
    };

    if (selectedRows.has(rowId)) {
      selectChildren(row, false);
    } else {
      selectChildren(row, true);
    }

    setSelectedRows(newSelectedRows);
  };

  const handleToggleExpand = (rowId) => {
    const newExpandedParents = new Set(expandedParents);
    if (newExpandedParents.has(rowId)) {
      newExpandedParents.delete(rowId);
    } else {
      newExpandedParents.add(rowId);
    }
    setExpandedParents(newExpandedParents);
  };

  const handleToggleColumnVisibility = (columnId) => {
    const newVisibleColumnIds = visibleColumnIds.includes(columnId)
      ? visibleColumnIds.filter(id => id !== columnId)
      : [...visibleColumnIds, columnId];
    setVisibleColumnIds(newVisibleColumnIds);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredColumns = columns.filter(col => col.headerName.toLowerCase().includes(filterText.toLowerCase()));

  const visibleRows = getVisibleRows(rows, expandedParents);
  const visibleColumns = getVisibleColumns(columns, visibleColumnIds);

  return (
    <div style={{ height: 600, width: '100%' }}>
      <IconButton onClick={handleMenuOpen}>
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <TextField
          value={filterText}
          onChange={handleFilterChange}
          placeholder="Filter columns"
          style={{ margin: '8px' }}
        />
        <FormGroup>
          {filteredColumns.map(col => (
            <FormControlLabel
              key={col.field}
              control={<Checkbox checked={visibleColumnIds.includes(col.field)} onChange={() => handleToggleColumnVisibility(col.field)} />}
              label={col.headerName}
            />
          ))}
        </FormGroup>
      </Menu>
      <DataGrid
        rows={visibleRows}
        columns={visibleColumns.map(col => {
          if (col.field === 'object') {
            return {
              ...col,
              renderCell: (params) => {
                const paddingLeft = params.row.depth * 20;
                const isParent = rows.some(row => row.parent === params.row.id);
                return (
                  <Grid container alignItems="center" spacing={1} style={{ paddingLeft, height: '100%', display: 'flex', justifyContent: 'center' }}>
                    {isParent && (
                      <Grid item>
                        {params.row.isExpanded ? (
                          <ExpandLess onClick={() => handleToggleExpand(params.row.id)} />
                        ) : (
                          <ExpandMore onClick={() => handleToggleExpand(params.row.id)} />
                        )}
                      </Grid>
                    )}
                   <Grid item>
                        <Checkbox
                          checked={selectedRows.has(params.row.id)}
                          onChange={() => handleRowSelection(params.row.id)}
                        />
                      </Grid>
                    <Grid item>
                      <Tooltip title={`ID: ${params.row.id}`} placement="top">
                        <Typography>{params.value}</Typography>
                      </Tooltip>
                    </Grid>
                  </Grid>
                );
              }
            };
          }
          return {
            ...col,
            renderCell: (params) => (
              <Tooltip title={`${col.headerName}: ${params.value}`} placement="top">
                <Typography>{params.value}</Typography>
              </Tooltip>
            )
          };
        })}
        getRowId={(row) => row.id}
        hideFooter
        disableColumnMenu
        disableSelectionOnClick
      />
    </div>
  );
}
