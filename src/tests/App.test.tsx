import React from 'react';
import ReactDOM from "react-dom";
import App from '../components/App';
import { Provider } from "react-redux";
import configureStore from "../store";

describe('App Initialisation', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = configureStore();
    const Root = () => (
      <Provider store={store}>
        <App />
      </Provider>
    );
    ReactDOM.render(<Root />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})