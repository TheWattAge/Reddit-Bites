import './home.css';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.query.value);
    }
    return(
        <div>
            <Navbar subreddits={[]} handleSubmit={handleSubmit} />
        </div>
    );
}

export default Home;