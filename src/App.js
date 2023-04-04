import { Outlet } from 'react-router-dom';

import GlobalStyle from './globalstyle';
import Nav from './Nav.jsx';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
