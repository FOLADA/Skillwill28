import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Link,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface AuthorizationFormProps {
  initialFormType: 'login' | 'register';
}

const AuthorizationForm: React.FC<AuthorizationFormProps> = ({
  initialFormType,
}) => {
  const [formType, setFormType] = useState(initialFormType);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false); 
  const navigate = useNavigate();

  const isLogin = formType === 'login';

  const toggleFormType = () => {
    const newFormType = isLogin ? 'register' : 'login';
    setFormType(newFormType);
    navigate(`/${newFormType}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${formType} form submitted`, { email, password });
    setFormSubmitted(true);
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        {isLogin ? 'Login' : 'Register'}
      </Typography>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {!isLogin && (
              <>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    required
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                {isLogin ? 'Login' : 'Register'}
              </Button>
            </Grid>
          </Grid>
        </form>
      ) : (
        <Typography variant="h6" align="center" color="success.main">
          {isLogin ? 'Login Successful!' : 'Registration Successful!'}
        </Typography>
      )}
      {!formSubmitted && (
        <Typography align="center" sx={{ marginTop: 2 }}>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <Link href="#" onClick={toggleFormType}>
            {isLogin ? 'Register' : 'Login'}
          </Link>
        </Typography>
      )}
    </Container>
  );
};

export default AuthorizationForm;
