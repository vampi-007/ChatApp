import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WaitingRoom from "./components/WaitingRoom";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import ChatRoom from "./components/ChatRoom";

function App() {
    const [conn, setConnection] = useState();
    const [messages, setMsgs] = useState([]);
    
    const joinChatRoom = async (username, chatroom) => {
        try {
            const conn = new HubConnectionBuilder()
                .withUrl("https://10.211.55.6:7089/Chat")
                .configureLogging(LogLevel.Information)
                .build();
                
            conn.on("JoinSpecificChatRoom", (username, msg) => {
                console.log("msg: ", username, msg);
            });

            conn.on("ReceiveSpecificMessage", (username, msg) => {
                setMsgs(messages => [...messages, { username, msg }]);
            });

            await conn.start();
            await conn.invoke("JoinSpecificChatRoom", { username, chatroom });

            setConnection(conn);
        } catch (e) {
            console.log(e);
        }
    };

    const sendMessage = async (message) => {
        try {
            await conn.invoke("SendMessage", message);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <main>
                <Container>
                    <Row>
                        <Col>
                            <h1>Welcome its Talk Time!!</h1>
                        </Col>
                    </Row>
                    {!conn ? (
                        <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
                    ) : (
                        <ChatRoom messages={messages} sendMessage={sendMessage} />
                    )}
                </Container>
            </main>
        </div>
    );
}

export default App;
