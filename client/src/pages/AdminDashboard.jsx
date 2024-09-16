import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CustomSeparator from "../components/CustomSeparator";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CustomizedMenus from "../components/Menu";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Loans from "../components/Loans";
import AppliedLoans from "../components/AppliedLoans";
import AdminAppliedLoans from "../components/AdminAppliedLoans";

const drawerWidth = 200;

export default function AdminDashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomSeparator />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "white",
          color: "#0f3d23",
        }}
      >
        <Toolbar>
        <Box
  component="div"
  sx={{  display: "flex", justifyContent: "space-between", alignItems: "center" , width:"100%"}}
>
  {/* Left side - CREDIT APP text */}
  <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
    CREDIT APP
  </Typography>

  {/* Right side - Icons and CustomizedMenus */}
  <Box
    component="div"
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1, // Space between icons and menu
    }}
  >
    <NotificationsIcon sx={{ fontSize: "24px" }} />
    <SmsRoundedIcon sx={{ fontSize: "24px" }} />
    <CustomizedMenus />
  </Box>
</Box>


        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: 'drawerWidth',
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#0f3d23",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <h2 className="flex justify-center gap-2 font-bold text-xl text-center  p-4 bg-[#243629] text-[#adcf1a] items-center">
          <AccountCircleIcon sx={{ fontSize: 40 }} />
          John Okoho
        </h2>
        <List>
          {["Dashboard", "Borrowers", "Loans", "Setting", "Sign Out"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 && <DashboardIcon sx={{ color: "white" }} />}
                    {index === 1 && (
                      <PersonRemoveIcon sx={{ color: "white" }} />
                    )}
                    {index === 2 && <PaymentIcon sx={{ color: "white" }} />}
                    {index === 3 && <SettingsIcon sx={{ color: "white" }} />}
                    {index === 4 && <ExitToAppIcon sx={{ color: "white" }} />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 4, width:'100%' }}
      >
        <Toolbar />
        <Loans/>
        <Box>
        <AdminAppliedLoans/>
        </Box>
      </Box>
    </Box>
  );
}
