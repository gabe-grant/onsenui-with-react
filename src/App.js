import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
// import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/dark-onsen-css-components.css'

import './App.css'
import searchImages from './api';
import ImageList from './components/ImageList';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [checked, setChecked] = useState([false, false, false]);
  const [radio, setRadio] = useState();
  const [select, setSelect] = useState('option0');
  const [images, setImages] = useState([]);

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

  const handleImages = async () => {
    const result = await searchImages();
    console.log(result);
    setImages(result);
  };

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
            <label htmlFor='checkbox1'>Meditate? </label>
            <Ons.Checkbox
              id='checkbox1'
              checked={checked[0]}
              onChange={() => { handleChecked(0) }}
              modifier='material'
            />
            <label htmlFor='checkbox2'> Exercise? </label>
            <Ons.Checkbox
              id='checkbox2'
              checked={checked[1]}
              onChange={() => { handleChecked(1) }}
              modifier='material'
            />
            <label htmlFor='checkbox3'> Create? </label>
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
              How well did you sleep?
            </div>
            <div style={{ paddingTop: '.75em' }}>
              <Ons.Radio
                id='radioOption1'
                onChange={(event) => { setRadio(event.target.value); }}
                value='radio1'
                checked={radio === 'radio1'}
                modifier='material'
              />
              <label htmlFor='radioOption3'> Great</label>
            </div>
            <div>
              <Ons.Radio
                id='radioOption2'
                onChange={(event) => { setRadio(event.target.value); }}
                value='radio2'
                checked={radio === 'radio2'}
                modifier='material'
              />
              <label htmlFor='radioOption3'> Okay</label>
            </div>
            <div>
              <Ons.Radio
                id='radioOption3'
                onChange={(event) => { setRadio(event.target.value); }}
                value='radio3'
                checked={radio === 'radio3'}
                modifier='material'
              />
              <label htmlFor='radioOption3'> Bad</label>
            </div>
          </Ons.Card>
        </div>

        <div className='content-card'>
          <Ons.Card modifier='material'>
            <div>
              What was today's primary focus?
            </div>
            <Ons.Select
              id='select-input'
              defaultValue={select}
              // value={select}
              onChange={event => setSelect(event.target.value)}
              modifier='material'>
              <option value='option0' hidden>select a value</option>
              <option style={{ backgroundColor: 'darkgray' }} value='option1'>Happiness</option>
              <option style={{ backgroundColor: 'darkgray' }} value='option2'>Health</option>
              <option style={{ backgroundColor: 'darkgray' }} value='option3'>Wealth</option>
            </Ons.Select>
          </Ons.Card>
        </div>

        <div className='content-card'>
          <Ons.Card modifier='material'>
            <label htmlFor='textInput'>Notes: </label>
            <Ons.Input
              id='textInput'
              placeholder='type here'
              value={text}
              onChange={event => setText(event.target.value)}
              modifier='material'
            />
          </Ons.Card>
        </div>

        {/* <p className='content-card'>
          <Ons.Button onClick={() => {handleSubmit()}}>Submit</Ons.Button>
        </p> */}

        <p className='content-card'>
          <Ons.Button onClick={() => { handleImages() }} modifier='material' >
            Generate Image
          </Ons.Button>
        </p>

        <div className='content-card'>
          <ImageList images={images} />
        </div>

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