import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = () => {

    const SearchContainer = styled('div')({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        marginBottom:20,
        width: '100%', // Full width
    });

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'white',
        width: '50%', // Controls the width of the search bar
        marginTop: 15,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Adds the shadow
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Space for the icon
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));
      
  return (
    <SearchContainer>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for Loans"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </SearchContainer>
  );
}

export default Search;
