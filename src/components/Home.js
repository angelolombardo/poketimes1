    import React, {Component} from 'react'
    import {Link} from 'react-router-dom'
    import Pokeball from '../pokeball.png'
    import {connect} from 'react-redux' //connect to store


    class Home extends Component{
        render(){
            const {posts} = this.props;

            const postList = posts.length ? (
                posts.map(post => {
                    return(
                        <div className="post card" key={post.id}>
                            <img src={Pokeball}alt="a Pokeball"/>
                        <div className="card-content">
                        <Link to={'/'+post.id}>
                        <span className="card-title red-text">{post.title}</span>
                        </Link>
                        <p className="">{post.body}</p>
                        </div>
                        </div>
                        )
                    })
                    ) : (
                        <div className="center">No posts yet</div>
                        )
                        return(
                            <div className="container">
                            <h4 className="center">Home</h4>
                            {postList}
                            </div>
                            )
                        }
                    }

                    const mapStatetoProps = (state) => {
                        return{
                            posts:state.posts //different properties added
                        }
                    }

export default connect(mapStatetoProps)(Home)  