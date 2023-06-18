import Input from "./components/Input.jsx";
import {useState} from "react";
import './assets/css/style.css'

function App() {
const [inputStr , setInputStr] = useState('')
    return (
        <>
           <Input onChange={(val)=> setInputStr(val)}/>
            <h2>Character Count = {inputStr.length}</h2>
        </>
    )
}

export default App
