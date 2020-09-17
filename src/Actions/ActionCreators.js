export function IncrementLikes(index = 0){
    return {
        type: 'INCREMENT_LIKE',
        index
    };
}

export function addComment(postId, author, comment){
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

export function removeComment(postId, index){
    return {
        type: 'REMOVE_COMMENT',
        postId,
        index,
    }
}

export function addPath (index = 0){
    return {
        type: 'ADD_PATH',
        index,
    }
}
