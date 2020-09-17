function comments(state = [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: commentReducer(state[action.postId], action)
        }
    }
    return state;
}
/* reducer composition to take a slice of a state and later combine to one object */
function commentReducer(state = [], action){
     if (action.type === 'ADD_COMMENT') 
     {
         return [...state,
                {user: action.author, text: action.comment}
                ];
     } 
     else if(action.type === 'REMOVE_COMMENT') 
     {
         const i = action.index
         return [...state.slice(0, i),
             ...state.slice(i+1)
                ];
     }
     else{
        return state
    }
}
export default comments;
