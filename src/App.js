import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';



function App() {
  const [buttonColors, setButtonColors] = useState(['white', 'white', 'white']);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleClick = (index, value) => {
    const newColors = [...buttonColors];
    newColors[index] = newColors[index] === 'green' ? 'white' : 'green';
    setButtonColors(newColors);

    const newSelectedValues = [...selectedValues];
    if (newColors[index] === 'green') {
      newSelectedValues.push(value);
    } else {
      const removeIndex = newSelectedValues.indexOf(value);
      if (removeIndex > -1) {
        newSelectedValues.splice(removeIndex, 1);
      }
    }
    setSelectedValues(newSelectedValues);
  };

  const handleSubmit = () => {
    console.log(selectedValues);
  };

  return (
    <form>
      <button
        type="button"
        style={{ backgroundColor: buttonColors[0] }}
        onClick={() => handleClick(0, 'Button1')}
      >
        Button 1
      </button>
      <button
        type="button"
        style={{ backgroundColor: buttonColors[1] }}
        onClick={() => handleClick(1, 'Button2')}
      >
        Button 2
      </button>
      <button
        type="button"
        style={{ backgroundColor: buttonColors[2] }}
        onClick={() => handleClick(2, 'Button3')}
      >
        Button 3
      </button>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default App;
