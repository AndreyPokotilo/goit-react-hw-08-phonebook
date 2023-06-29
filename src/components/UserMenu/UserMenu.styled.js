import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const UsMenu = styled.div`
display: flex;
align-items: center;
width: 100%;
font-size: 25px;
font-weight: 500;
`
export const Avatar = styled.img`
border-radius: 50px;
margin-left: 15px;

`

export const Users = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: auto;
font-size: 25px;
font-weight: 500;
`

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

export const Button = styled.button`
display: flex;
justify-content: center;
font-size: 25px;
width: 120px;
color: #aca8a3;
background-color: #434343;
padding: 8px 16px;
border-radius: 4px;
margin-left: 15px;
font-weight: 500;
border: none;
cursor: pointer;
&:hover {
    color: white;
    background-color: #bc6f42;
}
`