import React,{FC} from 'react';
import {Link} from 'react-router-dom';
import {IPost} from '../../../types/posts';
import styles from './PostCard.module.scss';

const PostCard:FC<IPost> = ({id,title,body}:IPost) => {
  return (
    <div className={styles.post}>
      <Link className={styles.link} to={`/posts/${id}`}>
        <h3>{title}</h3>
        <p>{body}</p>
      </Link>
    </div>
  )
}

export default PostCard;
