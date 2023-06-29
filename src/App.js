import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
// import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/dark-onsen-css-components.css'

import './App.css'
import searchImages from './api';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [checked, setChecked] = useState([false, false, false]);
  const [radio, setRadio] = useState();
  const [select, setSelect] = useState('option0');
  
  const renderToolbar = (route, navigator) => {
    const backButton = route.hasBackButton
      ? <Ons.BackButton onClick={event => handleBackClick(event, navigator)}>Back</Ons.BackButton>
      : null;

    const reviewButton = route.hasReviewButton
      ? <Ons.Button onClick={() => pushPage(navigator)}>Review</Ons.Button>
      : null;

    return (
      <Ons.Toolbar>
        <div className='left'>{backButton}</div>
        <div className='center'>{route.title}</div>
        <div className='right'>{reviewButton}</div>
      </Ons.Toolbar>
    );
  };

  const handleBackClick = (event, navigator) => {
    event.preventDefault();
    ons.notification.confirm('Are you sure?')
      .then((response) => {
        if (response === 1) {
          navigator.popPage();
        }
      });
  };

  const pushPage = navigator =>
    navigator.pushPage({
      title: 'Review Entry',
      hasBackButton: true,
      hasPreviewButton: false
    });

  const handleChecked = (position) => {
    const updateCheckedState = checked.map((item, index) =>
      index === position ? !item : item
    );
    setChecked(updateCheckedState);
  };

  // const handleSubmit = (event) => {
  //   console.log(
  //     text, date, radio, checked, select
  //   );
  // };

  // const handleImageSearch = () => {
  //   console.log(searchImages());
  // }

  const renderPage = (route, navigator) => (
    <Ons.Page key={route.title} renderToolbar={() => renderToolbar(route, navigator)}>
      <form className='input-cards'>

        <div className='content-card'>
          <Ons.Card modifier='material'>
            <label htmlFor='dateInput'>Today's Date: </label>
            <Ons.Input
              id='dateInput'
              value={date}
              onChange={event => setDate(event.target.value)}
              type='date'
              modifier='material'
            />
          </Ons.Card>
        </div>

        <div className='content-card'>
          <Ons.Card modifier='material'>
            <label htmlFor='checkbox1'>One </label>
            <Ons.Checkbox
              id='checkbox1'
              checked={checked[0]}
              onChange={() => { handleChecked(0) }}
              modifier='material'
            />
            <label htmlFor='checkbox2'> Two </label>
            <Ons.Checkbox
              id='checkbox2'
              checked={checked[1]}
              onChange={() => { handleChecked(1) }}
              modifier='material'
            />
            <label htmlFor='checkbox3'> Three </label>
            <Ons.Checkbox
              id='checkbox3'
              checked={checked[2]}
              onChange={() => { handleChecked(2) }}
              modifier='material'
            />
          </Ons.Card>
        </div>

        <div className='content-card'>
          <Ons.Card modifier='material'>
            <div>
              <Ons.Radio
                id='radioOption1'
                onChange={(event) => { setRadio(event.target.value); }}
                value='radio1'
                checked={radio === 'radio1'}
                modifier='material'
              />
              <label htmlFor='radioOption3'> Radio 1</label>
            </div>
            <div>
              <Ons.Radio
                id='radioOption2'
                onChange={(event) => { setRadio(event.target.value); }}
                value='radio2'
                checked={radio === 'radio2'}
                modifier='material'
              />
              <label htmlFor='radioOption3'> Radio 2</label>
            </div>
            <div>
              <Ons.Radio
                id='radioOption3'
                onChange={(event) => { setRadio(event.target.value); }}
                value='radio3'
                checked={radio === 'radio3'}
                modifier='material'
              />
              <label htmlFor='radioOption3'> Radio 3</label>
            </div>
          </Ons.Card>
        </div>

        <div className='content-card'>
          <Ons.Card modifier='material'>
            <Ons.Select
              id='select-input'
              defaultValue={select}
              // value={select}
              onChange={event => setSelect(event.target.value) }
              modifier='material'>
              <option value='option0' hidden>select a value</option>
              <option style={{backgroundColor: 'darkgray'}} value='option1'>First</option>
              <option style={{backgroundColor: 'darkgray'}} value='option2'>Second</option>
              <option style={{backgroundColor: 'darkgray'}} value='option3'>Third</option>
            </Ons.Select>
          </Ons.Card>
        </div>

        <div className='content-card'>
          <Ons.Card modifier='material'>
            <label htmlFor='textInput'>waiting: </label>
            <Ons.Input
              id='textInput'
              placeholder='type here'
              value={text}
              onChange={event => setText(event.target.value)}
              modifier='material'
            />
          </Ons.Card>
        </div>
       
        <p className='content-card'>
          <Ons.Button onClick={() => pushPage(navigator)}>Submit</Ons.Button>
        </p>

        {/* <p className='content-card'>
          <Ons.Button onClick={() => { handleSubmit() }} modifier='material' >
            Submit
          </Ons.Button>
        </p> */}

      </form>
    </Ons.Page>
  );

  return (
    <Ons.Navigator
      swipeable
      renderPage={renderPage}
      initialRoute={{
        title: 'Daily Journal',
        hasBackButton: false,
        hasReviewButton: true
      }}
    />
  );

}

export default App;

// if you want to go quickly, go with friends; if you want to go far, go alone.