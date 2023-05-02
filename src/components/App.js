import '../styles/App.css';
import Input from './input'
import Task from './rateMonotonic'
import Early from './earliestDeadline'
import Apex from './apex'
import { useState } from 'react';

function App() {

    return (
        <div className="App">
            <div className='Title'> Gantt Charts </div>
            <Input />

                <span className='rms'> Rate Monotonic Scheduling </span>
            <div className='charts'>
                <Task name="Task 1" period={10} executionTime={2} />
                <Task name="Task 2" period={20} executionTime={3} />
                <Task name="Task 3" period={30} executionTime={4} />
            </div>

        </div>
    );
}

export default App;
