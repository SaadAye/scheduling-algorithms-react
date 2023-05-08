import '../styles/App.css';
import Task from './rateMonotonic'
import Early from './earliestDeadline'
import Apex from './apex'
import { useState } from 'react';
import {TextField, Button} from '@mui/material'
import { styled } from '@mui/material/styles';


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});


function App() {

    const [n, setN] = useState(0);
    const [p, setP] = useState([]);
    const [inputListP, setInputListP] = useState([]);
    const [inputList, setInputList] = useState([]);

    const handleKeyPress = (event) => {
        setP([])
        if (event.key === 'Enter') {

            for(let i = 1; i <= n; i++){
                const po =  `Process ${i}` 
                setP(prevItems => [...prevItems, po]);

            }
        }
    };

    function isRMSSchedulable(processes) {
        const n = n;
        const utilizationBound = n * (Math.pow(2, 1 / n) - 1);
        console.log('RMS UtilisationBound', utilizationBound);
        const totalUtilization = processes.reduce((acc, process) => acc + process.executionTime / process.timePeriod, 0);
        console.log('RMS TotalUtilisation', totalUtilization);

        return totalUtilization <= utilizationBound;
    }

    const handleButtonClick = () => {
        const inputs = document.querySelectorAll('.pid');
        const newInputs = Array.from(inputs).map((input) => {
                setInputListP(prevItems => [...prevItems, input.value]);
        });

        inputListP.map((item, index) => console.log(item))

    };

    return (
        <div className="App">
            <div className='Title'> Gantt Charts </div>
            <div className='input-container'> 
                <div className='number-container'> 
                    <span> Total Processes :</span>
                    <CssTextField id="outlined-basic" label="Total" variant="outlined" onChange={(event) => setN(event.target.value)} onKeyPress={handleKeyPress}/>
                </div>
                <div className='individual-pinput'> 
        {n !== 0 ? p.map((item) => {return <div className='pid' key={item}> {item} 
        <CssTextField id="outlined-basic" label="Execution Time" variant="outlined"/>
        <CssTextField id="outlined-basic" label="Period" variant="outlined"/>
</div> }): null}
    <Button variant="contained" onClick={handleButtonClick}color="primary" sx={{'margin-top': '10px', 'width': '190px', 'height': '50px', 'margin-left':'260px'}}>
        Generate Charts 
    </Button>

</div>
</div>


<span className='rms'> Rate Monotonic Scheduling </span>
<div className='charts'>
    <Task name="Task 1" period={10} executionTime={2} />
    <Task name="Task 2" period={6} executionTime={3} />
    <Task name="Task 3" period={8} executionTime={4} />
</div>
<span className='rms'> Earliest Deadline First</span>
<div className='charts'>
    <Task name="Task 1" period={10} executionTime={2} />
    <Task name="Task 2" period={6} executionTime={3} />
    <Task name="Task 3" period={8} executionTime={4} />
</div>



        </div>
    );
}

export default App;
