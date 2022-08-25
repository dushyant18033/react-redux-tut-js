const counterReducer = (state = {count:0, value:1}, action) =>
{
    state.value = action.value?action.value:1;
    switch(action.type)
    {
        case 'INCREMENT':
            return {
                count: state.count + state.value,
                value: state.value
            }
        case 'DECREMENT':
            return {
                count: state.count - state.value,
                value: state.value
            }
        default:
            return {
                count: state.count,
                value: state.value
            }
    }
}

export default counterReducer; // reducer for handling 'counter' state