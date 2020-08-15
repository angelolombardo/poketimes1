const initState = {
    posts:[
        { id: '1', title: 'Squirtled Laid an egg', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint voluptatibus enim quae, nam fugiat quo deleniti harum atque dolore ipsam natus cumque nemo voluptatum minima sequi itaque dicta maiores numquam.' },
        { id: '2', title: 'Charmander Laid an egg', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint voluptatibus enim quae, nam fugiat quo deleniti harum atque dolore ipsam natus cumque nemo voluptatum minima sequi itaque dicta maiores numquam.' },   
        { id: '3', title: 'Helix fossil was found', body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint voluptatibus enim quae, nam fugiat quo deleniti harum atque dolore ipsam natus cumque nemo voluptatum minima sequi itaque dicta maiores numquam.'},
    ]

}

const rootReducer = (state=initState,action) => {
    if(action.type === 'DELETE_POST'){
        let newPost = state.posts.filter(post => {
            return action.id !== post.id
        });
        return{
            ...state,
            posts: newPost
        }
    }
    return state;
}

export default rootReducer