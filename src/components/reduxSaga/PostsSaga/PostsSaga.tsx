import { useDispatch, useSelector } from 'react-redux'
import { deletePosts, Post, setPostsAsync } from '../redux/postsSlice.ts';
import { RootState } from '../redux/store.ts';

const PostsSaga = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state: RootState) => state.postsStorage);

  return (
    <>
      <div className="container">
        <div className='item'>
          <h1>Posts</h1>
          <button onClick={() => dispatch(setPostsAsync())}>Fetch Posts</button>
          <button onClick={() => dispatch(deletePosts())}>Delete Posts</button>
          {loading && <p>Loading...</p>}
          {posts.length > 0 && <p>Posts fetched successfully</p>}
          {error && <p>Error: {error}</p>}
          <ul>
            {posts.map((post: Post, index) => (
              <li key={index}
                style={{ backgroundColor: 'white', padding: '10px', borderRadius: '10px', margin: '10px' }}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <p>ID: {post.id}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default PostsSaga