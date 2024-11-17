import React from 'react';
import AuthorizationForm from '../components/AuthorizationForm';
import $axios from '../http';

const Login: React.FC = () => {
  const onSubmit = (formData: { email: string; password: string }) => {
    $axios
      .post('/login', { ...formData })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <AuthorizationForm initialFormType="login" onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
