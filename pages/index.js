import axios from 'axios';
import Comment from '../components/Comment';
import styles from '../styles/Home.module.scss';

export default function Home(props) {
  return (
    <div className={styles.container}>
      {props.comments.map((comment, key) => {
        return (
          <Comment
            key={key}
            username={comment.username}
            avatar={comment.avatar}
            rating={comment.rating}
            content={comment.content}
            images={comment.images}
          />
        );
      })}
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await axios.get('http://localhost:3000/api/comments');
  return {
    props: {
      comments: res.data,
    },
  };
}
