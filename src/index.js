import 'tailwindcss/tailwind.css';
import './style.css';

import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

ReactDOM.render(<App></App>, document.getElementById('app'));

if (!process.env.NODE_ENV !== 'production' && module.hot) {
	console.log('HMR on');
	module.hot.accept();
}
