import { Outlet } from 'react-router-dom';

import GlobalStyle from './style/globalstyle';
import Header from './component/Header.jsx';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
