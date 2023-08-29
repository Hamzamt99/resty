import { Link } from 'react-router-dom';
import './style.scss'
function Header() {
  return (
    <header>
      <h1>RESTy</h1>
      <Link to='/history'>History</Link>
    </header>
  );
}

export default Header;