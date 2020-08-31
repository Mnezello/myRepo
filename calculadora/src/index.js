import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Calculator from './main/Calculator';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div class="main">
        <Header />
        <Calculator />
        <Footer />
    </div>
, document.getElementById('root'));
serviceWorker.register();
