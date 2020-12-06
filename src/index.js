// import 'normalize.css';
import 'tailwindcss/tailwind.css';
import './style/style.scss';
import './index.html';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

ReactDOM.render(<App></App>, document.getElementById('app'));

if (!PRODUCTION && module.hot) {
	module.hot.accept();
}
