import './App.css';
import Navbar from './Navbar';
import Tennis from './Tennis';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-div">
        <Tennis association='WTA' />
        <Tennis association='ATP' />
      </div>
    </div>
  );
}

export default App;
