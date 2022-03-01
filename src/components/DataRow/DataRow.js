import React from 'react'
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
            <div>{'placeholder'}</div>
        </div>
    )
}

export default DataRow;