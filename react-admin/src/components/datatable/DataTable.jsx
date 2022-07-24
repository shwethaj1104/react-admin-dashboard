import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from "../../datatablesource";


const DataTable = () => {
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: () => {
            return (
              <div className="cellAction">
                {/* <Link to="/users/test" style={{ textDecoration: "none" }}>
                </Link> */}
                  <div className="viewButton">View</div>
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