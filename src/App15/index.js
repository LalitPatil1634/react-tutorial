import {
  Link,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NewUser from "./NewUser";
import NotFound from "./NotFound";
import User from "./User";
import { UserRouter } from "./UserRouter";

const App15 = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('name'));
  console.log(searchParams.get('age'));

  const onButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user/ashish">User Ashish</Link>
          </li>
          <li>
            <Link to="/user/john">User John</Link>
          </li>
          <li>
            <Link to="/user/new">New User</Link>
          </li>
        </ul>
      </nav>
      <button onClick={onButtonClick}>Go back</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/user/*" element={<UserRouter />} />

        {/* <Route path="/user">
          <Route path=":id" element={<User />} />
          <Route path="new" element={<NewUser />} />
        </Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App15;
