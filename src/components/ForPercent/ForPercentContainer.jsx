import React from "react";
import ForPercent from "./ForPercent";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(ForPercent)