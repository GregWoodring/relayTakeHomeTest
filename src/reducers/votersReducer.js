const initialState = {
    voterArray: [],
    selectedSegmentName: '',
    selectedSegmentCount: 0,
    selectedSegmentPercent: 0,
    totalPop: 0
}

/* example data
"dem": 798647,
"rep": 116884,
"other_party": 119889,
"total": 1035420,
"white": 189630,
"black": 291084,
"hispanic": 69485,
"other_race": 33868,
"male": 337264,
"female": 417251,
"unknown_sex": 280905
*/

export default function reducer(state = initialState, action) {
    let {payload, type} = action;

    switch(type) {
        case ADD_VOTER_ARRAY: 

            //find Initial Selected Segment
            let totals = payload.find(item => item.ward === 'Totals:')
            console.log('totals', totals)
            let highestProperty = ''
            for(let property in totals) {
                console.log('highest', highestProperty)
                if(!(['total', 'ward', 'the_geom_webmercator', 'the_geom'].includes(property))) {
                    console.log(property, totals[property], highestProperty, totals[highestProperty])
                    highestProperty = (totals[highestProperty] <= totals[property]) || highestProperty === '' ? property : highestProperty;
                }
            }
            let percent = (Math.floor(((totals[highestProperty]/totals.total)*100))/100)//need two decimal places
            return {
                ...state,
                voterArray: [...payload], 
                selectedSegmentName: highestProperty,
                selectedSegmentCount: totals[highestProperty],
                selectedSegmentPercent: percent, 
                totalPop: totals.total 
            }
        
        default:
            return {...state}
    }
}

export const ADD_VOTER_ARRAY = 'ADD_VOTER_ARRAY';
export const CHANGE_SELECTION = 'CHANGE_SELECTION'

export const addVoterArray = (voterArray) => {
    return {
        type: ADD_VOTER_ARRAY,
        payload: voterArray
    }
}

export const changeSelection = (selection) => {
    return {
        type: CHANGE_SELECTION,
        payload: selection
    }
}