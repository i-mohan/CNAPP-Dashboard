import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
};

export default App;
