import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Contact } from './styles';

export default class LandingPage extends Component {
  state = {
    data : '',
    ativos: ''
  }

  componentDidMount = async () => {
    this.setState( {
      data: JSON.parse(localStorage.getItem('selectedParams')).ativoSel,
      ativos : JSON.parse(localStorage.getItem('selectedParams')).ativos
    })
  }

  render () {
    
    return (
      <Container>
         
       
        <Contact>
         
          {Object.keys(this.state.ativos).map (index => (
            <li key={index}>
              {this.state.ativos[index].ativo === this.state.data ? <div>
              <span> Ativo : {this.state.ativos[index].ativo} </span>
              <span> Preço dia  : {this.state.ativos[index].precoDia} </span>
              <span> Minimo 52 semanas : {this.state.ativos[index].min52} </span>
              <span> Maximo 52 semanas : {this.state.ativos[index].max52} </span>
              <span> Valor da empresa / valor de mercado : {this.state.ativos[index].VPA} </span>
              </div>
              : <h1></h1>}
            </li>
          ))}
        </Contact>
        <button onClick = {() => this.props.history.push({ pathname: '/' })}> Voltar</button>
       
      </Container>
    );
  }
}


