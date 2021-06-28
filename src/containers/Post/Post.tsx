import React,{FC,useCallback,useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {IPost} from '../../types/posts';
import postsAPI from '../../apis/postsAPI';
import {RootState} from '../../redux/reducers';
import { fetchingPostsSucceed } from '../../redux/actions';
import styles from './Post.module.scss';

const Post:FC = () => {
  const {posts} = useSelector((state:RootState) => state.postsData);
  const [post, setPost] = useState<IPost>();
  const [loading, setLoading] = useState<boolean>(true);
  const {id} = useParams();
  const dispatch = useDispatch();
  const {push} = useHistory();

  useEffect(()=>{
    (async()=>{
      try {
        const postFromStore = posts.find(post => post.id === parseInt(id));
        if(postFromStore){
          setPost(postFromStore);
          return;
        }
        const postFromServer = await postsAPI.getOnePost(id);
        setPost(postFromServer)
      } catch (error) {
        console.warn(error.message)
      } finally {
        setLoading(false)
      }
    })()
  },[id,posts])

  const handleDelete = useCallback( postId => e =>{
    const newPosts = posts.filter(post => post.id !== parseInt(postId));
    dispatch(fetchingPostsSucceed(newPosts))
    push('/')
  },[push,dispatch,posts])

  if(loading) return <p>Loading...</p>

  return (
    <div className={styles.post}>
      <button className={styles.btn} type="button" onClick={()=>push('/')}>&#171; Back</button>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button className={styles.btn} type="button" onClick={handleDelete(id)}>Delete post</button>
    </div>
  )
}

export default Post
