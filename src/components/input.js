import {TextField} from '@mui/material'
import { styled } from '@mui/material/styles';
import React, { useState } from "react";


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

export default function Input(){
    const [n, setN] = useState(0);
    const [p, setP] = useState([]);

    const handleKeyPress = (event) => {
        setP([])
        if (event.key === 'Enter') {

            for(let i = 1; i <= n; i++){
                const po =  `Process ${i}` 
                setP(prevItems => [...prevItems, po]);

            }
        }
    };

    return (
        <div className='input-container'> 
            <div className='number-container'> 
                <span> Total Processes :</span>
                <CssTextField id="outlined-basic" label="Total" variant="outlined" onChange={(event) => setN(event.target.value)} onKeyPress={handleKeyPress}/>
            </div>
            <div className='individual-pinput'> 
        {n !== 0 ? p.map((item) => {return <div className='pid' key={item}> {item} 
            <CssTextField id="outlined-basic" label="Execution Time" variant="outlined"/>
            <CssTextField id="outlined-basic" label="Period" variant="outlined"/>
    </div>
        }) : null}
            </div>
        </div>
    )
}
