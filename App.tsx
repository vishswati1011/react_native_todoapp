// In App.js in a new project

import * as React from 'react';
import {useContext} from 'react';
import UnAuthNavigation from './navigation/unAuthNavigation';
import AuthNavigation from './navigation/authNavigation';
import {AuthProvider, AuthContext} from './context/authContext';

function AppContent() {
  const {token} = useContext(AuthContext);

  console.log(token, 'token');

  return token ? <AuthNavigation /> : <UnAuthNavigation />;
}
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
