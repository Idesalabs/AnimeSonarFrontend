import Navbars,{BlueNavBar} from "../components/Navbars"

const List = ()=>{
    return <ul>
        <li>ee1</li>
        <li>ee2</li>
        <li>ee3</li>
        <li>dddee4</li>
        <li>ee5</li>
    </ul>
}


const Page = () => {
return <div>
     <Navbars.BlueNavBar/>
     <BlueNavBar/>
    <h1>Coming Soon</h1>
    <List/>
</div>
}

export default Page