import './subreddit.css';
import { useParams } from 'react-router-dom';

const Subreddit = (props) => {
    const params = useParams();
    return (
        <div>Hello from Subreddit {params.subreddit}!</div>
    );
}

export default Subreddit;