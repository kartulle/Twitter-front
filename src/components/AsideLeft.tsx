import twitterLogo from '../assets/logo-twitter.svg';
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User} from 'phosphor-react';
import './AsideLeft.css'
import { NavLink } from 'react-router-dom';

export function AsideLeft(){
    return(
        <aside className="sidebar">
        <img src={twitterLogo} className="logo" alt="Logo"/>
        <nav className="main-navegation">
          <NavLink to="/"> <House weight="fill"/> Home</NavLink>
          <a href=""> <Hash/> Explore</a>
          <a href=""> <Bell/> Notifications</a>
          <a href=""> <Envelope/> Messages</a>
          <a href=""> <BookmarkSimple/> Bookmarks</a>
          <a href=""> <FileText/> Lists</a>
          <a href=""> <User/> Profile</a>
          <a href=""> <DotsThreeCircle/> More</a>
        </nav>
        <button className="new-tweet" type="button">Tweet</button>
      </aside>
    )
}