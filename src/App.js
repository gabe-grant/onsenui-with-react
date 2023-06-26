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
  // const [date, setDate] = useState('');

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
      <Ons.Page renderToolbar={renderToolbar} style={{ textAlign: 'center' }}>

        <section >

          <Ons.Card style={{ textAlign: 'center', width: '300px' }} modifier='material'>
            <label htmlFor='textInput'>Name: </label>
            <Ons.Input
              id='textInput'
              placeholder='type here'
              value={text}
              onChange={handleTextInput}
              modifier='material'
            />
          </Ons.Card>

          <Ons.Card style={{ textAlign: 'center', width: '300px' }} modifier='material'>
            <label htmlFor='dateInput'>Date: </label>
            <Ons.Input
              id='dateInput'
              // value={date}
              // onChange={(event) => setDate({ value: event.target.value })}
              type='date'
              modifier='material'
            />
          </Ons.Card>

          <Ons.Card style={{ textAlign: 'center', width: '300px' }} modifier='material'>
            <div>
              <Ons.Radio
                id='radioOption1'
                onChange={handleRadioOption}
                value='option1'
                checked={radio === 'option1'}
                modifier='material'
              />
              <label htmlFor='radioOption3'> Radio1</label>
            </div>
            <div>
              <Ons.Radio
                id='radioOption2'
                onChange={handleRadioOption}
                value='option2'
                checked={radio === 'option2'}
                modifier='material'
              />
              <label htmlFor='radioOption3'> Radio3</label>
            </div>
            <div>
              <Ons.Radio
                id='radioOption3'
                onChange={handleRadioOption}
                value='option3'
                checked={radio === 'option3'}
                modifier='material'
              />
              <label htmlFor='radioOption3'> Radio3</label>
            </div>
          </Ons.Card>

          <Ons.Card style={{ textAlign: 'center', width: '300px' }} modifier='material'>
            <label htmlFor='checkbox1'>
              <Ons.Checkbox
                id='checkbox1'
                checked={checked}
                onChange={() => { setChecked(false); }}
                modifier='material'
              />
              One
            </label>
            <label htmlFor='checkbox2'>
              <Ons.Checkbox
                checked={checked}
                onChange={() => { setChecked(false); }}
                modifier='material'
              />
              Two
            </label>
            <label htmlFor='checkbox3'>
              <Ons.Checkbox
                checked={checked}
                onChange={() => { setChecked(false); }}
                modifier='material'
              />
              Three
            </label>
          </Ons.Card>

          <Ons.Card style={{ textAlign: 'center', width: '300px' }} modifier='material'>
            <Ons.Select
              defaultValue='select0'
              onChange={(event) => setSelect({ value: event.target.value })}
              modifier='material'>
              <option value='select0' disabled>Select One</option>
              <option value={select}>First</option>
              <option value={select}>Second</option>
              <option value={select}>Third</option>
            </Ons.Select>
          </Ons.Card>

          <p style={{ textAlign: 'center' }}>
            <Ons.Button onClick={handleClick} modifier='material' >Click Me</Ons.Button>
          </p>

        </section>

      </Ons.Page>
  );
}

export default App;

// if you want to go quickly, go with friends; if you want to go far, go alone.