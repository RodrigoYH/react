import React, {useRef, useState} from 'react'
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyBgUrbqTocNwrYG5i5Cn6Vm9tW-32Exk_A",
  authDomain: "chatsexto-ebecc.firebaseapp.com",
  projectId: "chatsexto-ebecc",
  storageBucket: "chatsexto-ebecc.appspot.com",
  messagingSenderId: "442355768345",
  appId: "1:442355768345:web:9b16272968f0f19c145e88"
})

const auth = firebase.auth()
const firestore = firebase.firestore()
//Para ir trackeando la ruta del usuario en la aplicacion:
const analytics = firebase.analytics()

function App() {

  //VERIFICAR SI UN USUARIO ESTA LOGUEADO
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header>
        <SignOut/>
        <h1>Mi chat 💬</h1>
      </header>

      <section>
        { user ? <ChatRoom /> : <SignIn/>} 
      </section>

    </div>
  );
}

function ChatMessages(props){

  const {text,uid,photoURL} = props.message
  const messageClass = uid === auth.currentUser.uid ? 'sent':'received'

  return(<>

    <div className = {`[message ${messageClass}`}>
      <img src = {photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}  />
      <p>
        {text}
      </p>
    </div>
  </>)
}

//FUNCIÓN CERRAR SESIÓN:
function SignOut()
{
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Cerrar sesión</button>
  )
}

//FUNCIÓN SIGN IN CON GOOGLE:
function SignIn()
{
  const signInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return(
    <div>
      <form>
        <input type="email" placeholder="Correo electrónico"/>
        <br/>
        <input type="password" placeholder="contraseña"/>
        <br/>
        <button type="button">Iniciar sesion</button>
      </form>

      <button className="sign-in" onClick={signInWithGoogle}>Entrar con Google</button>
      <p>Bienvenido</p>

    </div>
  )

}

//FUNCIÓN DEL CHAT:
function ChatRoom()
{

  const dummy = useRef()
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)

  const [messages] = useCollectionData(query, {idField: 'id' })

  const [formValue, setFormValue] = useState('')

  const sendMessage = async (event) =>{

    //Previene el evento y evita hacer funciones inecesarias
    event.preventDefault()
    const {uid, photoURL} = auth.currentUser

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('')
    dummy.current.scrollIntoView({behavior: 'smooth'})

  }


  return(<>
    <main>
      {messages && messages.map(msg => <ChatMessages key={msg.id} message={msg} />)}
      <span ref={dummy }></span>
    </main>

    <form onSubmit = {sendMessage}>
      <input value={formValue} onChange={(event) => setFormValue(event.target.value)} placeholder="Escribe tu mensaje" />
      <button type="submit" disabled={!formValue} >Enviar ▶️</button>
    </form>

  </>)
}


export default App;
