import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      myFriends: [],
      picture: "",
      name: "",
    }
    this.updatePicture = this.updatePicture.bind(this);
    this.updateName = this.updateName.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }
  updatePicture(e) {
    this.setState ({
      picture: e.target.value
    })
  }
  updateName(e) {
    this.setState ({
      name: e.target.value
    })
  }
  addFriend(e) {
    const newFriend = {
      picture: this.state.picture,
      name: this.state.name
    }

    const tempFriends = this.state.myFriends.slice();
    tempFriends.push(newFriend);

    this.setState({
      myFriends: tempFriends,
      picture: '',
      name: ''
    })
  }
  render() {
    const {myFriends, name, picture} = this.state;
    const friends = myFriends.map((friend) => 
      <div>
        <img src={friend.picture}></img>
        <h2>{friend.name}</h2>
      </div>
    )
    return (
      <div className="App">
        <label>Picture:</label>
        <input type="url" value={this.state.picture} onChange={this.updatePicture}/>

        <label>Name:</label>
        <input type="text" value={this.state.name} onChange={this.updateName}/>

        <button onClick={this.addFriend}>Add Friend</button>
      </div>
    );
  }
}

export default App;
