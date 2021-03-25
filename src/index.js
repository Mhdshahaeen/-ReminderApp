import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reminders from './reducers/index';
import  './index.css'
import {Helmet} from "react-helmet";



const store = createStore(reminders)
ReactDOM.render(
    
    <Provider store={store}>    
        <App/>
        <Helmet>
        <title>
        Reminder App
        </title>
    </Helmet>
    </Provider>,
document.getElementById('root')
)