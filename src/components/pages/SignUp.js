import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  const [authMode, setAuthMode] = useState("signin");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const login = async (event) => {
    try {
        const result = await axios.get("https://localhost:7061/api/Usuarios/GetUsuarios/");
        if(result?.data != null && result?.data != null){
            var users = result.data
            if(users.filter(x => x.correo === correo && x.password === password).length > 0){
                localStorage.setItem("session", "true")

            }
        }
        
    } catch (err) {
      alert("Usuario Invalido");
      alert(err);
    }
  }

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div className="container-centered">
        <div className="Auth-form-container-centered">
          <div className="container-centered">
            <form className="Auth-form">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Iniciar Sesion</h3>
                <div className="text-center">
                  No estas registrado?{" "}
                  <span className="link-primary" onClick={changeAuthMode}>
                    Registrarme
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Correo:</label>
                  <input
                    type="text"
                    name="correo"
                    className="form-control mt-1"
                    placeholder="Ingresar Correo"
                    onChange={(event) => {
                      setCorreo(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Contraseña:</label>
                  <input
                    type="text"
                    name="password"
                    className="form-control mt-1"
                    placeholder="Ingresar Contraseña"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => login(correo)}
                  >
                    Iniciar Sesion
                  </button>
                </div>
                <p className="text-center mt-2">
                  Forgot <a href="#">password?</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-centered">
      <div className="Auth-form-container-centered">
        <div className="container-centered">
          <form className="Auth-form">
            <div className="Auth-form-content-centered">
              <h3 className="Auth-form-title">Registrarme</h3>
              <div className="text-center">
                Ya estas Registrado?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Iniciar Sesion
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Nombre:</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="e.g Jane Doe"
                />
              </div>
              <div className="form-group mt-3">
                <label>Apellidos:</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="e.g Jane Doe"
                />
              </div>
              <div className="form-group mt-3">
                <label>Correo</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group mt-3">
                <label>Telefono</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Registrar
                </button>
              </div>
              <p className="text-center mt-2">
                Olvidaste tu <a href="#">Password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
