import React from 'react'
import {connect} from 'react-redux';
import DataRow from '../DataRow/DataRow';
import './DataTable.scss'
const DataTable = props => {
    return (
        <div className='data-table'>
            <div className='table-header data-row'>
                <div>Ward</div>
                <div>Democrat</div>
                <div>Republican</div>
                <div>Other Party</div>
                <div>White</div>
                <div>Black</div>
                <div>Hispanic</div>
                <div>Other Race</div>
                <div>Male</div>
                <div>Female</div>
                <div>Unknown Sex</div>
                <div>Total</div>
                <div>%</div>
            </div>
            {props.voterArray.map((item, index) => <DataRow 
                ward={item.ward}
                dem={item.dem}
                rep={item.rep}
                other_party={item.other_party}
                total={item.total}
                white={item.white}
                black={item.black}
                hispanic={item.hispanic}
                other_race={item.other_race}
                male={item.male}
                female={item.female}
                unknown_sex={item.unknown_sex}
                key={index} 
            />)}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        voterArray: state.voters.voterArray
    }
}

export default connect(mapStateToProps)(DataTable);