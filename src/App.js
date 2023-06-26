import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [radio, setRadio] = useState();
  const [checked, setChecked] = useState(false);
  const [select, setSelect] = useState(false);

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

  const handleTextInput = (event) => {
    setText(event.target.value);
  };

  const handleRadioOption = (event) => {
    setRadio(event.target.value);
  };


  return (
    <Ons.Page renderToolbar={renderToolbar}>
      <label>Name: </label>
      <Ons.Input
        modifier='material'
        placeholder='type here'
        value={text}
        onChange={handleTextInput}
      />
      <div className='radio-options'>
        <Ons.Radio
          onChange={handleRadioOption}
          value="option1"
          checked={radio === "option1"}
          modifier='material'
        />
        <Ons.Radio
          onChange={handleRadioOption}
          value="option2"
          checked={radio === "option2"}
          modifier='material'
        />
        <Ons.Radio
          onChange={handleRadioOption}
          value="option3"
          checked={radio === "option3"}
          modifier='material'
        />
      </div>
      <div className='checkbox-options'>
        <label>
          <Ons.Checkbox
            checked={checked}
            onChange={() => { setChecked(false); }}
            modifier='material'
          />
          One
        </label>
        <label>
          <Ons.Checkbox
            checked={checked}
            onChange={() => { setChecked(false); }}
            modifier='material'
          />
          Two
        </label>
        <label>
          <Ons.Checkbox
            checked={checked}
            onChange={() => { setChecked(false); }}
            modifier='material'
          />
          Three
        </label>
      </div>
      <Ons.Select modifier="material"
        // value={select}
        onChange={(event) => setSelect({ value: event.target.value })}>
        <option value="select0" disabled selected>Select One</option>
        <option value="select1">First</option>
        <option value="select2">Second</option>
        <option value="select3">Third</option>
      </Ons.Select>
      <div>
        <Ons.Button modifier='material' onClick={handleClick}>Tap Me</Ons.Button>
      </div>
    </Ons.Page>
  );
}

export default App;

// onChange={event => { setCheckbox({checked: event.target.checked})} }