import React from 'react'
import {connect} from 'react-redux';

const DataTable = props => {
    return (
        <div>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        voterArray: state.voters.voterArray
    }
}

export default connect(mapStateToProps)(DataTable);