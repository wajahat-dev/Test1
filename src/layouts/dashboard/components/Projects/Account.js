// import { useEffect } from "react";
// import * as reduxData from "context/useGlobalData";
// import { useState, memo } from "react";
// import GridUI3 from "layouts/dashboard/components/Projects/GridUI3";
// import { makeDate } from "../../../../helper/func";
// import useData from "../../hook/useData";
// import { dp_status, dp_region } from "../../../emailcopy/components/Projects/data/index";

// const Deshboard = ({}: any) => {
//   const { getDeshboardData, customerListRedux, KMOwnerListRedux, sectorListRedux } = useData();
//   const [controller, dispatch] = reduxData.useGlobalController();
//   const [rows, setRows] = useState([]);

//   useEffect(() => {
//     console.log('asdfasdfasdfasdf',rows)
//     reduxData.setGridData(dispatch, rows);
//   }, [rows]);

//   useEffect(() => {
//     const fetch = async () => {
//       const data = await getDeshboardData();
//       setRows(data);
//     };
//     fetch();
//   }, []);

//   const columns = [
//     { editable: false, field: "id", headerName: "S/N", width: 70 },
//     {
//       editable: true,
//       valueGetter: makeDate,
//       type: "date",
//       field: "dateReceived",
//       headerName: "Date Received",
//       width: 130,
//     },
//     {
//       editable: true,
//       valueGetter: makeDate,
//       type: "date",
//       field: "dueDateByKAM",
//       headerName: "Due Date by KAM /Customer",
//       width: 130,
//     },
//     {
//       editable: true,
//       valueGetter: makeDate,
//       type: "date",
//       field: "projectLevel",
//       headerName: "Project Level",
//       width: 130,
//     },
//     { editable: true, field: "tat", headerName: "TAT", width: 130 },
//     {
//       editable: true,
//       type: "number",
//       field: "projectLWC",
//       headerName: "Project Life (Work Days)",
//       width: 130,
//     },
//     {
//       editable: true,
//       type: "singleSelect",
//       valueOptions: dp_status,
//       field: "status",
//       headerName: "Status/Dependencies",
//       width: 130,
//     },
//     {
//       editable: true,
//       type: "singleSelect",
//       valueOptions: customerListRedux.map((e) => e.customerName),
//       field: "customer",
//       headerName: "Customer",
//       width: 130,
//     },
//     {
//       editable: true,
//       type: "singleSelect",
//       valueOptions: dp_region,
//       field: "region",
//       headerName: "Region",
//       width: 130,
//     },
//     {
//       editable: true,
//       type: "singleSelect",
//       field: "kamOwner",
//       valueOptions: KMOwnerListRedux.map((e) => e.ownerName),
//       headerName: "KAM/ Owner",
//       width: 130,
//     },
//     {
//       editable: true,
//       type: "singleSelect",
//       valueOptions: sectorListRedux.map((e) => e.sectorName),
//       field: "sector",
//       headerName: "Sector",

//       width: 130,
//     },
//     {
//       editable: true,
//       type: "singleSelect",
//       valueOptions: KMOwnerListRedux.map((e) => e.ownerName),
//       field: "pstAssign",
//       headerName: "Pre-Sales task Assigned to",
//       width: 130,
//     },
//     { editable: true, field: "requirement", headerName: "Requirement / Query", width: 130 },
//     {
//       editable: true,
//       type: "number",
//       field: "psrUpdates",
//       headerName: "Pre-Sales Remarks / Updates",
//       width: 130,
//     },
//     {
//       editable: true,
//       type: "number",
//       field: "proposedSolution",
//       headerName: "Proposed Solution",
//       width: 130,
//     },
//     {
//       editable: true,
//       type: "number",
//       field: "srdiother",
//       headerName: "Sale/ Rental/ Demo/ In-House/ Other",
//       width: 130,
//     },
//     {
//       editable: true,
//       type: "number",
//       valueGetter: makeDate,
//       type: "date",
//       field: "submissionTo",
//       headerName: "Submission to KAM/ Owner",
//       width: 130,
//     },
//     {
//       editable: true,
//       type: "number",
//       field: "additionR",
//       headerName: "Additional Remarks",
//       width: 130,
//     },
//   ];

//   const headers = [
//     { key: "id", name: "S/N", required: true },
//     {
//       key: "dateReceived",
//       name: "Date Received",
//       required: true,
//     },
//     {
//       key: "dueDateByKAM",
//       name: "Due Date by KAM /Customer",
//     },
//     {
//       key: "projectLevel",
//       name: "Project Level",
//       required: true,
//     },
//     { key: "tat", name: "TAT" },
//     { key: "projectLWC", name: "Project Life (Work Days)" },
//     { key: "status", name: "Status/Dependencies", required: true },
//     { key: "customer", name: "Customer", required: true },
//     { key: "region", name: "Region", required: true },
//     { key: "kamOwner", name: "KAM/ Owner", required: true },
//     { key: "sector", name: "Sector", required: true },
//     { key: "pstAssign", name: "Pre-Sales task Assigned to", required: true },
//     { key: "requirement", name: "Requirement / Query", required: true },
//     { key: "psrUpdates", name: "Pre-Sales Remarks / Updates" },
//     { key: "proposedSolution", name: "Proposed Solution" },
//     { key: "srdiother", name: "Sale/ Rental/ Demo/ In-House/ Other" },
//     { key: "submissionTo", name: "Submission to KAM/ Owner" },
//     { key: "additionR", name: "Additional Remarks" },
//   ];

//   return (
//     <>
//       <GridUI3
//         headers={headers}
//         columns={columns}
//         fieldToFocus={"dateReceived"}
//         setRows={setRows}
//         rows={rows}
//         fileName={"Deshboard"}
//       />
//     </>
//   );
// };

// export default memo(Deshboard);

import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const data  = [
  {
    "id": 1,
    "time": "14:11:00",
    "Name": "김환자",
    "doctorName": "권아영",
    "status": "진료중",
    "remark": "배가아픔"
  },
  {
    "id": 2,
    "time": "14:20:00",
    "Name": "홍길동",
    "doctorName": "권아영",
    "status": "대기중",
    "remark": "소화불량"
  },
  {
    "id": 3,
    "time": "14:31:00",
    "Name": "이순신",
    "doctorName": "권아영",
    "status": "대기중",
    "remark": "과음"
  },
  {
    "id": 4,
    "time": "14:55:00",
    "Name": "박순자",
    "doctorName": "권아영",
    "status": "대기중",
    "remark": "구토증상"
  }
]



const columns = [
  { field: "id", headerName: "순번", width: 70 },
  {
    field: "time",
    headerName: "내원시간",
    width: 110,
    sortable: true
  },
  {
    field: "Name",
    headerName: "환자명",
    width: 120
  },
  {
    field: "doctorName",
    headerName: "담당의",
    width: 120,
    editable: true
  },
  {
    field: "status",
    headerName: "상태",
    sortable: true,
    width: 100
  },
  {
    field: "remark",
    headerName: "방문목적",
    description: "환자의 상태",
    sortable: false,
    width: 160
  }
];

const rows = data.map((value) => value);

const Account = (props) => {
  const [selectedRow, setSelectedRow] = React.useState();
  const [contextMenu, setContextMenu] = React.useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setSelectedRow(Number(event.currentTarget.getAttribute("data-id")));
    setContextMenu(
      contextMenu === null
        ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 }
        : null
    );
  };

  const handleClose = () => {
    // contextMenu 그냥 닫을 때
    setContextMenu(null);
  };

  const diagnosis = () => {
    // 진료시작
    console.log(selectedRow);
  };

  const changeDiagnosis = () => {
    // 진료 대기로 변경
    console.log(selectedRow);
  };

  const changeDoctor = () => {
    // 의사 변경
    console.log(selectedRow);
  };

  const cancleDiagnosis = () => {
    // 진료 취소
    console.log(selectedRow);
  };

  return (
    <div style={{ height: 570 }}>
      <DataGrid
        rows={rows}
        getRowId={(row) => row.id}
        columns={columns}
        slotProps={{
          row: {
            onContextMenu: handleContextMenu,
            style: { cursor: "context-menu" }
          }
        }}
        rowsPerPageOptions={[15]}
        options={{
          paging: false
        }}
      />
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        componentsProps={{
          root: {
            onContextMenu: (e) => {
              e.preventDefault();
              handleClose();
            }
          }
        }}
      >
        <MenuItem onClick={diagnosis}>진료</MenuItem>
        <MenuItem onClick={changeDiagnosis}>진료 대기 변경</MenuItem>
        <MenuItem onClick={changeDoctor}>담당 의사 변경</MenuItem>
        <MenuItem onClick={cancleDiagnosis}>진료 취소</MenuItem>
      </Menu>
    </div>
  );
};

export default Account;