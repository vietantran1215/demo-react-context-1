import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContentContextProvider } from './context/ContentContext.jsx'

const initialValue = {
  title: 'Hello DJ Koy Joker',
  paragraph: 'Welcome to Vinahey kingdom'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContentContextProvider value={initialValue}>
      <App />
    </ContentContextProvider>
  </React.StrictMode>,
)
