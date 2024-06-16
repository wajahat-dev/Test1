
import {Grid,Card} from "@mui/material";
import MDBox from "components/MDBox";
import MDSnackbar from "components/MDSnackbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Deshboard from 'layouts/dashboard/components/Projects/Deshboard';
import FooterUI from "./../../examples/Footer/FooterUI";
import { Template } from "./../globalcomponents/Templates";
import useData from "./hook/useData";

function Dashboard() {
  const { successSB, closeSuccessSB } = useData();

  return (
    <>
      {successSB && (
        <MDSnackbar
          color="success"
          icon="check"
          title="Material Dashboard"
          content="Hello, world! This is a success notification message"
          dateTime="11 mins ago"
          open={successSB}
          onClose={closeSuccessSB}
          close={closeSuccessSB}
        />
      )}
      {/* <DashboardLayout> */}
        {/* <DashboardNavbar /> */}
        {/* <MDBox py={3}>
      <MDBox style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <Grid container spacing={3} style={{ minHeight: '100%' }}>
            <Grid item xs={12} md={12} lg={12} style={{ minHeight: '100%' }}>
              <Card>
                <Deshboard />
              </Card>
            </Grid>
          </Grid>
        </div>
      </MDBox>
    </MDBox> */}
     {/* <Card style={{ height: '90vh'}}>
                <Deshboard />
              </Card> */}

              <MDBox >
      <Card style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, overflowY: 'auto' }}>
        <Deshboard />
        </div>
      </Card>
    </MDBox>
        {/* <FooterUI /> */}
      {/* </DashboardLayout> */}
    </>
  );
}

export default Dashboard;
