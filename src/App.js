import List from "./components/List"
import Search from "./components/Search"
import './App.css';
import { useEffect, useState } from "react";

function App() {
const [todos , setTodos] = useState([])

const [value, setValue] = useState("")
const [optionvalue, setOptionvalue] = useState("")

  useEffect(() =>{
    if(value.length){
      fetch(`https://restcountries.com/v3.1/name/${value}`)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((er)=> console.log(er))
    }else{
      fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((er)=> console.log(er))
    }
  },[value ,  ])
useEffect(()=>{
  if(optionvalue.length){
    fetch(`https://restcountries.com/v2/regionalbloc/${optionvalue}`)
    .then((res) => res.json())
    .then((data) => setTodos(data))
    .catch((er)=> console.log(er))
  }else{
    fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => setTodos(data))
    .catch((er)=> console.log(er))
  } 
},[optionvalue])
  return (
    <div className="App">
      <Search setValue={setValue} setOptionvalue={setOptionvalue} />
      <h1>{value}</h1>
      <ul className="lists">
        {todos.map((element)=> (
          <List key={element.name.official} name ={ element.name.common} 
          flag ={ element.flags.png} 
          capital ={element.capital}
          population = {element.population}
          region = {element.region}
          area = {element.area}
          nativeName = {element.nativeName}
          />
        ))}
       
      </ul>
    </div>
  );
}
export default App;
