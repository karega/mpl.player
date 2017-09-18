/* sub-header-provider.js */

import { connect } from 'react-redux';

import SubHeader from './../sub-header/sub-header';

const mapStateToProps = ( state ) => {
    return {
        scene : state.scene ,
        session : state.session ,
        stops : state.stops ,
    };
};

const SubHeaderProvider = connect(
    mapStateToProps
) ( SubHeader );

export default SubHeaderProvider;
