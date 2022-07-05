import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from './Players/PlayerList';
import PlayerSingle from './Players/PlayerSingle';
import PlayerForm from './Players/PlayerForm';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      players: [],
      currentPlayer: {}

    }
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  componentDidMount(){
    const url = 'http://localhost:4000/players';
    
    axios.get(url)
    .then((Res) => {
      this.setState({
        players: Res.data
      })
    })
    .catch((err) => {
      console.log(err);
    });
  };

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item
    });
  }

  render(){

    return (
      <div className="container-fluid">
        
        <div className="row">

          <nav>
            <div className="nav-wrapper blue darken-1">
              <a href="/" className="brand-logo">Soccer</a>
            </div>
          </nav>

        </div>

        <div className="row">        
          <div className="col s3"> <PlayerList players={this.state.players} updateCurrentPlayer={this.updateCurrentPlayer} />  </div>
          <div className="col s9"> <PlayerSingle player={this.state.currentPlayer} /> </div>
        </div>

        <div className="row">        
          <div className="col s12"> <PlayerForm/></div>
        </div>

      </div>
    );
  }
}

export default App;
