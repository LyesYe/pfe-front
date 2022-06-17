import * as React from 'react';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material';
import { useState } from 'react'

import './home2.css';






export default function SignInSide()  {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    
  };


  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		

		const response = await fetch('http://localhost:3001/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()
		console.log(response.status);

		if (response.status == 201) {
			localStorage.setItem('token', data.token)
			alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
		}
		
	}



  return (
    <StyledEngineProvider injectFirst>
      <Grid container  className="ConBig" component="main" sx={{ height: '100vh' }}>
        
        <Grid item xs={12} sm={8} md={6.5} component={Paper} elevation={6} square>
          

      <div className="flex">
      <div className="up">
            <h2>Logo</h2>
          </div>

          <Box
          className='biggrid'
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography className='welcome' component="h1" variant="h4">
             Welcome Back
            </Typography>
            <Typography className='login'  component="h2" variant="h5">
            Login into your account
            </Typography>
            
            <Box component="form" className='boxForm' noValidate onSubmit={{loginUser}} sx={{ mt: 6 }}>
              <div className="log">
              <TextField
                margin="normal"
                required
                style ={{width: '100%'}}
                id="email"
                value={email}
					      onChange={(e) => setEmail(e.target.value)}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              </div>

              <div className="log">
              <TextField
                
                margin="normal"
                required
                style ={{width: '100%'}}
                value={password}
					      onChange={(e) => setPassword(e.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

    {/* <input className="form"
					value={username}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="username"
				/> */}


              </div>
              
              
              
                <FormControlLabel
                  className="remember"
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                 
                />
                
              

               <Button
                className="button"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
               </Button >
                
              
              
              <Grid container>
                <Grid item xs>
                  <Link color='secondary' href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                
              </Grid>
              
            </Box>
          
          </Box>
      </div>

          
        
        </Grid>
        <Grid
        className='picgrid'
          item
          xs={false}
          sm={4}
          md={5.5}
          sx={{
            backgroundImage: `url("doc2.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
      </StyledEngineProvider>
  );
}