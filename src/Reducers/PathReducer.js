function pathReducer(state = 0, action){
    if (action.type === 'ADD_PATH') {
        state = action.index
        return state;
    } 
    else {
        return state
    }
}
export default pathReducer;

