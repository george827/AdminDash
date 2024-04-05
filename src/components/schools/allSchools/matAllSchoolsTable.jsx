import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Button,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
  TextField
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const data = [
  {
    name: "John Doe",
    institutionLevel: "University",
    totalJobPosts: 5,
    location: "New York",
    phoneNo: "123-456-7890",
    joinedOn: "2022-03-15",
  },
  {
    name: "Jane Smith",
    institutionLevel: "College",
    totalJobPosts: 8,
    location: "Los Angeles",
    phoneNo: "987-654-3210",
    joinedOn: "2022-02-20",
  },
  {
    name: "Alice Johnson",
    institutionLevel: "High School",
    totalJobPosts: 3,
    location: "Chicago",
    phoneNo: "555-555-5555",
    joinedOn: "2022-01-10",
  },
  {
    name: "Bob Brown",
    institutionLevel: "University",
    totalJobPosts: 6,
    location: "Houston",
    phoneNo: "111-222-3333",
    joinedOn: "2021-12-05",
  },
  {
    name: "Emily Wilson",
    institutionLevel: "College",
    totalJobPosts: 10,
    location: "San Francisco",
    phoneNo: "999-888-7777",
    joinedOn: "2022-05-22",
  },
  {
    name: "Michael Clark",
    institutionLevel: "High School",
    totalJobPosts: 4,
    location: "Miami",
    phoneNo: "777-999-1111",
    joinedOn: "2021-11-30",
  },
  {
    name: "Sara Adams",
    institutionLevel: "College",
    totalJobPosts: 7,
    location: "Seattle",
    phoneNo: "444-333-2222",
    joinedOn: "2022-04-18",
  },
  {
    name: "David Lee",
    institutionLevel: "University",
    totalJobPosts: 9,
    location: "Dallas",
    phoneNo: "666-666-6666",
    joinedOn: "2022-02-15",
  },
  {
    name: "Rachel White",
    institutionLevel: "High School",
    totalJobPosts: 2,
    location: "Boston",
    phoneNo: "222-111-4444",
    joinedOn: "2021-10-25",
  },
  {
    name: "Kevin Turner",
    institutionLevel: "College",
    totalJobPosts: 5,
    location: "Atlanta",
    phoneNo: "777-888-9999",
    joinedOn: "2022-03-05",
  },
  {
    name: "Michelle Green",
    institutionLevel: "University",
    totalJobPosts: 11,
    location: "Denver",
    phoneNo: "333-444-5555",
    joinedOn: "2022-06-08",
  },
  {
    name: "Andrew Carter",
    institutionLevel: "High School",
    totalJobPosts: 6,
    location: "Phoenix",
    phoneNo: "888-777-6666",
    joinedOn: "2021-09-15",
  },
  {
    name: "Jennifer Brown",
    institutionLevel: "College",
    totalJobPosts: 8,
    location: "Portland",
    phoneNo: "111-222-3333",
    joinedOn: "2022-01-20",
  },
  {
    name: "Daniel Smith",
    institutionLevel: "University",
    totalJobPosts: 7,
    location: "Las Vegas",
    phoneNo: "999-999-9999",
    joinedOn: "2022-07-10",
  },
  {
    name: "Sophia Wilson",
    institutionLevel: "High School",
    totalJobPosts: 3,
    location: "Austin",
    phoneNo: "666-555-4444",
    joinedOn: "2021-08-30",
  },
];

const columns = [
  { id: "name", label: "Name" },
  { id: "institutionLevel", label: "Institution Level" },
  { id: "totalJobPosts", label: "Total Job Posts" },
  { id: "location", label: "Location" },
  { id: "phoneNo", label: "Phone No" },
  { id: "joinedOn", label: "Joined On" },
];

const rowsPerPageOptions = [5, 10, 25];

const MyTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterText, setFilterText] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClick2 = (event) => {
    console.log(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleFilterOptionClick = (option) => {
    setFilterBy(option);
    setAnchorEl(null); // Close the filter menu
};

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );
  

  return (
    <TableContainer component={Paper} sx={{ borderRadius: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Tooltip title="Filter list">
          <IconButton onClick={handleMenuClick2}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        <TextField
          variant="outlined"
          label="Search for schools"
          value={filterText}
          onChange={handleFilterChange}
        />
      </div>
      <Table>
        <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
            <TableCell align="center" colSpan={2}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.id}>{row[column.id]}</TableCell>
                ))}
                <TableCell>
                  <Button onClick={handleMenuClick}>
                    <MoreVertIcon />
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                  >
                    <MenuItem onClick={handleCloseMenu}>Edit</MenuItem>
                    {/* Add other action menu items as needed */}
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default MyTable;
