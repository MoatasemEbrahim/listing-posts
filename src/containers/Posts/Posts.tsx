import React,{FC,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import postsAPI from '../../apis/postsAPI';
import { fetchPosts, fetchingPostsSucceed,fetchingPostsFailed } from '../../redux/actions';
import {RootState} from '../../redux/reducers';
import PostCard from '../../components/shared/PostCard/PostCard';
import styles from './Posts.module.scss';
import { useCallback } from 'react';

const Posts:FC = () => {
  const {posts,loading,error} = useSelector((state:RootState) => state.postsData)
  const dispatch = useDispatch();

  useEffect(()=>{
    if(posts.length > 0) return;
    (async()=>{
      try {
        dispatch(fetchPosts());
        const data = await postsAPI.getPosts();
        dispatch(fetchingPostsSucceed(data))
      } catch (error) {
        dispatch(fetchingPostsFailed(error.message))
      }
    })()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch])

  const handleShuffleData = useCallback(oldPosts => e =>{
    dispatch(fetchPosts());
    const shuffledPosts = oldPosts.sort(() => Math.random() - 0.5);
    dispatch(fetchingPostsSucceed(shuffledPosts))
  },[dispatch])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Posts</h2>
      <button 
        data-testid="ShufflePostsBtn" 
        className={styles.btn} 
        type="button" 
        onClick={handleShuffleData(posts)}
      >
        Shuffle posts
      </button>
      {loading 
      ? <p>Loading ...</p> 
      : <div className={styles.posts}>
          {posts.map(({id,title,body})=> <PostCard key={id} id={id} title={title} body={body} />)}
        </div>
      }
      {error && <p>{error}</p>}
    </div>
  )
}

export default Posts
