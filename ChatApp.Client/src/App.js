import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import WaitingRoom from './components/WaitingRoom';
import {Container, Row, Col} from "react-bootstrap"
import { useState } from 'react';
import {HubConnection ,HubConnectionBuilder, LogLevel} from "@microsoft/signalr"
function App() {
  const [conn, setConnection] = useState();

  const joinChatRoom = async (username, chatroom)=> {
    try{

      const conn = new HubConnectionBuilder().withUrl("https://10.211.55.6:7089/Chat")
                  .configureLogging(LogLevel.Information)
                  .build();
      conn.on("JoinSpecificChatRoom", (username, msg)=>{
        console.log("msg: ", msg)
      })
      
      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", {username, chatroom})

      setConnection(conn); 
       
    }catch(e){
      console.log(e)
    }
  }

  

  return (
    <div >
      <main>
        <Container>
          <Row>
            <Col>
              <h1>
                Welcome its Talk Time!!
              </h1>
            </Col>
          </Row>
          <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
        </Container>
        
      </main>
    </div>
  );
}

export default App;
