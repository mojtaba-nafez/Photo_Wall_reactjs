export function removedPost(index){
    return{
        type:'REMOVED_POST',
        index:index
    }
}
export function addPost(post){
    return{
        type:'ADD_POST',
        post:post
    }
}
 