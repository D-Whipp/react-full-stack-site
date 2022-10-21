import { Link, useNavigate } from 'react-router-dom';
import useUser from './hooks/useUser';
import { getAuth, signOut } from 'firebase/auth';

const NavBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/articles">
          <li>Articles</li>
        </Link>
      </ul>
      <div className="nav-right">
        {user ? (
          <button
            onClick={() => {
              signOut(getAuth());
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              navigate('/login');
            }}
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
