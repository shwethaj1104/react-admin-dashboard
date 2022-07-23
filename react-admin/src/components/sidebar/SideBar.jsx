import "./sidebar.scss"
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@material-ui/icons/SettingsSystemDaydreamOutlined';
import BrandingWatermarkOutlinedIcon from '@material-ui/icons/BrandingWatermarkOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ADMIN DASHBOARD</span>
      </div><hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
          <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li>
          <PeopleIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
          <FeaturedPlayListIcon className="icon"/>
            <span>Products</span>
          </li>
          <li>
          <ViewStreamIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
          <LocalShippingOutlinedIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">UseFull Links</p>
          <li>
          <EqualizerOutlinedIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
          <NotificationsActiveOutlinedIcon className="icon"/>
            <span>Notification</span>
          </li>
          <p className="title">Serivce</p>
          <li>
          <SettingsSystemDaydreamOutlinedIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
          <BrandingWatermarkOutlinedIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
          <SettingsOutlinedIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
          <PersonOutlineOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
          <ExitToAppOutlinedIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  )
}

export default SideBar