import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import store from './redux/store.js'
import { Provider } from "react-redux"
import App from './App.jsx'
import { AuthContextProvider } from './context/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </StrictMode>,
)
