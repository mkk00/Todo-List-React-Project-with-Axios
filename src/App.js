import { Outlet } from 'react-router-dom';

import GlobalStyle from './style/globalstyle';
import Nav from './component/Nav.jsx';
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
