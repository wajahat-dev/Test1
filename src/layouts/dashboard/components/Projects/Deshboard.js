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


const Deshboard = ({}) => {
  

  return (
    <>
 <Grid container spacing={2}>
      {/* Left side with 40% width */}
      <Grid item xs={5}>
        <Paper style={{  textAlign: 'center', height: "90vh" }}>
        <NavTabs />
        {/* <TreeUI /> */}
        </Paper>
      </Grid>
      {/* Right side with 60% width */}
      <Grid item xs={7}>
        <Paper style={{  textAlign: 'center' }}>
        <MapWithPlacemark />

        </Paper>
      </Grid>
    </Grid>
    </>
  );
};

export default Deshboard;
