import { useEffect, useState } from "react"
import "./App.css"

type Data = {
  name: string,
  age: number,
}

const dummyData:Data[] = [
  {name: "tonakai", age: 63},
  {name: "santa", age: 31},
  {name: "summer", age: 15},
  {name: "blue", age: 12},
]

function App() {
  const [data, setData] = useState<[]|Data[]>([])
  useEffect(()=>{
    setTimeout(()=>{setData(dummyData)}, 1000)
  }, [])

  return (
    <div id="container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({name, age}, index)=>(
            <tr key={`${name}-${index}`}>
              <td>{name}</td>
              <td>{age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
