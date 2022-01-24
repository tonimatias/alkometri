import './App.css';
import {useState} from 'react'

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState()
  const [result, setResult] = useState(0)
 

  const calculate = (e) => {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time)

    let promille = 0;
    if (gender === 'male') {
      promille = gramsLeft / (weight * 0.7);
    }
    else {
      promille = gramsLeft / (weight * 0.6);
    }
    
    if (promille < 0) {
      promille = 0;
    }
    setResult(promille);
  }

  return (
    <div className="container">
      <h3>Calculating alcohol blood level</h3>
      <div className="form-group">
        <label>Weight</label>
        <input type="number"
        value={weight}
        onChange={e => setWeight(e.target.value)}
        />
      </div>
      <div >
        <label>Bottles</label>
        <select  name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div>
        <label>Time</label>
        <select className="custom-select mr-sm-2" name="time" value={time} onChange={e => setTime(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div >
        <label>Gender: </label>

        <input className="form-check-input" 
        type="radio" name='gender' id='male'
        value="male" 
        onChange={e => setGender(e.target.value)}
        />
        <label htmlFor="male">Male</label>

        <input className="form-check-input" 
        type="radio" name='gender' id='female'
        value="female"
        onChange={e => setGender(e.target.value)}
        />

        <label htmlFor="female">Female</label>
      </div>
      <output>{result.toFixed(1)}</output> <br />
      <button className="btn btn-primary my-1" type='button' onClick={calculate}>Calculate</button>
    </div>
  );
}

export default App;
