import React from 'react'
import {connect} from 'react-redux';
import {changeSelection} from '../../reducers/votersReducer';
const DataSelector = props => {

    return (
        <div>
            <select data-testid='selector' onChange={e => props.changeSelection(e.target.value)}>
                {props.properties.map((item, index) => {
                    return <option value={item} key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        properties: state.voters.properties
    }
}

export default connect(mapStateToProps, {changeSelection})(DataSelector);