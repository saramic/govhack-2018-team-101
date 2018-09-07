import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const data = {
    story: {
        location: "Kingston",
        facts: [
            {
                label: "It's great",
                dataSource: "http://data.gov.au",
            },
            {
                label: "It's okay...",
                dataSource: "http://data.vic.gov.au",
            },
            {
                label: "It is a council (I think?)",
                dataSource: "http://kingston.gov.au",
            },
            {
                label: "There are people there",
                dataSource: "http://google.com",
            },
        ]
    }
};

ReactDOM.render(<App data={data}/>, document.getElementById('root'));
registerServiceWorker();
