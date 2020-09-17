import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

import Main from "./Main";
import * as actionCreators from "./Actions/ActionCreators";

/* HOC to make store available to MAIN */
const mapStateToProps = (state) =>{
    return {
        posts : state.posts,
        comments : state.comments,
        path : state.path,
    }
}

function mapDispatchToProps(dispatch) {
    return   bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)



