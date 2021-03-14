import React from "react"
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navigation from './components/Navigation'
import NotesList from "./components/NotesList";
import CreateUser from "./components/CreateUser"
import CreateNotes from './components/CreateNotes'
function App() {
  return (
    //Router es un contenedor a todos los componentes le da acceso a un objeto
    //Route son las rutas
    //exact para que coincida exactamente la ruta
    <Router>
      <Navigation/>
      
      <div className="container p-4">
      <Route path="/" exact component={NotesList}/>

      <Route path="/edit/:id" component={CreateNotes}/>

      <Route path="/create" component={CreateNotes} />

      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  )
}

export default App;
