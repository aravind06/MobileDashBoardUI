import React from "react";
import axios from "axios";
import Flexbox from "flexbox-react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import MobileCard from "./mobileCard";


class DashBoard extends React.Component {
    state = {
        mobileInfo: []
    }

    componentDidMount() {
        axios.get("http://localhost:8080/listAllMobiles").then(resp => {
            this.setState({ mobileInfo: resp.data })
            console.log(resp.data);
        })
    }

    render() {
        return (
            <Flexbox flexDirection="column">
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton><MenuIcon /></IconButton>
                        {"Mobile Finder"}
                    </Toolbar>
                </AppBar>
                <Flexbox flexWrap="wrap" justifyContent="space-around" alignItems="space-around">
                    {Array.isArray(this.state.mobileInfo) ? this.state.mobileInfo.map(data =>
                        <MobileCard mobile={data} key={data.serial_id} />
                    ) : <Flexbox />}
                </Flexbox>
            </Flexbox>
        )
    }
}

export default DashBoard;