import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    /* facem un API request la URL-ul dat ca parametru, din care primim un 'promise' de la fetch
       al doilea 'then' ne returneaza un nou promise care va contine corpul, adica monsters setati
       pe users, care vin adusi ca un obiect denumit 'users'
    */
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users}))
  }

  render() {
    return (
        <div className="App">
          {this.state.monsters.map(monster => (
              <h1 key={monster.id}> {monster.name} </h1>
          ))}
        </div>
    )
  }
}

export default App;
