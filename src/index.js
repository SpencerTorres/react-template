import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';

const title = 'App';

ReactDOM.render(
	<h1>{title}</h1>,
	document.getElementById('root')
);

module.hot.accept();
