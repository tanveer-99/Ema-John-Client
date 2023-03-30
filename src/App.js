import './App.css';
import { useState } from 'react'
import Header from './components/Header/Header.jsx';
import Shop from './components/Shop/Shop.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
