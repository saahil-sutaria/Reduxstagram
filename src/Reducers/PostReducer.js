function postReducer(state = {}, action){
    if (action.type === 'INCREMENT_LIKE') 
    {
        let i = parseInt(action.index)
        return [
            ...state.slice(0, i),
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i+1),
            ];
    } 
    else 
    {
        return state
    }
}
export default postReducer;

