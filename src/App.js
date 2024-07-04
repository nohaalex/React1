import logo from './logo.svg';
import './App.css';
import Header,{name} from './components/Header';
import Body from './components/Body';
import ClassComp from './components/ClassComp';
import SampleClassComponent from './components/Lifecycle_events/sample';
import Main_page from './components/Lifecycle_events/Main_page';
import Timer from './components/Lifecycle_events/Timer';

function Checked(){
  return(
    <h3>Checked In!!!
    </h3>
  )
}

function NotChecked(){
  return(
    <h1>Not Checked In!!</h1>
  )
}

export default function App(props) {
  const name=props.name;
  const checkin=props.checkin;
  const justhi=(text)=>{alert(`Hello Technopark from ${text}`)};
  // if(checkin){
  //   return <Checked/>
  // }
  // else
  // {return <NotChecked/>}
  return (
    <div className="App">
      {/* <Header/>
      <button onClick={()=>justhi(name)}>Just Hi</button> */}
      <div>

        {/* <SampleClassComponent/> */}
       
         <Main_page/> 
         
        {/* <Body/> */}
        {/* <ClassComp  carName={"Mercedes"}/>  */}
        </div>

    </div>
    
  );
}


