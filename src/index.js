

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "redux-zero/react";
import store from "./store";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const Index = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
