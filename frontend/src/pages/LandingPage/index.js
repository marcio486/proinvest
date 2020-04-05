import React, { Component } from 'react';
import api from '../../services/api';
import { Container, AllCodes,SearchParams } from './styles';
import Autocomplete ,{ createFilterOptions } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import investing from '../../assets/investing.jpg'

export default class LandingPage extends Component {
  state = {
    ativos: '',
    ativoSel : '',
    lenCod : 0
  }

  componentDidMount = async () => {
    const response = await api.get('/ativos')
    this.setState({
      ativos: response.data,
    })

  }

  verifyCode = async (a, event) => {
    console.log(a,event)  
    if (a && a.length > 0) {
        await this.setState({ ativoSel: a })
      }
    await this.setState({ lenCod: a.length })
  
  }

  handleClick = ativo => {
    console.log(ativo)
  }

  nextPage = () =>{
    localStorage.setItem('selectedParams', JSON.stringify(this.state))
    this.props.history.push({ pathname: '/results', params: this.state })
  }



  render() {
    const filterOptions = createFilterOptions({
      matchFrom: 'start',    
    });
    return (
      <Container>
        <img src={investing} alt="arrow up"></img>
        <SearchParams>
          <Autocomplete

            style={{ width: '250px', height: 22 }}
            id="origin"
            type="text"
            
            onInputChange={(e, v) => this.verifyCode(v, e)}

            options={ Object.keys(this.state.ativos).map(index => (this.state.ativos[index].ativo))}
            filterOptions={filterOptions}

            required
            renderInput={params => (
              <TextField
                {...params}

                placeholder='Escolha seu ativo'
                InputProps={{
                  ...params.InputProps,
                 
                  style: { fontSize: 14, fontFamily: ['Roboto', 'sans-serif'],color: 'black' }
                }}
              />
            )}
          />
          <button onClick = {() =>this.nextPage()}>Escolhi meu ativo</button>
          
         </SearchParams>
        <AllCodes>
          {Object.keys(this.state.ativos).map(index => (
            <li key={index}>
              <button onClick={() => this.handleClick(this.state.ativos[index].ativo)}> Selecionar ativo</button>
              <span> Ativo : {this.state.ativos[index].ativo} </span>
            </li>
          ))}
        </AllCodes>
      </Container>
    );
  }
}


