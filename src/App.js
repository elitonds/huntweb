import React, {Component} from 'react';
import Header from './components/Header'
import './styles.css';
import Routes from './routes';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {
  render(){
    return(
      <div className='App'>
        <Header/>
        <Routes/>
      </div>
    );
  }
}

export default App;
