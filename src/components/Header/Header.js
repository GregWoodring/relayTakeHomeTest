import React from 'react'
import {connect} from 'react-redux';

import DataSelector from '../DataSelector/DataSelector';
const Header = props => {
    return (
        <div>
            <h1>Top Segment of All Voters:</h1>
            <h2>Percentage of All Voters that are {props.selectedSegmentName} - {props.selectedSegmentCount} - {props.selectedSegmentPercent}% </h2>
            <DataSelector />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        selectedSegmentName: state.voters.selectedSegmentName,
        selectedSegmentCount: state.voters.selectedSegmentCount,
        selectedSegmentPercent: state.voters.selectedSegmentPercent
    }
}

export default connect(mapStateToProps)(Header);