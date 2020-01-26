import Navbars from "../../components/Navbars"

const margin = {
     marginTop: 20
}

const IntroText = () => {
     return <div>
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et unde nemo culpa?</p>
     </div>
}

const Features = () => {
     return <div>
          <h1>Features</h1>
          <img src="" alt="Intuitive-tag-feature"/>
          <img src="" alt="Mood-selector-feature"/>
     </div>
}


const Page = () => {
return <div>
     <Navbars.BlueNavBar/>
     <IntroText/>
     <Features/>
</div>
}

export default Page