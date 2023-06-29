import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { UserMenu } from 'components/UserMenu/UserMenu';

import { Container, Header, Link, Nav } from './AppBar.styled';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';


export function AppBar() {

    const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <Header>
      <Link to="/" end>Home</Link>
        {!isLoggedIn ? <Nav>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </Nav>
        : <UserMenu/>}
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
