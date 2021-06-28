import React,{FC,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import postsAPI from '../../apis/postsAPI';
import { fetchPosts, fetchingPostsSucceed,fetchingPostsFailed } from '../../redux/actions';
import {RootState} from '../../redux/reducers';
import PostCard from '../../components/shared/PostCard/PostCard';
import styles from './Posts.module.scss';

const Posts:FC = () => {
  const {posts,loading,error} = useSelector((state:RootState) => state.postsData)
  const dispatch = useDispatch();

  useEffect(()=>{
    (async()=>{
      try {
        dispatch(fetchPosts());
        const data = await postsAPI.getPosts();
        console.log(data)
        dispatch(fetchingPostsSucceed(data))
      } catch (error) {
        dispatch(fetchingPostsFailed(error.message))
      }
    })()
  },[])

  return (
    <>
      <h2 className={styles.title}>Posts</h2>
      {loading 
      ? <p>Loading ...</p> 
      : <div className={styles.container}>
          {posts.map(({id,title,body})=> <PostCard id={id} title={title} body={body} />)}
        </div>
      }
      {error && <p>{error}</p>}
    </>
  )
}

export default Posts
