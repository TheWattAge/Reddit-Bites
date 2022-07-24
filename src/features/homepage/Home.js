import './home.css';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return(
        <div>
            <Navbar subreddits={[]} onSubmit={handleSubmit} />
        </div>
    );
}

export default Home;