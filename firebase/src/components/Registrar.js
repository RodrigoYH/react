import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import 'firebase/auth'
import firebase from 'firebase/app'
import Auth from 'firebase/app'

export const Registro = () =>{

    //CAHCA LAS ACCIONES DE UN INPUT:
    const [usuario, setUsuario] = useState()
    const [password, setPassword] = useState()
    const [repassword, setRePassword] = useState()

    const handleSumit = (e) =>{
        e.preventDefault()
        add(usuario, password)
    }


    return(
        <div className="row">
            <div className="col-md-4">
            <form className="card card-body" onSubmit = {handleSumit}>
                <div className='mb-3'>
                    <label className='form-label'>Correo: </label>
                    <input type='email' className='form-control' onChange = {e => setUsuario(e.target.value) } value ={usuario}/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password: </label>
                    <input type='password' className='form-control'  onChange = {e => setPassword(e.target.value) } value ={password}/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Confirmar password: </label>
                    <input type='password' className='form-control'  onChange = {e => setRePassword(e.target.value) } value ={repassword}/>
                </div>

                <button type='submit' className='btn btn-primary'>Guardar</button>

            </form>
            <Link className='navbar-brand' to = "/">Ya tengo cuenta</Link>
            

            </div>
        </div>
    )
}

function add(email, password){
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
        if(res.user) Auth.setLoggedIn(true)
    })
    .catch( e =>{
        console.log(e.message)
    })
}

