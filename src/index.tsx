import * as React from "react";
import ReactDOM, { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

import './index.css';
import App from './components/App';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

//render(<Root />, document.getElementById("root"));