
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    
    color: #696969;
`;
    
const Tabs = styled(NavLink)`
    margin-right: 20px;
    text-decoration: none;
    font-size: 50px;
`;

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
            
                <Tabs to="all" exact>All Books</Tabs>
                <Tabs to="add" exact>Add Book</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;