import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface AuthorizationFormProps {
  initialFormType: 'login' | 'register';
  onSubmit: (formData: { email: string; password: string; firstName?: string; lastName?: string }) => void;
}

const AuthorizationForm: React.FC<AuthorizationFormProps> = ({ initialFormType, onSubmit }) => {
  const [formType, setFormType] = useState(initialFormType);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
    // Prepare form data to submit
    const formData = { email, password, firstName, lastName };
    onSubmit(formData); // Call the onSubmit function passed as a prop
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
              <Button fullWidth type="submit" variant="contained" color="primary">
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
