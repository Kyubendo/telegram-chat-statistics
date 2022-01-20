import React, {useState} from 'react';
import './App.css';
import {FileInput} from "./FileInput";
import {Chart} from "./Chart";

const App = () => {
    const [data, setData] = useState<object>();
    const [fileChosen, setFileChosen] = useState(false);
    return <div className="App">
        <FileInput setData={setData} setFileChosen={setFileChosen}/>
        {
            fileChosen ?
                data ? <Chart rawData={data}/> : 'Loading...'
                : ''
        }
    </div>

}

export default App;
