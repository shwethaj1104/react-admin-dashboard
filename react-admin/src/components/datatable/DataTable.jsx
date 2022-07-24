import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";



const DataTable = ({navigateTo}) => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/products/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
            >
              {/* onClick={() => handleDelete(params.row.id)} */}
              Delete
            </div>
          </div>
        );
      },
    },
  ];



  return (
    <div className="datatable">
      <div className="datatableTitle">Add New User
      <Link to={navigateTo} className="link" style={{ textDecoration: "none" }}>
      Add New</Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      // disableSelectionOnClick
      />
    </div>
  )
}

export default DataTable