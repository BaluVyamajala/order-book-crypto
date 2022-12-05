import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Home, Navbar, Tab } from './components';
const App = () => {
    return (
        <div>
            {' '}
            <BrowserRouter>
                <Box>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/tab" element={<Tab />}></Route>
                    </Routes>
                </Box>
            </BrowserRouter>
        </div>
    );
};

export default App;
