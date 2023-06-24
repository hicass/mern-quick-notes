import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser, setNotes }) {
  function handleLogOut() {
    setUser(null);
    setNotes([])
    userService.logOut();
  }

  return (
    <nav>
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}