import "./sidebar.scss"
import DashboardIcon from '@material-ui/icons/Dashboard';


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
          <DashboardIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
          <DashboardIcon className="icon"/>
            <span>Products</span>
          </li>
          <li>
          <DashboardIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
          <DashboardIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">UseFull Links</p>
          <li>
          <DashboardIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
          <DashboardIcon className="icon"/>
            <span>Notification</span>
          </li>
          <p className="title">Serivce</p>
          <li>
          <DashboardIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
          <DashboardIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
          <DashboardIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
          <DashboardIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
          <DashboardIcon className="icon"/>
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