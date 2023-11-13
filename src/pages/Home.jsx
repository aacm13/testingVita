import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="starting-page">
        <Link to="/categories">Start Trivia</Link>
        <Link to="/categories">Stats</Link>
      </div>
    </>
  );
};

export default Home;
