import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Servicios() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener el token del localStorage
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      // Si hay un token almacenado en el localStorage, actualizar el estado de Redux
      dispatch({ type: "SET_TOKEN", payload: storedToken });
    } else {
      // Si no hay un token en el localStorage, redirigir al usuario a la página de inicio
      navigate("/");
    }
  }, [dispatch, navigate]);

  if (!token) return null; // No renderizar el componente si no está autenticado

  // Almacenar el token en el localStorage si no se encuentra
  if (!localStorage.getItem("token")) {
    localStorage.setItem("token", token);
  }


  

  return (
    <div>
      <h1>Ruta Protegida</h1>
      <p>{localStorage.getItem("token")}</p>
    </div>
  );
}

export default Servicios;
