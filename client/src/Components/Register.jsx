import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register() {
  const token = useSelector((state) => state.token);

  const [formData, setFormData] = useState({
    name: "",
    username:"",
    email: "",
    password: "",
   // token:token
  });
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://192.168.1.7:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //"x-access-token":token
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.status===400) {
        (data.error ? alert(data.error) : alert(data.message)) 
      } else if(response.status===200) {
        alert("Registro exitoso");
        history("/");
      }
    } catch (error) {
      alert(error);

    }
  };

  return (
    <div className="row justify-content-center">
      <h1>Crear cuenta</h1>
      <form className="col-md-3" onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form2Example"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form2Example">
            Name
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form2Example0"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form2Example0">
            Username
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
