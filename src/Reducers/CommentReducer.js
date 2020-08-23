 function commentReducer(state = [], action){
    console.log(state)

     if (action.type === 'ADD_COMMENT') {

        console.log(action.author, action.comment)
         return [...state,
             {user: action.author, text: action.comment}];
     } else if(action.type =='REMOVE_COMMENT') {
         const i = action.index
         console.log(i)
         return [...state.slice(0, i),
             ...state.slice(i+1)
         ];
     }
     else{
         return state
     }



}

 function comments(state = [], action) {
     if(typeof action.postId !== 'undefined') {
         return {
             // take the current state
             ...state,
             // overwrite this post with a new one
             [action.postId]: commentReducer(state[action.postId], action)
         }
     }
     return state;
 }
export default comments;
