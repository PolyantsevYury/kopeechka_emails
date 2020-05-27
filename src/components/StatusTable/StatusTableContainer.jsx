import React from "react";
import StatusTable from "./StatusTable";
import {connect} from "react-redux";
import {requestStatusData} from "../../redux/table-reducer";

class StatusTableContainer extends React.Component {
    componentDidMount() {
        let token = localStorage.getItem('token');
        let type = this.props.type;
        this.props.requestStatusData(token, type);
    }

    render() {
        return (
            <StatusTable status={this.props.status}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        status: state.table.status
    }
};

export default connect(mapStateToProps, {requestStatusData})(StatusTableContainer)