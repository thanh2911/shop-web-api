import React  , { useState , useRef} from 'react'
import { Link  , useNavigate} from 'react-router-dom'
import Button from '../../components/button/Button'
import { useUserAuth } from '../../GlobalState'
import './auth.scss'

const Register = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      setError("Passwords do not match")
    }
    else {
      setError("");
      try {
        await signUp(email, password);
        navigate("/");
      } catch (err) {
        setError(err.message);
      }
    }
   
  };


  return (
    <div className="auth" id='register'>
         <form  onSubmit={handleSubmit}>
            <h1>Register</h1>
            {error && <h3>{error}</h3>}
            <input type ="email" name="email" required 
            placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>

            <input type ="password" name="password" required autoComplete="on"
            placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
           
            <input type ="password" name="password" required autoComplete="on"
            placeholder="Re-Password" onChange={(e) => setRePassword(e.target.value)}/>
    

            <Button type="submit">Register</Button>

            <span>Don't have an account ? <Link to="/login">Login</Link></span>
            

        </form>
    </div>
  )
}

export default Register