import React from 'react'
import {connect} from 'react-redux';

const DataRow = props => {
    return (
        <div className='data-row'>
            <div>{props.ward}</div>
            <div>{props.dem}</div>
            <div>{props.rep}</div>
            <div>{props.other_party}</div>
            <div>{props.white}</div>
            <div>{props.black}</div>
            <div>{props.hispanic}</div>
            <div>{props.other_race}</div>
            <div>{props.male}</div>
            <div>{props.female}</div>
            <div>{props.unknown_sex}</div>
            <div>{props.total}</div>
            <div>{(Math.floor((props[props.selectedSegmentName]/props.total)*100)/100)}</div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        selectedSegmentName: state.voters.selectedSegmentName
    }
}

export default connect(mapStateToProps)(DataRow);