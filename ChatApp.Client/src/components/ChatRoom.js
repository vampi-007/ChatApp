import { Col, Container, Row } from "react-bootstrap";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";

const ChatRoom = ({ messages, sendMessage }) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={10}>
                        <h2>Chat Room</h2>
                    </Col>
                    <Col></Col>
                </Row>
                <Row className="px-5 py-5">
                    <Col sm={12}>
                        <MessageContainer messages={messages} />
                    </Col>
                    <Col sm={12}>
                        <SendMessageForm sendMessage={sendMessage} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ChatRoom;
