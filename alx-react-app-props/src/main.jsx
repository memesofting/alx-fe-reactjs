import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { UserContext } from './UserContext.js'


const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext value={userData}>
      <App />
    </UserContext>
  </StrictMode>,
)
