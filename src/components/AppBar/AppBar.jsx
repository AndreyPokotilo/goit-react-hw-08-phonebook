import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

import { Container, Header, Link } from './AppBar.styled';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';


export function AppBar() {

    const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <Header>
      <Link to="/" end>Home</Link>
        {!isLoggedIn ? <AuthNav/>
        : <UserMenu/>}
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
