import React from "react";
import {withRouter} from "react-router-dom";

export default withRouter(({location: {search}}) => {
    console.log(search);
    return null;
})