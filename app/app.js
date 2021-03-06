import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Layout from './components/layout';

import store from './containers/store';

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>, app);