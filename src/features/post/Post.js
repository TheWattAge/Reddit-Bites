import './post.css';
import { useParams } from 'react-router-dom';

const Post = (props) => {
    const params = useParams();
    return (
        <div>Hello from Post {params.id}!</div>
    );
}

export default Post;