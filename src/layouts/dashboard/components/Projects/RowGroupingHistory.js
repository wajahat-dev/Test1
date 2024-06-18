import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Checkbox, FormControlLabel, FormGroup, Grid, IconButton, Menu, MenuItem, Tooltip, Typography, TextField } from '@mui/material';
import { ExpandLess, ExpandMore, MoreVert } from '@mui/icons-material';

const columns = [
  { field: 'object', headerName: 'Objects', width: 200 },

];

const initialRows = [
  { id: 1, object: 'Parent 1', status: 'Active', parent: null },
  { id: 2, object: 'Child 1.1', status: 'Active',  parent: 1 },
  { id: 3, object: 'Child 1.2', status: 'Inactive', parent: 1 },
  { id: 4, object: 'Parent 2', status: 'Inactive',  parent: null },
  { id: 5, object: 'Child 2.1', status: 'Active', parent: 4 },
  { id: 6, object: 'Child 2.2', status: 'Inactive',  parent: 4 }
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

export default function RowGroupingHistory() {
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


  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const highlightText = (text, highlight) => {
    // Case insensitive search and replace
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: 'yellow' }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const renderCell = (params) => {
    const text = params.value ? String(params.value) : '';
    return searchText ? highlightText(text, searchText) : text;
  };

  const [filterText1, setFilterText1] = useState('');

  useEffect(() => {
    if (!filterText1) {
      setRows(initialRows); // Reset to initial rows when filter text is empty
      return;
    }
  
    // Function to recursively filter rows and include children
    const filterRowsRecursive = (rows, filterText) => {
      return rows.filter(row => {
        const matchesFilter = row.object.toLowerCase().includes(filterText.toLowerCase());
        const children = initialRows.filter(child => child.parent === row.id);
        const filteredChildren = filterRowsRecursive(children, filterText);
        return matchesFilter || filteredChildren.length > 0;
      });
    };
  
    // Filter rows recursively to include parents and their matching children
    const filteredRows = filterRowsRecursive(initialRows, filterText1);
    setRows(filteredRows);
  }, [filterText1]);
  
  const handleFilterChange1 = (e) => {
    setFilterText1(e.target.value);
  };


  return (
    <div style={{ height: 600, width: '100%' }}>
 <TextField
        label="Filter by name"
        variant="outlined"
        fullWidth
        value={filterText1}
        onChange={handleFilterChange1}
        style={{ marginBottom: 16 }}
      />
<input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearch}
        style={{ marginBottom: '10px', padding: '5px' }}
      />
      <IconButton onClick={handleMenuOpen}>
        <MoreVert />
      </IconButton>
      
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
                        {/* <Typography>{params.value}</Typography> */}
                        <Typography>{renderCell(params)}</Typography>
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
