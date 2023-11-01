import React from 'react';
import './sideNav.scss'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { Link } from 'react-router-dom';



function SideNav() {
    return (
        <div className="SideNav">
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/">
                            <ListItemText primary="Simple Calculator" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/methodUpdates">
                            <ListItemText primary="Method Updates" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/autoComplete">
                            <ListItemText primary="Auto Complete" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/inputs">
                            <ListItemText primary="Input" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/selects">
                            <ListItemText primary="Select" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/tooltips">
                            <ListItemText primary="Tooltip" />
                        </ListItemButton>
                    </ListItem>

                </List>
            </nav>
        </div>
    );
}

export default SideNav;