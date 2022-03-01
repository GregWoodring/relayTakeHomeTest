import React from 'react'
import {connect} from 'react-redux';
import DataSelector from '../DataSelector/DataSelector';
import { addVoterArray } from '../../reducers/votersReducer';
import store from '../../store';
const Header = props => {
    //fetching data here since it'll be rendered on page load

      console.log(props)
    return (
        <div onClick={() => {
            console.log('state is', store.getState())
        }}>
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

export default connect(mapStateToProps, {addVoterArray})(Header);