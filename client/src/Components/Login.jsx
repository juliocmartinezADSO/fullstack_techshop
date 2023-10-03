/**
  * El componente de inicio de sesión es un formulario que permite a los usuarios ingresar su correo electrónico y contraseña para iniciar sesión, y
  * maneja el envío del formulario y la lógica de autenticación.
  * @returns El componente de inicio de sesión devuelve un formulario para el inicio de sesión del usuario. Incluye campos de entrada para correo electrónico.
  * y contraseña, un botón de envío y enlaces para olvidar la contraseña y registrarse. También muestra el
  * token y estado de autorización de la tienda Redux.
  */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setToken } from "../redux/actions";
import Servicios from "./Servicios";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const isAuthorized = useSelector((state) => state.isAuthenticated);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isAuthorized) {
      navigate("/servicios");
    }
  }, [isAuthorized, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://192.168.1.7:3001/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);

      if (data.error) {
        setError("Credenciales incorrectas");
      } else {
        setError(null);
        dispatch(setToken(data.token)); // Establecer el token en el store
        // localStorage.setItem("token", data.data.token);
      }
    } catch (error) {
      setError("Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.");
      console.error("Error: ", error);
    }
  };

  return (
    <div className="row justify-content-center">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit} className="col-md-3">
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        {error && <p className="text-danger">{error}</p>}

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* Utiliza el enlace de react-router-dom */}
            <Link to="/forgot-password" className="text-center">
              Forgot password?
            </Link>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
      <p>Token: {token}</p>
      <p>Autorizado: {JSON.stringify(isAuthorized)}</p>
      
    </div>
  );
}

export default Login;
