import ProfilePage from './ProfilePage';
import { UserContext } from './UserContext';
import { createContext, useContext } from 'react';

function App() {
  const user = useContext(UserContext);
  
  return (
  <ProfilePage />
);
}

export default App;
