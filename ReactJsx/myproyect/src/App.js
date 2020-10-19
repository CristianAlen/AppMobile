import React, {Component, useState} from 'react';
//import logo from './logo.svg';
import logo from './loggo.gif';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {

    response: [],
    estado: null

  };

  handlerText(e){
    //console.log(e.target.value)
    var cap = e.target.value;
    this.setState({value : cap});
    //console.log(cap)
  }

  handlerButton = () => {
    var cap = this.state.value;

    axios.get('https://onepiececover.com/api/chapters/'+cap)
    .then( res => {

        console.log(res.data);
      
        this.setState({
          response: res.data,
          estado: true
        });
        console.log(this.state)
    });


    /*
    const request = require('request');
    
    //console.log(cap);
    
    request('https://onepiececover.com/api/chapters/'+cap, function (error, body) {
        
        if(body !== false){
        
        //console.log(body);
        //console.log("Body: " , body);
        var objJson = JSON.parse(body.body);
        //var objJson = body;
        console.log(objJson);

        console.log('Titulo: ', objJson.title);
        console.log('Capitulo: ', objJson.chapter);
        console.log('Personajes: ', objJson.characters);

        var responseApi = {
          titulo: objJson.title,
          capitulo: objJson.chapter,
          personajes: objJson.characters
        }
      }else{
        console.error('Error: ', error);
      }

      this.setState({
        response: responseApi
      });

    });

*/
    
  }
 
  render(){

  if(this.state.estado != true){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} /*className="App-logo"*/ alt="logo" />
      <div>
      <form>
        <label>
          Que Capitulo Busca?
          <input type="text" name="name" onChange={this.handlerText.bind(this)}/>
        </label>
        <input type="button" value="Buscar" onClick={this.handlerButton.bind(this)}/>
      </form>
      </div>
      </header>
    </div>
  );
}else{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} /*className="App-logo"*/ alt="logo" />
      <div>
      <form>
        <label>
          Que Capitulo Busca?
          <input type="text" name="name" onChange={this.handlerText.bind(this)}/>
        </label>
        <input type="button" value="Buscar" onClick={this.handlerButton.bind(this)}/>
      </form>
      </div>
      <div className="App-box">
        <p><img src={this.state.response.cover_images} alt="imagenCapitulo"></img></p>
        <p>Titulo: {this.state.response.title}</p>
        <p>Capitulo: {this.state.response.chapter}</p>
        <p>Personajes: {this.state.response.characters}</p>
        <p>Sumario: {this.state.response.summary}</p>
      </div>
      </header>
    </div>
  );
}
}
}

export default App;
