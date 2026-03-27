import React from "react";
import { Link } from "react-router-dom";
import { OrgContext } from "./org-context";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  TextField,
  Button,
  Stack,
  Pagination,
  Box,
  Typography
} from "@mui/material";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

const PER_PAGE = 5;

export const ListPage: React.FC = () => {
  const { organization, setOrganization } = React.useContext(OrgContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [searchInput, setSearchInput] = React.useState(organization);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${organization}/members?page=${page}&per_page=${PER_PAGE}`)
      .then((response) => {
        if (!response.ok) {
           throw new Error("Org not found");
        }
        return response.json();
      })
      .then((json) => {
        if (Array.isArray(json)) {
            setMembers(json);
        } else {
            setMembers([]);
        }
      })
      .catch(() => setMembers([]));
  }, [organization, page]);

  const handleSearch = () => {
    setOrganization(searchInput);
    setPage(1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        GitHub Members for {organization}
      </Typography>
      <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
        <TextField
          label="Organization"
          variant="outlined"
          size="small"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="github members table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.length > 0 ? (
              members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <Avatar alt={member.login} src={member.avatar_url} />
                  </TableCell>
                  <TableCell>{member.id}</TableCell>
                  <TableCell>
                    <Link to={`/detail/${member.login}`}>{member.login}</Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No members found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Pagination
          count={10} 
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
      <Box sx={{ marginTop: 2, display: 'flex', gap: 2 }}>
        <Link to="/">Back to Login</Link>
        <Link to="/rick-morty">Go to Rick & Morty section</Link>
      </Box>
    </Box>
  );
};
