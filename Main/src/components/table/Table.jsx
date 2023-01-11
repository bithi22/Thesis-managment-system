import "./table.scss"
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
        id : 1,
        project_Title: "Project On Machine Learing",
        author1_Name: "Shamik Shafkat",
        author2_Name: "Annoor Sharara",
        author3_Name : "Shahanaz Sharmin",
        supervisor1_Name: "Abu Ahmed Ferdous",
        supervisor2_Name: "Mosharrat Jahan",
        topic: "Machine Learing",
        catagory: "Artificial Inteligence",
        status : "Public"
      },
      {
        id : 2,
        project_Title: "Project On Machine Learing",
        author1_Name: "Shamik Shafkat",
        author2_Name: "Annoor Sharara",
        author3_Name : "Shahanaz Sharmin",
        supervisor1_Name: "Abu Ahmed Ferdous",
        supervisor2_Name: "Mosharrat Jahan",
        topic: "Machine Learing",
        catagory: "Artificial Inteligence",
        status : "Public"
      },
      {
        project_id : 3,
        project_Title: "Project On Machine Learing",
        author1_Name: "Shamik Shafkat",
        author2_Name: "Annoor Sharara",
        author3_Name : "Shahanaz Sharmin",
        supervisor1_Name: "Abu Ahmed Ferdous",
        supervisor2_Name: "Mosharrat Jahan",
        topic: "Machine Learing",
        catagory: "Artificial Inteligence",
        status : "Public"
      },
      {
        project_id : 4,
        project_Title: "Project On Machine Learing",
        author1_Name: "Shamik Shafkat",
        author2_Name: "Annoor Sharara",
        author3_Name : "Shahanaz Sharmin",
        supervisor1_Name: "Abu Ahmed Ferdous",
        supervisor2_Name: "Mosharrat Jahan",
        topic: "Machine Learing",
        catagory: "Artificial Inteligence",
        status : "Public"
      },
      {
        project_id : 5,
        project_Title: "Project On Machine Learing",
        author1_Name: "Shamik Shafkat",
        author2_Name: "Annoor Sharara",
        author3_Name : "Shahanaz Sharmin",
        supervisor1_Name: "Abu Ahmed Ferdous",
        supervisor2_Name: "Mosharrat Jahan",
        topic: "Machine Learing",
        catagory: "Artificial Inteligence",
        status : "Public"
      },
    ];
    return (
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Project Title</TableCell>
              <TableCell className="tableCell">Author1</TableCell>
              <TableCell className="tableCell">Author2</TableCell>
              <TableCell className="tableCell">Author3</TableCell>
              <TableCell className="tableCell">Supervisor1</TableCell>
              <TableCell className="tableCell">Supervisor2</TableCell>
              <TableCell className="tableCell">Topic</TableCell>
              <TableCell className="tableCell">Catagory</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.project_Title}</TableCell>
                <TableCell className="tableCell">{row.author1_Name}</TableCell>
                <TableCell className="tableCell">{row.author2_Name}</TableCell>
                <TableCell className="tableCell">{row.author3_Name}</TableCell>
                <TableCell className="tableCell">{row.supervisor1_Name}</TableCell>
                <TableCell className="tableCell">{row.supervisor2_Name}</TableCell>
                <TableCell className="tableCell">{row.topic}</TableCell>
                <TableCell className="tableCell">{row.catagory}</TableCell>
                <TableCell className="tableCell">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
export default List;
