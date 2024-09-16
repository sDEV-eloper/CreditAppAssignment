import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CustomizedMenus from "../components/Menu";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Home from "@mui/icons-material/Home";
import ToggleButtons from "../components/ToggleButtons";
import Search from "../components/Search";
import DeficitCard from "../components/DeficitCard";
import AppliedLoans from "../components/AppliedLoans";


export default function UserHomeSection() {

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

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
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
             
            }}
          >
            {/* Left side - CREDIT APP text */}
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              CREDIT APP
            </Typography>

            {/* middle  */}
            <Box sx={{ display: "flex", gap:4 }}>
              <Typography sx={{ textAlign: "center", color: "#0f3d23",  fontSize:16 }}>
                <Home sx={{fontSize:26, marginRight:1 }} />
                Home
              </Typography>
              <Typography sx={{ textAlign: "center", color: "#0f3d23",  fontSize:16 }}>
                <PaymentsIcon sx={{fontSize:26, marginRight:1 }} />
                Payment
              </Typography>
              <Typography sx={{ textAlign: "center", color: "#0f3d23",  fontSize:16 }}>
                <AccountBalanceWalletIcon sx={{fontSize:26, marginRight:1 }} />
                Budget
              </Typography>
              <Typography sx={{ textAlign: "center", color: "#0f3d23",  fontSize:16 }}>
                <CreditCardIcon sx={{fontSize:26, marginRight:1 }} />
                Card
              </Typography>
             
            </Box>

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

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3,  backgroundColor:'#e5e5e5' }}
      >
        <Toolbar />
        <DeficitCard/>
        <ToggleButtons/>
   
          <Search/>
        <AppliedLoans/>
      </Box>
    </Box>
  );
}
