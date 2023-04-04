import { Outlet } from 'react-router-dom';

import Nav from './Nav.jsx';
function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
