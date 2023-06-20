import Input from "./components/Input.jsx";
import {useState} from "react";
import './assets/css/style.css'
import Text from "./components/Text.jsx";

function App() {
const [inputStr , setInputStr] = useState('')
    return (
        <>
           <Input onChange={(val)=> setInputStr(val)}/>
            <Text inputStr={inputStr}/>
        </>
    )
}

export default App
