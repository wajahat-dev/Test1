import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LayersIcon from '@mui/icons-material/Layers';
import GroupIcon from '@mui/icons-material/Group';
import RowGrouping from './RowGrouping';
import CustomDateTimePickerUI from './CustomDateTimePickerUI';
import RowGroupingHistory from './RowGroupingHistory';
import DragableModalUI from 'components/DragableModalUI';

function TabPanel({ value, index, children, ...other }: any) {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      // style={{
      //   height: '100%',
      //   display: value === index ? 'block' : 'none',
      //   overflow: 'auto', // Add overflow:auto if you want scrollbars when content exceeds height
      // }}
      {...other}
    >
      {value === index && (
        // <Box sx={{ p: 3 }}>
        //   <Typography>{children}</Typography>
        // </Box>
        children
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

function NavTabs() {
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const handleClosexxx= ()=>{

  }

  const handleClosexxx1= ()=>{
    
  }

  return (
    // <Box sx={{ width: '100%' }}>
    <div style={{ height: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="nav tabs"
        sx={{ backgroundColor: '#0080a4' }}
      >
        <Tab icon={<HomeIcon />} label="MAIN" {...a11yProps(0)} sx={{ color: 'white' }} />
        <Tab icon={<HistoryIcon />} label="HISTORY" {...a11yProps(1)} sx={{ color: 'white' }} />
        <Tab icon={<DescriptionIcon />} label="REPORTS" {...a11yProps(2)} sx={{ color: 'white' }} />
        <Tab icon={<NotificationsIcon />} label="EVENTS" {...a11yProps(3)} sx={{ color: 'white' }} />

      </Tabs>
      
      <TabPanel value={value} index={0}>
      <Tabs
        value={value1}
        onChange={handleChange1}
        variant="fullWidth"
        aria-label="nav tabs"
        sx={{ backgroundColor: '#0080a4' }}
      >

        <Tab icon={<LocationOnIcon />} label="ONLINE" {...a11yProps(0)} sx={{ color: 'white' }} />
        <Tab icon={<LayersIcon />} label="ZONES" {...a11yProps(1)} sx={{ color: 'white' }} />
        <Tab icon={<GroupIcon />} label="CLIENTS" {...a11yProps(2)} sx={{ color: 'white' }} />
      </Tabs>
        <TabPanel value={value1} index={0}>
        <RowGrouping />
        <DragableModalUI handleClose={handleClosexxx} handleSave={handleClosexxx1} >asdfasdf</DragableModalUI >
        </TabPanel>
        <TabPanel value={value1} index={1}>
          <span>  Zones Content</span>
        </TabPanel>
        <TabPanel value={value1} index={2}>
          <span>  Clients Content</span>
        </TabPanel>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <span>History Content</span>
         */}
        <CustomDateTimePickerUI />
        <CustomDateTimePickerUI />
        <RowGroupingHistory />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <span>Reports Content</span>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <span> Events Content</span>
      </TabPanel>

    </div>
  );
}

export default NavTabs;
