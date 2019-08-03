import React from "react";

import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Flexbox from "flexbox-react";

export default function MobileDisplay() {
    return (
        <Flexbox flexDirection="column">
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton><MenuIcon /></IconButton>
                    {"Mobile Finder"}
                </Toolbar>
            </AppBar>
            Mobile Details
        </Flexbox>
    )
}