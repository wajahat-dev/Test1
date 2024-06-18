import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";
import * as reduxData from "context/useGlobalData";
import { useState, memo } from "react";
import GridUI3 from "layouts/dashboard/components/Projects/GridUI3";
import { makeDate } from "../../../../helper/func";
import useData from "../../hook/useData";
import { dp_status, dp_region } from "../../../emailcopy/components/Projects/data/index";
import DraggableModal from "./DraggableModal";
import DraggableFormModal from "./DraggableFormModal";
import NavTabs from "./NavTabs";
import './Modal.css'; // Optional: Add custom styles if needed
import MapWithPlacemark from './MapWithPlacemark';
import TreeUI from './TreeUI';
import RowGrouping from './RowGrouping';
import MapComponent from './MapComponent';
import VerticalTabs from 'components/VerticalTabs';


const Deshboard = ({ }) => {

  const tabs = [
    { label: 'Item One', content: <h1>Content for Item One</h1>},
    { label: 'Item Two', content: 'Content for Item Two' },
    { label: 'Item Three', content: 'Content for Item Three' },
    { label: 'Item Four', content: 'Content for Item Four' },
    { label: 'Item Five', content: 'Content for Item Five' },
    { label: 'Item Six', content: 'Content for Item Six' },
    { label: 'Item Seven', content: 'Content for Item Seven' },
  ];
  return (
    <>
    <DraggableFormModal />
      <Grid container spacing={2} style={{ height: '100vh' }}>
      {/* Left side with 40% width */}
      <Grid item xs={5}>
        <Paper style={{ textAlign: 'center', height: '100%', overflow: 'auto' }}>
          <NavTabs />
          {/* Content for left side */}
        </Paper>
      </Grid>
      {/* Right side with 60% width */}
      <Grid item xs={7}>
        <Paper style={{ textAlign: 'center', height: '100%', overflow: 'auto' }}>
          <MapComponent />
          <VerticalTabs tabs={tabs} />

          {/* Content for right side */}
        </Paper>
      </Grid>
    </Grid>
    </>
  );
};

export default Deshboard;
