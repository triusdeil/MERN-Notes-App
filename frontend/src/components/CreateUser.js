import React, { Component } from 'react'
import axios from 'axios'
export default class CreateUser extends Component {

    state ={
        users: [],
        username: ''
    }

    //Metodo de componente
    //ejecuta el codigo una vez el componente sea montado
    async componentDidMount (){
        this.getUsers();
    }
    //escucha cuando un usuario tipe algo
    //recibira un evento
    onChangeUsername = (e) =>{
        this.setState({
            username: e.target.value
        })
    }

    //Metodo para obtener Usuarios
    getUsers = async () =>{
        //api para hacer peticiones http (fetch o axios)
        const res = await axios.get('http://localhost:4000/api/users')
        this.setState({users: res.data});
    }

    //Metodo onSubmit
    //escuchar el objeto que nos devuelve
    //e.preventDefault cancela el refrescamiento de la pagina
    onSubmit = async  e =>{
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
        username:this.state.username
        })
        this.setState({username:''})
        this.getUsers()
    }

    deleteUser = async (id) =>{
        await axios.delete('http://localhost:4000/api/users/' + id)
        this.getUsers();
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" 
                            className="form-control" 
                            onChange={this.onChangeUsername} 
                            value={this.state.username}/>
                        </div>
                        
                        <button type="submit" className="btn btn-dark">
                            Save
                        </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">{
                        this.state.users.map(user=>
                        <li className="list-group-item list-group-item-action" 
                            key={user._id}
                            onDoubleClick={() => this.deleteUser(user._id)}>
                            {user.username}
                            </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}
