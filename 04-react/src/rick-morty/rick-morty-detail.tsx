import React from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";

interface CharacterDetail {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: {
      name: string;
  };
}

export const RickMortyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = React.useState<CharacterDetail | null>(null);

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => setCharacter(json));
  }, [id]);

  if (!character) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Character Detail
      </Typography>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="345"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Status: {character.status}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Species: {character.species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gender: {character.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location: {character.location.name}
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ marginTop: 2 }}>
        <Button variant="outlined" component={Link} to="/rick-morty">
          Back to Rick & Morty List
        </Button>
      </Box>
    </Box>
  );
};
