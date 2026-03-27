import React from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "./use-debounce";
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
  Box,
  Typography
} from "@mui/material";

interface Character {
  id: number;
  name: string;
  image: string;
}

export const RickMortyListPage: React.FC = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [filter, setFilter] = React.useState("");
  const debouncedFilter = useDebounce(filter, 500);

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${debouncedFilter}`)
      .then((response) => response.json())
      .then((json) => {
          if (json.results) {
              setCharacters(json.results);
          } else {
              setCharacters([]);
          }
      })
      .catch(() => setCharacters([]));
  }, [debouncedFilter]);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Rick and Morty Characters
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Filter by name"
          variant="outlined"
          size="small"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="rick and morty characters table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characters.length > 0 ? (
              characters.map((character) => (
                <TableRow key={character.id}>
                  <TableCell>
                    <Avatar alt={character.name} src={character.image} />
                  </TableCell>
                  <TableCell>{character.id}</TableCell>
                  <TableCell>
                    <Link to={`/rick-morty/detail/${character.id}`}>{character.name}</Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No characters found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ marginTop: 2 }}>
        <Link to="/list">Go to GitHub list</Link>
      </Box>
    </Box>
  );
};
