import "./studentTable.scss"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
    const rows = [
      {
        reg_id : "2019-117-793",
        name : "Shamik Shafkat",
        roll : "AE-10",
        year : "2nd",
        semester : "2nd",
        session : "2019-2020",
      },
      {
        reg_id : "2019-117-793",
        name : "Shamik Shafkat",
        roll : "AE-10",
        year : "2nd",
        semester : "2nd",
        session : "2019-2020", 
      },
      {
        reg_id : "2019-117-793",
        name : "Shamik Shafkat",
        roll : "AE-10",
        year : "2nd",
        semester : "2nd",
        session : "2019-2020",
      }
    ];
    return (
      <TableContainer component={Paper} className="studenttable">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Reg_ID</TableCell>
              <TableCell className="tableCell">Name</TableCell>
              <TableCell className="tableCell">Roll No</TableCell>
              <TableCell className="tableCell">Year</TableCell>
              <TableCell className="tableCell">Semester</TableCell>
              <TableCell className="tableCell">Session</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.reg_id}</TableCell>
                <TableCell className="tableCell">{row.name}</TableCell>
                <TableCell className="tableCell">{row.roll}</TableCell>
                <TableCell className="tableCell">{row.year}</TableCell>
                <TableCell className="tableCell">{row.semester}</TableCell>
                <TableCell className="tableCell">{row.session}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
export default List;
