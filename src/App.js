import React,  { Component } from 'react';
import { connect } from 'react-redux'
//import { incrementar,decrementar, setear } from './reducers'
import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForms'
class App extends Component {
  handleSubmit = payload => {
    console.log(payload)
  }

 render(){
  return (
    <div className="App">
    <UserForm onSubmit={this.handleSubmit}/>
    </div>
  );
}
}
/**
 * Recibe el estado completo , adaptar el estado a entregar lo que necesita para funcionar
*/
const mapStateToProps = state => {
  
  return {
    valor: state.contador,
  }
}
const mapDispatchToProps = dispatch =>({
  //incrementar: () => dispatch( incrementar()),
  //decrementar: () => dispatch( decrementar()),
  //setear: payload => dispatch( setear(payload))
})
/**
 *  toma acciones y transforma en acciones para despachar
 */
/**connect funcion currier que se ejecuta dos veces la primera */
export default connect(mapStateToProps,mapDispatchToProps)(App);
