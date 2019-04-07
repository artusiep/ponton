import * as React from 'react';
import './App.css';
import { RouteWizard } from './routeWizard/RouteWizard';
import { MapPicker } from './components/MapPicker';

class App extends React.Component {
  handleOnChange = () => {
  }

  render() {
    return <MapPicker height={500} width={500} onChange={ this.handleOnChange } />;
  }
}

export default App;
