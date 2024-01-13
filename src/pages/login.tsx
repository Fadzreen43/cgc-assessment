'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { capitalize } from '@mui/material';
import logoImg from '../../../public/logo-cgc.png';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  const { push } = useRouter(); 
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = React.useState(false);

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 520,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    textTransform: 'capitalize',
    marginLeft: '100px', // Add left margin here
  },
}));

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget );
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });

    let username = data.get('username');
    let password = data.get('password');
    let token = '';
    if (username === 'user' && password === 'password') {
      token = 'userToken';
    } else if (username === 'admin' && password === 'adminpassword') {
      token = 'adminToken';
    } else {
      // Display an error message or handle authentication failure
      console.error('Invalid username or password');
      setError('Invalid username or password');
      return;
    }
    // Store the token in local storage
    console.log('Token', token)
    localStorage.setItem('token', token);
    // Redirect to the home page after sign-in
    setOpen(true);
    push('/index')
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Login Successful!
        </Alert>
      </Snackbar>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
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
            <Grid container>
              <Grid item>

              <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <HtmlTooltip
                  title={
                    <React.Fragment>
                      <b>{'Admin Info'}</b><br></br>
                      {'username = admin'}<br></br>
                      {'password = adminpassword'} <br></br>
                      {' '}<br></br>
                      <b>{'User Info'}</b><br></br>
                      {'username = user'}<br></br>
                      {'password = password'} <br></br>
                    </React.Fragment>
                  }
                >
                <Button style={{ marginLeft: '120px',textTransform: 'capitalize',  }}>Account Info</Button>
              </HtmlTooltip>

              </Grid>

            </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}