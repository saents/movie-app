import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyleProvider, legacyLogicalPropertiesTransformer  } from '@ant-design/cssinjs';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from './App.js';

import store from './store';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
            <Provider store={store}>
                <App/>
            </Provider>
        </StyleProvider>
    </BrowserRouter>
);
