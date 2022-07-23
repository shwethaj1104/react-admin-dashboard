import "./home.scss"
import SideBar from "../../components/sidebar/SideBar"
import NavBar from "../../components/navbar/NavBar"

const Home = () => {
  return (
    <div className='home'>
      <SideBar/>
      <div className="homeContainer">
        <NavBar></NavBar>
        homeContainer
      </div>
    </div>
  )
}

export default Home