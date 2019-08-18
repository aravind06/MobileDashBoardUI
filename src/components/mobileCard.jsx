import React from "react";
import Flexbox from "flexbox-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "../styles/card.css";
import { setSelectedMobile } from "../action";

class MobileCard extends React.Component {

    handleCardSelection() {
        console.log(this.props.mobile);
        this.props.setSelectedMobile(this.props.mobile);
        this.props.history.push('/details')
    }

    render() {
        const { mobile } = this.props;
        //return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return (
            <Flexbox flexDirection="column" className="card-layout" onClick={() => this.handleCardSelection()}>
                <Flexbox flexDirection="column" className="card-content" justifyContent="center" alignItems="center" flexGrow={1}>
                    <Flexbox><img className="card-image" src={mobile.imageUrl} alt={mobile.name} /></Flexbox>
                    <Flexbox>{mobile.name}</Flexbox>
                    <Flexbox className="card-price">{`RS.${mobile.price}`}</Flexbox>
                </Flexbox>
                <Flexbox className="card-detail" justifyContent="center"><Flexbox >{"View Details"}</Flexbox></Flexbox>
            </Flexbox>
        )
    }
}

const mapStateToProps = state => ({

});

const mapActionToProps = {
    setSelectedMobile
};

export default withRouter(connect(mapStateToProps, mapActionToProps)(MobileCard));