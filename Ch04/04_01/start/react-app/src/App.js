import './App.css';
import { useReducer } from "react";



function App() {
  const [checked, setChecked] = useReducer((checked => !checked), false);
  return (
    <div className="App">
      <input id="checkbox" type="checkbox" value={checked} onChange={setChecked} />
      <label for="checkbox">
        {checked ? "checked": "not checked"}
      </label>
    </div>
  );
}

export default App;
