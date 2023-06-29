import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 110px;
  width: 1380px;
  padding: 8px 10px;
  border-radius: 5px;
  background-color: green;
  > nav {
    display: flex;
  }
`;

export const Nav = styled.nav`
margin-left: auto;
`;

export const Link = styled(NavLink)`
display: flex;
justify-content: center;
  font-size: 25px;
  padding: 8px 16px;
  width: 120px;
  border-radius: 4px;
  align-items: center;
  text-decoration: none;
  color: #aca8a3;
  font-weight: 500;
  background-color: #434343;
  &.active {
    color: white;
    background-color: #bc6f42;
  }
`;