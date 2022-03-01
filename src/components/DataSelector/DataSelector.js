import React from 'react'
import {connect} from 'react-redux';
import {changeSelection} from '../../reducers/votersReducer';
const DataSelector = props => {

    return (
        <div>
            <select onChange={e => changeSelection(e.target.value)}>
                {props.properties.map((item, index) => {
                    return <option value={item}>{item}</option>
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

export default connect(mapStateToProps, {})(DataSelector);