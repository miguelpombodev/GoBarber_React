import React from 'react';

// import Signin from './pages/Signin';
import Signin from './pages/Signin';
import GlobalStyle from './styles/global';

// import ToastContainer from './components/ToastContainer';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <Signin />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
