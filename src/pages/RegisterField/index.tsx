import { ChangeEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextsField } from "../../contexts/Auth/ContextsField";

export const RegisterField = () => {
  const auth = useContext(ContextsField);
  const navigate = useNavigate();

  const [name, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Rpass, setRPass] = useState("");

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRPasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setRPass(event.target.value);
  };

  const handleLogin = async () => {
    if (name && password && Rpass) {
      const isLogged = await auth.signup(name, password, Rpass);
      if (isLogged) {
        navigate("/private");
      } else {
        alert("Something went wrong!");
      }
    }
  };

  return (
    <>
      <div className="container w-75 mt-5 rounded-4 shadow">
        <div className="row bg-white rounded-4 align-items-md-stretch">
          <div className="col bg d-none d-md-block col-md-5 col-lg-6 col-xl-6 rounded-4"></div>
          <div className="col">
            <h2 className="fw-bold text-center pt-5 mb-5">Crie sua conta</h2>
            <div className="mb-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={handleEmailInput}
              />
            </div>
            <div className="mb-6 mt-2">
              <label htmlFor="password" className="form-label">
                Senha
              </label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={handlePasswordInput}
              />
            </div>{" "}
            <div className="mb-6 mt-2">
              <label htmlFor="password" className="form-label">
                Senha
              </label>
              <input
                className="form-control"
                type="password"
                value={Rpass}
                onChange={handleRPasswordInput}
              />
            </div>
            <div className="d-grid mt-2">
              <button onClick={handleLogin} className="btn btn-success">
                Efetuar Cadastro
              </button>
            </div>
            <div className="my-3">
              <Link to="/">Já possui cadastro? Clique aqui.</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
