
import "../components/list.css"
function List({name , flag ,capital,population , region , area  }) {
  return (
    <li className="list">
      <img src={flag} />
      <h3>{name}</h3>
      <p>Population : {population} </p>
      <p>Region : {region}</p>
      <p> Area : {area } </p>
      
      
      <p>Capital : {capital} </p>
    </li>
  )
}
export default List;