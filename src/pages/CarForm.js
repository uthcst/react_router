
import { useState } from "react";
function CarForm() {
  const [model, setModel] = useState("");

  //Specify what to do with from submmission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The model you entered was: ${model}`)
  }
  
  return (
    <div className="App">
      <header className="App-body">
        <h1>
          Form Example
        </h1>
        <form onSubmit={handleSubmit}>
          <label>Enter the model of the car:
            <input type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)} />
          </label>
        </form>
        <div>
        Car model: {model}
      </div>
      </header>

    </div>
  );
}

export default CarForm;