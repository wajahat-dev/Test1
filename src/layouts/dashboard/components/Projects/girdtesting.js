// import React, { useState } from 'react';
// import DataGrid, { Column, TreeDataGrid } from 'react-data-grid';
// // import 'react-data-grid/lib/styles.css';
// import './aaa.css';
// import { groupBy as rowGrouper } from 'lodash-es';
// import { Box } from '@mui/material';



// const columns = [
//     { key: 'id', name: 'ID' },
//     { key: 'title', name: 'Title' },
//     { key: 'email', name: 'Email' },
//     { key: 'status', name: 'Status' },
//     { key: 'priority', name: 'Priority' },
//     { key: 'gender', name: 'Gender' },
//     { key: 'month', name: 'Month' },
// ];

// const generateRows = () => {
//     const rows = [];
//     const titles = ['Example', 'Demo']; // For repeating titles
//     const emails = ['test@example.com', 'user@example.com', 'another@example.com']; // Sample emails
//     const priorities = ['1', '2', '3', '4', '5']; // Priorities
//     const statuses = [
//         'ready',
//         'progress',
//         'testing',
//         'complete'
//     ]; // Statuses

//     const months = Array.from({ length: 12 }, (_, i) => {
//         const date = new Date(0, i);
//         return date.toLocaleString('default', { month: 'long' });
//     });

//     for (let i = 1; i < 20; i++) {
//         rows.push({
//             id: i,
//             title: titles[i % titles.length],
//             email: emails[i % emails.length],
//             status: statuses[i % statuses.length],
//             priority: priorities[i % priorities.length],
//             gender: i % 2 === 0 ? 'Male' : 'Female',
//             month: months[i % priorities.length],
//         });
//     }

//     return rows;
// };


// const options = ['email',
//     'status',
//     'priority',
//     'gender',
//     'month'];


// // 1122
// const GroupBy = () => {
//     const rows = generateRows();

//     const [selectedOptions, setSelectedOptions] = useState([
//         // options[0],
//         // options[1]
//     ]);
//     const [expandedGroupIds, setExpandedGroupIds] = useState(
//         () =>
//             new Set(['United States of America', 'United States of America__2015'])
//     );


//     function toggleOption(option, enabled) {
//         const index = selectedOptions.indexOf(option);
//         if (enabled) {
//             if (index === -1) {
//                 setSelectedOptions((options) => [...options, option]);
//             }
//         } else if (index !== -1) {
//             setSelectedOptions((options) => {
//                 const newOptions = [...options];
//                 newOptions.splice(index, 1);
//                 return newOptions;
//             });
//         }
//         setExpandedGroupIds(new Set());
//     }

//     function rowKeyGetter(row) {
//         return row.id;
//     }
//     const columns = [
//         { key: 'id', name: 'ID' },
//         { key: 'title', name: 'Title' }
//       ];
      
//       const rows1 = [
//         { id: 0, title: 'Example' },
//         { id: 1, title: 'Demo' }
//       ];
//     return (
//         // <Box width={"80%"} m={"auto"}>

//         //     <Box display={"flex"} gap="2" my={1} mt={2}>
//         //         <b>Group by:</b>
//         //         {options.map((option) => (
//         //             <label key={option}>
//         //                 <input
//         //                     type="checkbox"
//         //                     checked={selectedOptions.includes(option)}
//         //                     onChange={(event) => toggleOption(option, event.target.checked)}
//         //                 />{' '}
//         //                 {option}
//         //             </label>
//         //         ))}
//         //     </Box>

//         //     <TreeDataGrid
//         //         columns={columns}
//         //         rows={rows}

//         //         rowKeyGetter={rowKeyGetter}
//         //         style={{ height: "60vh" }}

//         //         groupBy={selectedOptions}
//         //         rowGrouper={rowGrouper}

//         //         expandedGroupIds={expandedGroupIds}
//         //         onExpandedGroupIdsChange={setExpandedGroupIds}

//         //         defaultColumnOptions={{ resizable: true }}
//         //         direction={'ltr'}

//         //     />
//         // </Box>
//         <Box>

// <DataGrid columns={columns} rows={rows1} />
//         </Box>
//     );
// };

// export default GroupBy;


// import React, { useState } from 'react';
// import DataGrid from 'react-data-grid';
// import './aaa.css';
// const columns = [
//   { key: 'object', name: 'Objects' },
//   { key: 'status', name: 'Status' },
//   { key: 'updated', name: 'Updated' },
//   { key: 'tags', name: 'Tags' },
//   { key: 'key', name: 'Key' },
//   { key: 'number', name: 'Number' },
//   { key: 'abc', name: 'ABC' },
//   { key: 'abcdStatus', name: 'abcd Status' }
// ];

// const initialRows = [
//   {
//     id: 1, object: 'Parent 1', status: 'Active', updated: '2024-06-18', tags: 'Tag1',
//     key: 'Key1', number: '123', abc: 'ABC1', abcdStatus: 'Status1', subRows: [
//       { id: 2, object: 'Child 1.1', status: 'Active', updated: '2024-06-18', tags: 'Tag2', key: 'Key2', number: '456', abc: 'ABC2', abcdStatus: 'Status2' },
//       { id: 3, object: 'Child 1.2', status: 'Inactive', updated: '2024-06-18', tags: 'Tag3', key: 'Key3', number: '789', abc: 'ABC3', abcdStatus: 'Status3' }
//     ]
//   },
//   {
//     id: 4, object: 'Parent 2', status: 'Inactive', updated: '2024-06-18', tags: 'Tag4',
//     key: 'Key4', number: '101', abc: 'ABC4', abcdStatus: 'Status4', subRows: [
//       { id: 5, object: 'Child 2.1', status: 'Active', updated: '2024-06-18', tags: 'Tag5', key: 'Key5', number: '112', abc: 'ABC5', abcdStatus: 'Status5' },
//       { id: 6, object: 'Child 2.2', status: 'Inactive', updated: '2024-06-18', tags: 'Tag6', key: 'Key6', number: '131', abc: 'ABC6', abcdStatus: 'Status6' }
//     ]
//   }
// ];

// function RowRenderer({ row, column }: any) {

//   return (
//     <div style={{ paddingLeft: row.parent ? '20px' : '0px' }}>
//       {row[column.key]}
//     </div>
//   );
// }

// export default function TreeGrid() {
//   const [rows, setRows] = useState(initialRows);
//   const [selectedRows, setSelectedRows] = useState(new Set());

//   const handleRowClick = (row) => {
//     const newSelectedRows = new Set(selectedRows);
//     if (newSelectedRows.has(row.id)) {
//       newSelectedRows.delete(row.id);
//       if (row.subRows) {
//         row.subRows.forEach(subRow => newSelectedRows.delete(subRow.id));
//       }
//     } else {
//       newSelectedRows.add(row.id);
//       if (row.subRows) {
//         row.subRows.forEach(subRow => newSelectedRows.add(subRow.id));
//       }
//     }
//     setSelectedRows(newSelectedRows);
//   };

//   const flattenRows = (rows) => {
//     const flatRows = [];
//     rows.forEach(row => {
//       flatRows.push(row);
//       if (row.subRows) {
//         row.subRows.forEach(subRow => {
//           flatRows.push({ ...subRow, parent: row.id });
//         });
//       }
//     });
//     return flatRows;
//   };

//   const rowsFlattened = flattenRows(rows);

//   return (
//     <DataGrid
//       columns={columns}
//       rows={rowsFlattened}
//       rowRenderer={RowRenderer}
//       onRowClick={(row) => handleRowClick(row)}
//       selectedRows={selectedRows}
//     />
//   );
// }


// import React, { useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Checkbox, Grid } from '@mui/material';
// import { ExpandLess, ExpandMore } from '@mui/icons-material';

// const columns = [
//   { field: 'object', headerName: 'Objects', width: 200 },
//   { field: 'status', headerName: 'Status', width: 150 },
//   { field: 'updated', headerName: 'Updated', width: 150 },
//   { field: 'tags', headerName: 'Tags', width: 150 },
//   { field: 'key', headerName: 'Key', width: 150 },
//   { field: 'number', headerName: 'Number', width: 150 },
//   { field: 'abc', headerName: 'ABC', width: 150 },
//   { field: 'abcdStatus', headerName: 'abcd Status', width: 150 }
// ];

// const initialRows = [
//   { id: 1, object: 'Parent 1', status: 'Active', updated: '2024-06-18', tags: 'Tag1', key: 'Key1', number: '123', abc: 'ABC1', abcdStatus: 'Status1', parent: null },
//   { id: 2, object: 'Child 1.1', status: 'Active', updated: '2024-06-18', tags: 'Tag2', key: 'Key2', number: '456', abc: 'ABC2', abcdStatus: 'Status2', parent: 1 },
//   { id: 3, object: 'Child 1.2', status: 'Inactive', updated: '2024-06-18', tags: 'Tag3', key: 'Key3', number: '789', abc: 'ABC3', abcdStatus: 'Status3', parent: 1 },
//   { id: 4, object: 'Parent 2', status: 'Inactive', updated: '2024-06-18', tags: 'Tag4', key: 'Key4', number: '101', abc: 'ABC4', abcdStatus: 'Status4', parent: null },
//   { id: 5, object: 'Child 2.1', status: 'Active', updated: '2024-06-18', tags: 'Tag5', key: 'Key5', number: '112', abc: 'ABC5', abcdStatus: 'Status5', parent: 4 },
//   { id: 6, object: 'Child 2.2', status: 'Inactive', updated: '2024-06-18', tags: 'Tag6', key: 'Key6', number: '131', abc: 'ABC6', abcdStatus: 'Status6', parent: 4 }
// ];

// const getVisibleRows = (rows, expandedParents) => {
//   const map = new Map();
//   rows.forEach(row => {
//     map.set(row.id, { ...row, children: [] });
//   });

//   const visibleRows = [];

//   rows.forEach(row => {
//     if (row.parent === null) {
//       visibleRows.push(map.get(row.id));
//     } else {
//       const parent = map.get(row.parent);
//       if (parent) {
//         parent.children.push(map.get(row.id));
//       }
//     }
//   });

//   const flattenRows = (rows, depth = 0) => {
//     return rows.flatMap(row => [
//       { ...row, depth, isExpanded: expandedParents.has(row.id) },
//       ...(expandedParents.has(row.id) ? flattenRows(row.children, depth + 1) : [])
//     ]);
//   };

//   return flattenRows(visibleRows);
// };

// export default function TreeGrid() {
//   const [rows, setRows] = useState(initialRows);
//   const [selectedRows, setSelectedRows] = useState(new Set());
//   const [expandedParents, setExpandedParents] = useState(new Set());

//   const handleRowSelection = (rowId) => {
//     const newSelectedRows = new Set(selectedRows);
//     const row = rows.find(r => r.id === rowId);

//     const toggleRow = (id, selected) => {
//       if (selected) {
//         newSelectedRows.add(id);
//       } else {
//         newSelectedRows.delete(id);
//       }
//     };

//     const selectChildren = (row, selected) => {
//       toggleRow(row.id, selected);
//       row.children?.forEach(child => selectChildren(child, selected));
//     };

//     if (newSelectedRows.has(rowId)) {
//       selectChildren(row, false);
//     } else {
//       selectChildren(row, true);
//     }

//     setSelectedRows(newSelectedRows);
//   };

//   const handleToggleExpand = (rowId) => {
//     const newExpandedParents = new Set(expandedParents);
//     if (newExpandedParents.has(rowId)) {
//       newExpandedParents.delete(rowId);
//     } else {
//       newExpandedParents.add(rowId);
//     }
//     setExpandedParents(newExpandedParents);
//   };

//   const visibleRows = getVisibleRows(rows, expandedParents);

//   return (
//     <div style={{ height: 600, width: '100%' }}>
//       <DataGrid
//         rows={visibleRows}
//         columns={columns.map(col => {
//           if (col.field === 'object') {
//             return {
//               ...col,
//               renderCell: (params) => {
//                 const paddingLeft = params.row.depth * 20;
//                 const isParent = rows.some(row => row.parent === params.row.id);
//                 return (
//                   <Grid container alignItems="center" spacing={1} style={{ paddingLeft }}>
//                     <Grid item>
//                       <Checkbox
//                         checked={selectedRows.has(params.row.id)}
//                         onChange={() => handleRowSelection(params.row.id)}
//                       />
//                     </Grid>
//                     {isParent && (
//                       <Grid item>
//                         {params.row.isExpanded ? (
//                           <ExpandLess onClick={() => handleToggleExpand(params.row.id)} />
//                         ) : (
//                           <ExpandMore onClick={() => handleToggleExpand(params.row.id)} />
//                         )}
//                       </Grid>
//                     )}
//                     <Grid item>
//                       {params.value}
//                     </Grid>
//                   </Grid>
//                 );
//               }
//             };
//           }
//           return col;
//         })}
//         getRowId={(row) => row.id}
//         hideFooter
//         disableColumnMenu
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }
