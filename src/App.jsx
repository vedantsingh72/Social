
import Head from "./Components/header";
import Foot from './Components/footer';
import Side from "./Components/side";
import Post from "./Components/Post";
import PostList from "./Components/Postlist"
import PostDataProvider from "./Components/store/Card-store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App(){
 const[tab,setTab]=useState("Home");
 const change=(a)=>{
    setTab(a);
 }

  return (

  <PostDataProvider>
    < div className="App" style={{display:"flex",flex:"column"}} >
    <div className="App1"><Side click={change} tab={tab}></Side></div>

    <div className="App2" >
    <Head ></Head>
     <div style={{height:"76%"}}>{tab==="Home"? <PostList></PostList>: <Post change={change}></Post>}</div>
    
    <Foot></Foot>
    </div>
  
  </div>
  </PostDataProvider>
  );
}


export default App;