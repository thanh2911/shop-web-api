import React  , { useState } from 'react'
import { Link  , useNavigate} from 'react-router-dom'
import Button from '../../components/button/Button'
import { useUserAuth } from '../../GlobalState'
import GoogleButton from "react-google-button";
import './auth.scss'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className="auth" id="login">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            {error && <h3>{error}</h3>}
            <input type ="email" name="email" required 
            placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>

            <input type ="password" name="password" required autoComplete="on"
            placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>

            <Button 
              type="submit"
            >
                Login
              </Button>

              {/* <div>
                <GoogleButton
                  className="g-btn"
                  type="dark"
                  onClick={handleGoogleSignIn}
                />
              </div> */}

            <span>Don't have an account ? <Link to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login