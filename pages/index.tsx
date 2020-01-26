import {BlueNavBar} from "../components/Navbars"
import { useState } from "react"



const Page = ()=>{
const [count,setCount] = useState(0)
const [nameAbunga,setNameAbunga] = useState({
    name:''
})

const increment = ()=>{
    setCount(count+1)
    setNameAbunga({
        name:nameAbunga.name+count.toString()
    })
}

    return <div>
        <BlueNavBar/>
        <h1>Index PAGE</h1>
<p>count value: {count}</p>
<button onClick={increment}>Increment</button>
<p>{nameAbunga.name}</p>
    </div>
}

export default Page

