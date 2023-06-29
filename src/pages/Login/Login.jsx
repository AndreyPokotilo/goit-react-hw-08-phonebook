import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import {
  LoginSection,
  Title,
  Form,
  Label,
  EmailTitle,
  PasswordTitle,
  InputEmail,
  InputPassword,
  Button,
} from './Login.styled';

export function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <LoginSection>
      <Title>Enter login</Title>

      <Form onSubmit={handleSubmit} autoComplete="on">
        <Label>
          <EmailTitle>Email</EmailTitle>
          <InputEmail
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          <PasswordTitle>Password</PasswordTitle>
          <InputPassword
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Login</Button>
      </Form>
    </LoginSection>
  );
}
