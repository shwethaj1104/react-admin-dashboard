import "./navbar.scss"
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import FullscreenExitOutlinedIcon from '@material-ui/icons/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const NavBar = () => {
  const {dispatch} =useContext(DarkModeContext);
  
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon"/>English
          </div>
          <div className="item">
            <Brightness2OutlinedIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon"/>
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <img src="https://ghantee.com/wp-content/uploads/2021/09/lord-krishna-best-hd-wallpaper-for-laptop-1080p-1024x576.jpg"
            className="avatar"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar