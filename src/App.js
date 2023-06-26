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
    setRadio(event.target.value);
  };

  return (
    <Ons.Page renderToolbar={renderToolbar}>
      <div>
        <Ons.Radio
          onChange={handleRadio}
          value="option1"
          checked={radio === "option1"}
          modifier='material'
        />
        <Ons.Radio
          onChange={handleRadio}
          value="option2"
          checked={radio === "option2"}
          modifier='material'
        />
        <Ons.Radio
          onChange={handleRadio}
          value="option3"
          checked={radio === "option3"}
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