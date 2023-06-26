import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [radio, setRadio] = useState();

  const renderToolbar = () => {
    return (
      <Ons.Toolbar>
        <div className='center'>My Simple App</div>
      </Ons.Toolbar>
    );
  }

  const handleClick = () => {
    ons.notification.alert('Hello world!');
  }

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleRadio = (event) => {
    setRadio(event.target.checked);
  };

  return (
    <Ons.Page renderToolbar={renderToolbar}>
      <div onChange={handleRadio}>
        <Ons.Radio
          modifier='material' 
        />
        <Ons.Radio
          checked={radio}
          modifier='material'
        />
        <Ons.Radio
          checked={radio}
          modifier='material' 
        />
      </div>
      <label>Input Text:</label>
      <div>
        <Ons.Input
          modifier='material'
          placeholder='type here'
          value={text}
          onChange={handleChange}
        />
      </div>
      <div>
        <Ons.Button modifier='material' onClick={handleClick}>Tap Me</Ons.Button>
      </div>
    </Ons.Page>
  );
}

export default App;