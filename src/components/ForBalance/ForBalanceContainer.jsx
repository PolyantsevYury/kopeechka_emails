import React from "react";
import ForBalance from "./ForBalance";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(ForBalance)