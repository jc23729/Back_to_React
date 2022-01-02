import logo from './logo.svg';
import './App.css';

// This is our component 
function App() {

  let a = 12;
  const [b, setb] = useState(0);

  return (
    <div className="App">
      {a}
      <button onClick={() => {
        a = a + 1
        console.log(a)

      }}>change value</button>
      {b}
    </div>
  )
}

export default App;
