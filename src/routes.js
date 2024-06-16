
import Dashboard from "layouts/dashboard";
import Accounts from "layouts/dashboard/components/Projects/Account";
import Summary from "layouts/summary";
import Icon from "@mui/material/Icon";
import EmailCopy from './layouts/emailcopy/index';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Accounts",
    key: "graphs",
    icon: <AssignmentIcon />,
    route: "/graphs",
    component: <Accounts />,
  },
  {
    type: "collapse",
    name: "Vehicles",
    key: "EmailCopy",
    icon: <Icon fontSize="small">DirectionsCarFilledIcon</Icon>,
    route: "/emailcopy",
    component: <EmailCopy />,
  },
  {
    type: "collapse",
    name: "Finances",
    key: "summary",
    icon: <AccountBalanceIcon />,
    route: "/summary",
    component: <Summary />,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "summary",
    icon: <AccountCircleIcon />,
    route: "/summary",
    component: <Summary />,
  },
];

export default routes;
