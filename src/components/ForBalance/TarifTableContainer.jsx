import React from "react";
import TarifTable from "./TarifTable";
import {connect} from "react-redux";
import {requestTarifData} from "../../redux/table-reducer";

class TarifTableContainer extends React.Component {
    componentDidMount() {
        let token = localStorage.getItem('token');
        this.props.requestTarifData(token);
    }

    render() {
        return (
            <TarifTable domains={this.props.domains}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        domains: state.table.domains
    }
};

export default connect(mapStateToProps, {requestTarifData})(TarifTableContainer)