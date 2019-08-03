import React from "react";
import Flexbox from "flexbox-react";
import "../styles/card.css";
import { withRouter } from "react-router-dom";

class MobileCard extends React.Component {
    render() {
        const { mobile } = this.props;
        //return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return (
            <Flexbox flexDirection="column" className="card-layout" onClick={() => this.props.history.push('/details')}>
                <Flexbox  flexDirection="column" className="card-content" justifyContent="center" alignItems="center" flexGrow={1}>
                    <Flexbox><img className="card-image" src={mobile.imageUrl} alt={mobile.name} /></Flexbox>
                    <Flexbox>{mobile.name}</Flexbox>
                    <Flexbox className="card-price">{`RS.${mobile.price}`}</Flexbox>
                </Flexbox>
                <Flexbox className="card-detail" justifyContent="center"><Flexbox >{"View Details"}</Flexbox></Flexbox>
            </Flexbox>
        )
    }
}

export default withRouter(MobileCard);