import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Home } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import {withRouter} from 'react-router-dom';
import "../styles/header.css";
import Flexbox from 'flexbox-react';
const Header = (props) => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton onClick={() => props.history.push("/")}><Home className="icon-style"/></IconButton>
                <Flexbox className="header-title">{"Pick your Mobile"}</Flexbox>
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(Header);