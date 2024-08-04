import React from 'react';
import Task from './components/Task';
import Check from './components/Check';
import './css/styles.css';
import Field from "./components/Field";

function App() {
    return (
        <div className="field">
            <Field />
            <Check />
        </div>
    );
}

export default App;
