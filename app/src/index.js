import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const data = {
    story: {
        label: "Kingston",
        facts: [
            {label: "It's great"},
            {label: "It's okay..."},
        ]
    }
};

ReactDOM.render(<App data={data}/>, document.getElementById('root'));
registerServiceWorker();
