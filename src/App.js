import ons from 'onsenui';
import { Page, Button } from 'react-onsenui';
// import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { useState } from 'react';

function App() {
    const [text, setText] = useState('');

    const handleClick = () => {
        ons.notification.alert('Hello world!');
    }

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <Page>
                <label>Input Text:</label>
                <div>
                    <input
                        value={text}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Button onClick={handleClick}>Tap Me</Button>
                </div>
            </Page>
        </div>
    );
}

export default App;