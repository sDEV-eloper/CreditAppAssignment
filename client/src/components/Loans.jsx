import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import PaymentsIcon from "@mui/icons-material/Payments";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SavingsIcon from "@mui/icons-material/Savings";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { Typography } from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupIcon from '@mui/icons-material/Group';
import { LOAN, TOTAL_USERS } from "../utils";

const Loans = () => {
  const iconMap = {
    LoansIcon: <PaymentsIcon />,
    BorrowersIcon: <PersonRemoveIcon />,
    CashDistributedIcon: <PaymentsIcon />,
    SavingsIcon: <SavingsIcon />,
    RepaidIcon: <HowToRegIcon />,
    CashReceivedIcon: <CreditScoreIcon />,
    AccountIcon:<AccountBalanceIcon/>,
    usersIcon:<GroupIcon/>
  };

  return (
    <>
      <Box component="div">
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
    {TOTAL_USERS.map((item, index) => (
      <Grid
        container
        alignItems="center"
        key={index}
        sx={{
          flex: 1, // Ensures equal width for all Grid items
          minWidth: '200px', // Prevents shrinking too much
          maxWidth: '300px', // Optional: Keeps a max width for large screens
          height:'fit-content',
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          bgcolor: "green",
          marginBottom: 2,
        }}
      >
        <Grid item sx={{ padding: 2 }}>
          {iconMap[item.iconName] || <PaymentsIcon sx={{ fontSize: "30px", color: "white" }} />}
        </Grid>

        {/* Text section */}
        <Grid item sx={{ bgcolor: "white", padding: 2, flexGrow: 1 }}>
          <Typography variant="h4" component="div" sx={{fontSize: "20px",}} >
            {item.numbers}
          </Typography>

          <Typography variant="body1" component="div" sx={{ textTransform: "uppercase", fontSize: "12px", }}>
            {item.name}
          </Typography>
        </Grid>
      </Grid>
    ))}
  </Box>
</Box>

    </>
  );
};

export default Loans;
