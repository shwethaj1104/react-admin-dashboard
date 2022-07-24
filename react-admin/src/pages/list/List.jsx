import "./list.scss"
import SideBar from "../../components/sidebar/SideBar"
import NavBar from "../../components/navbar/NavBar"
import DataTable from "../../components/datatable/DataTable"


const List = ({navigateTo}) => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <DataTable navigateTo={navigateTo}/>
      </div>
    </div>
  )
}

export default List