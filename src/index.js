// import 'normalize.css';
import 'tailwindcss/tailwind.css';
import './style/style.pcss';
import './index.html';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

ReactDOM.render(<App></App>, document.getElementById('app'));

if (!process.env.NODE_ENV !== 'production' && module.hot) {
	console.log('HMR on');
	module.hot.accept();
}
