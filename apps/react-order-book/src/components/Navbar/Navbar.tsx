import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Narbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}> */}
                    <Link to="/home" style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                        <img src="./icons/omni-tech.png" height={45}></img>
                    </Link>
                    {/* </IconButton> */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            mr: 2,
                            background: { color: '#000' },
                        }}
                    >
                        <Link to="/home" style={{ display: 'flex', alignItems: 'center' }}>
                            Home
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div">
                        <Link to="/tab" style={{ display: 'flex', alignItems: 'center' }}>
                            Tab
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default Narbar;
