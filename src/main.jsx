import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="367393678729-gun11liu671o7om050mgo6i3c3h202vc.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    
  </React.StrictMode>,
)
