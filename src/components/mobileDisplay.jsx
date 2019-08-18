import React from "react";
import Flexbox from "flexbox-react";

import Header from "./header";
import { connect } from "react-redux";

export function MobileDisplay(props) {
    console.log(props);
    return (
        <Flexbox flexDirection="column">
            <Header />
            Mobile Details
            <Flexbox>{props.selectedMobile.name}</Flexbox>
        </Flexbox>
    )
}

const mapStateToProps = state => ({
    selectedMobile: state.dashboard.selectedMobile
});

const mapActionToProps = {

};

export default connect(mapStateToProps, mapActionToProps)(MobileDisplay);