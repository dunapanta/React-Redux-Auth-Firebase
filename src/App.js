import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import {setCurrentRegister, setCurrentLogin } from './store/actions/user-actions';

function App(props) {
  return (
    <div className="App">
      <div className="register">
        <h2>Registro</h2>
        <form onSubmit={e => e.preventDefault()}>
          <input 
            type="email" 
            name="email"
            placeholder="Correo Electronico" 
            onChange={props.setCurrentRegister}
            value={props.user.currentRegister.email} />
          <input 
            type="password" 
            name="password"
            placeholder="Contraseña"
            onChange={props.setCurrentRegister}
            value={props.user.currentRegister.password} />
          <button>Registrarme</button>
        </form>
        <br />
        {`currentRegister: ${JSON.stringify(props.user.currentRegister)}`}
      </div>
      <div className="login">
        <h2>Iniciar Sesión</h2>
        <form>
          <input 
            type="email"
            name="email"
            onChange={props.setCurrentLogin}
            placeholder="Correo Electronico"
            value={props.user.currentLogin.email} />
          <input 
            type="password"
            name="password" 
            onChange={props.setCurrentLogin}
            placeholder="Contraseña"
            value={props.user.currentLogin.password} />
          <button>Iniciar Sesión</button>
        </form>
        <br />
        {`currentLogin: ${JSON.stringify(props.user.currentLogin)}`}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentRegister: (event) => dispatch(setCurrentRegister(event)),
    setCurrentLogin: (event) => dispatch(setCurrentLogin(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
