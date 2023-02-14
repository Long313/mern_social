import "./register.css";

const Register = () => {
  return <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Lamasocial</h3>
            <span className="loginDesc">
                Connect with friends and the world around you on Lamasocial.
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input className="loginInput" type="text" placeholder="Username"/>
                <input className="loginInput" type="text" placeholder="Email"/>
                <input className="loginInput" type="text" placeholder="Password"/>
                <input className="loginInput" type="text" placeholder="Password Again"/>
                <button className="loginButton">Sign Up</button>
                <span className="loginForgot">Forgot Password ?</span>
                <button className="loginRegisterButton">Login into Account</button>
            </div>
        </div>
    </div>
  </div>;
};

export default Register;
