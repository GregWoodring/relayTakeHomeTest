const initialState = {


}

export default function reducer(state = initialState, action) {
    let {payload, type} = action;

    switch(type) {
        default:
            return {...state}
    }
}