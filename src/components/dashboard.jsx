import React from "react";
import Flexbox from "flexbox-react";
import { connect } from "react-redux";

import Header from "./header";
import MobileCard from "./mobileCard";
import { getAllMobileDetails, setSelectedMobile } from "../action";

class DashBoard extends React.Component {

    componentDidMount() {
        this.props.getAllMobileDetails();
    }

    render() {
        return (
            <Flexbox flexDirection="column">
                <Header />
                <Flexbox flexWrap="wrap" justifyContent="space-around" >
                    {Array.isArray(this.props.mobileList) ? this.props.mobileList.map(data =>
                        <MobileCard mobile={data} key={data.serial_id} />
                    ) : <Flexbox />}
                </Flexbox>
                {/* <a href="https://boxnovel.com/novel/the-favored-son-of-heaven/chapter-24/">click to go to boxnovel</a> */}
            </Flexbox>
        )
    }
}
const mapStateToProps = state => ({
    mobileList: state.dashboard.mobileList
});

const mapActionToProps = {
    getAllMobileDetails,
    setSelectedMobile
}

export default connect(mapStateToProps, mapActionToProps)(DashBoard);