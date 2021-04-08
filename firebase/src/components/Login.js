import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import 'firebase/auth'
import firebase from 'firebase/app'
import Auth from 'firebase/app'

export const Login = () =>{

    const [usuario, setUsuario] = useState()
    const [password, setPassword] = useState()

    const handleSumit = (e) =>{
        e.preventDefault()
        Login(usuario, password)
        
    }

    return(

        <div className = "row">
            <div className="col-md-4">
                <form className = "card card-body" onSubmit = {handleSumit}>
                    <div className='mb-3'>
                        <label className = "form-label">Usuario: </label>
                        <input type="email" className="form-control" onChange = {e => setUsuario(e.target.value) } value ={usuario}/>
                    </div>
                    <div className='mb-3'>
                        <label className = "form-label">Password: </label>
                        <input type="password" className="form-control" onChange = {e => setPassword(e.target.value) } value ={password}/>
                    </div>
                    <button className='btn btn-primary'>Entar</button>
                </form>


                <Link className='navbar-brand' to = "/registro">¿Tiene cuenta?</Link>
                <Link className='navbar-brand' to = "/recuperar">¿Olvidaste tu contraseña?</Link>


            </div>

        </div>
    )


}

function Login(usuario, password){

    firebase
    .auth()
    .signInWithEmailAndPassword(usuario, password)
    .then(res =>{
        if(res.user) Auth.setLoggedIn(true)
    })
    .catch(e =>{
        console.log(e.message)
    })

}


