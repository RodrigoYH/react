import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import 'firebase/auth'
import firebase from 'firebase/app'
import Auth from 'firebase/app'

export const Recuperar = () =>{

    const [usuario, setUsuario] = useState()

    const handleSumit = (e) =>{
        e.preventDefault()
        recuperar(usuario)
    }

    return(
        <div className = "row">
            <div className="col-md-4">
                <form className = "card card-body" onSubmit = {handleSumit}>
                    <div className='mb-3'>
                        <label className = "form-label">Escribe tu nombre de usuario: </label>
                        <input type="email" className="form-control" onChange = {e => setUsuario(e.target.value) } value ={usuario}/>
                    </div>
                    <button className='btn btn-primary'>Recuperar</button>
                </form>


            </div>

        </div>
        
    )


}

function recuperar(usuario){
    firebase
    .auth()
    .sendPasswordResetEmail(usuario)
    .then(res =>{

    })
    .catch(e =>{
        console.log(e.message)
    })
}
