import React, {useState} from 'react';
import './App.css';
import {FileInput} from "./FileInput";
import {Charts} from "./Charts";

const App = () => {
    const [data, setData] = useState<object>();
    const [fileChosen, setFileChosen] = useState(false);
    return <div className="App">
        <p>Export telegram chat history as JSON and upload it</p>
        <div className='c'>
            <FileInput setData={setData} setFileChosen={setFileChosen}/>
        </div>
        <div>
            {
                fileChosen ?
                    data ? <Charts data={data}/> : 'Loading...'
                    : ''
            }
        </div>
    </div>

}

export default App;
