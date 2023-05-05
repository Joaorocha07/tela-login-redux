import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
  } from 'react-router-dom';

    import { Login } from '../pages/Login';
  
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};
  
export default AppRoutes;
  