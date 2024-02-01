import { Link,useNavigate, } from "react-router-dom"
import { useState } from "react";
import { supabase } from "../main";


export default function LoginRegister() {
    const [showPassword, setShotPassword] = useState(false)
    const [password, setPassword] = useState("");
    const isRegister = location.pathname === "/register"
    const navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()
        const form = e.target
        const formdata = Object.fromEntries(new FormData(form))
        console.log(formdata);
        if(isRegister) {   
             const  { data, error } = await supabase.auth.signUp({
                email: formdata.email,
                password: formdata.password,
                options:{
                    data:{
                        username:formdata.name
                    }
                }
            })
            // kullanıcı kayıt

            
            if(!error ) {
                console.log(data);
                // local temizleme
                localStorage.removeItem("sb-yvwzfokjdgcyvyikzzen-auth-token")
                navigate("/login")
                
            }else{
                alert(error.message)
            }
        }else {
            // ssifre kontrol
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formdata.email,
                password: formdata.password,
            })
            if(!error ) {
                console.log(data);
                navigate("/")
            }else{
                alert(error.message)
            }
            
            
        } 
}

const handleToggleShow =(e) => {
    setPassword(e.target.value)
}
const handleToggleShowPassword = () => {
    setShotPassword(!showPassword)
}
    return(
        <div className="login-container">
            <div className="login-header">
                <Link to={"/"}><img src="/src/img/arrow-left.jpg" alt="" /></Link>
                <h2>{isRegister ? 'Sign Up' : 'Login'}</h2>
            </div>
            {/* <h1>{ isRegister ? <><Link to="/login">Sign Up</Link></> : <><Link to="/register">Login</Link></> }</h1> */}

            <form onSubmit={handleSubmit} className="signup-main">
                <div className="login-password">
                {isRegister && <input required type="text" name='name' placeholder='Adınız' />}
                    <input type="email" name="email" placeholder="Email" required/>
                   <div className="password-secret">
                   <input className="signupPassword" type={showPassword ? "text" :"password"} value={password} onChange={handleToggleShow} name="password" placeholder="Password" required/>
                    <img src="/src/img/show.svg" onClick={handleToggleShowPassword}></img> 
                   </div>
                </div>
                <button className="inputbtn">{isRegister ? 'Kayıt Ol' : 'Giriş Yap'}</button>
                {/* <Link className="forgot" to={"/forgotpassword"}>Forgot Password?</Link> */}
                <Link className="SignupLogin" to={"/register"}>Don’t have an account yet?<p>Sign Up</p></Link>             
            </form>
         </div>
       
           
    )
       
}   

