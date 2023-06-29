import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import {
  RegistrSection,
  Title,
  Form,
  Label,
  EmailTitle,
  PasswordTitle,
  InputEmail,
  InputPassword,
  Button,
  NameTitle,
  InputName,
} from './Register.styled';

export function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegistrSection>
      <Title>User registration</Title>

      <Form onSubmit={handleSubmit} autoComplete="on">
        <Label>
        <NameTitle>Name</NameTitle>
          <InputName type="text" name="name" value={name} onChange={handleChange} />
        </Label>

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

        <Button type="submit">Registration</Button>
      </Form>
    </RegistrSection>
  );
}
