import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MenuItem, FormControl, FormGroup, InputLabel, Select, SelectChangeEvent, Switch } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const roles: string[] = [
  'drummer',
  'pianist',
  'guitar_player',
  'bassist',
  'acoustic_guitar_player',
  'vocal_alto',
  'vocal_soprano',
  'vocal_tenor',
  'ministry',
  'horn_player',
  'sax_player',
  'extra',
];

const getFriendlyRoleName = (roleName: string): string => {
  const rolesMapper: Record<string, string> = {
    drummer: 'Baterista',
    pianist: 'Tecladista',
    guitar_player: 'Guitarrista',
    bassist: 'Baixista',
    acoustic_guitar_player: 'Violonista',
    vocal_alto: 'Vocal Contralto',
    vocal_soprano: 'Vocal Soprano',
    vocal_tenor: 'Vocal Tenor',
    ministry: 'Ministro',
    horn_player: 'Trompetista',
    sax_player: 'Saxofonista',
  }

  return rolesMapper[roleName];
}

export const Login = () => {
  const [role, setRole] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      document: data.get('document'),
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      role,
      availableOnThursday: true,
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Criação de usuário
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Documento"
              name="document"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Nome"
              id="name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              id="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControl fullWidth sx={{ marginTop: '12px' }}>
              <InputLabel id="role-select-label">Função</InputLabel>
              <Select
                labelId="role-select-label"
                id="role-select"
                value={role}
                label="Função"
                onChange={handleChange}
              >
                {roles.map((item) => (
                  <MenuItem value={item}>{getFriendlyRoleName(item)}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormGroup sx={{ marginTop: '12px' }}>
              <FormControlLabel control={<Switch />} label="Disponível às terças-feiras" />
              <FormControlLabel control={<Switch />} label="Disponível às quintas-feiras" />
              <FormControlLabel control={<Switch />} label="Disponível aos domingos de manhã" />
              <FormControlLabel control={<Switch />} label="Disponível aos domingos à noite" />
            </FormGroup>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Criar usuário
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
