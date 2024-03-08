import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
const existingConfig = Amplify.getConfig();

Amplify.configure({
  ...existingConfig,
  API: {
    ...existingConfig.API,
    REST: {
      ...existingConfig.API?.REST,
      PolicyEvalService: {
        endpoint: process.env.REACT_APP_APIGATEWAY_BASE_URL,
        region: process.env.REACT_APP_COGNITO_REGION
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <App />
);