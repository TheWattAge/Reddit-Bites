import React from 'react';
import './navbar.css';
import {ReactComponent as Logo} from '../../assets/logo.svg';

const Navbar = (props) => {
    return(
        <nav className="navbar" id="main-navigation">
            <div className="brand">
                <Logo />
            </div>
            <div className="fav-subreddits container">
                <div className="fav-subreddits dropdown">
                    <ul className="fav-subreddits list">
                        {props.subreddits.map(subreddit => <a href={`/r/${subreddit.title}`}>
                            <li>
                                <img src={subreddit.icon} alt=""/>
                                {subreddit.title}
                            </li>
                        </a>)}
                    </ul>
                </div>
            </div>
            <div className="searchbar container">
                <form onSubmit={props.handleSubmit}>
                    <input type="text" placeholder="Search" name="query"/>
                    <input type="submit" />
                </form>
            </div>
        </nav>
    );
}

export default Navbar;