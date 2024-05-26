import { useState } from "react";
import { Button, Container, Form} from "react-bootstrap";

const WaitingRoom = ({ joinChatRoom }) => {
  const [username, setUsername] = useState("");
  const [chatroom, setChatroom] = useState("");
  return (
    <Container style={{ justifyContent: "center" }}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          joinChatRoom(username, chatroom);
          console.log(username, chatroom,"From Waiting Room")
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control onChange={(e)=>setUsername(e.target.value) } value={username} type="text" placeholder="Enter User Name" />
          <Form.Text className="text-muted">
            user name must be unique.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Chat Room</Form.Label>
          <Form.Control onChange={(e)=>setChatroom(e.target.value) } value={chatroom} type="text" placeholder="Enter Chat Room" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Let's Chat
        </Button>
      </Form>
    </Container>
  );
};

export default WaitingRoom;
