import React, {useState} from 'react';
import './App.css';
import {FileInput} from "./FileInput";
import {Layout} from "./Layout";
import {CentralLoader} from "./CentralLoader";

const App = () => {
    const [data, setData] = useState<object>();
    const [fileChosen, setFileChosen] = useState(false);
    return <div className="App">
        <p style={{textAlign: 'center'}}>Export telegram chat history as JSON and upload it</p>
        <div className='c'>
            <FileInput setData={setData} setFileChosen={setFileChosen}/>
        </div>
        <div>
            {
                fileChosen ?
                    data ? <Layout data={data}/> : <CentralLoader/>
                    : ''
            }
        </div>
    </div>

}

export default App;
