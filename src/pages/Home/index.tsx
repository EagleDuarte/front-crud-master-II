import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <h1>Seja bem vindo.</h1>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </>
  );
};
