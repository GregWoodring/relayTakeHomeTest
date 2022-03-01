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
        voterDataArray: state.voters.voterDataArray
    }
}

export default connect(mapStateToProps)(DataTable);