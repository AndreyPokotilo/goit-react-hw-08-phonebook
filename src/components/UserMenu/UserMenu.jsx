import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { getUsername } from 'redux/auth/auth-selectors';
import {Link, UsMenu, Avatar, Button, Users} from './UserMenu.styled'

import NoAvatar from '../../image/unnamed (1).jpg'

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  // const avatar = defaultAvatar;

  return (
    <UsMenu>
      <Link to="/phonebook">Phonebook</Link>
      <Users>
      <span> Welcome {name}</span>
      <Avatar src={NoAvatar} alt="" width="45" />
      <Button type="button" onClick={() => dispatch(logOut())}>
      Log out
      </Button>
      </Users>
    </UsMenu>
  );
}
