import React from 'react';
import AuthorizationForm from '../components/AuthorizationForm';
import $axios from '../http';

const Register: React.FC = () => {
  const onSubmit = (formData: { email: string; password: string; firstName?: string; lastName?: string }) => {
    $axios
      .post('/register', { ...formData })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <AuthorizationForm initialFormType="register" onSubmit={onSubmit} />
    </div>
  );
};

export default Register;
