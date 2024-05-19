import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

const WaitingRoom =  ({joinChatRoom})=> {
    const [username, setUsername] = useState('')
    const [chatroom, setChatroom] = useState()
  return (
    <Container style={{justifyContent:"center"}}>
        <Form onSubmit={
            e => {
                e.preventDefault()
                joinChatRoom(username, chatroom)
            }
        }>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>user name</Form.Label>
        <Form.Control type="text" placeholder="Enter user name" />
        <Form.Text className="text-muted">
          user name must be unique.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Chat Room</Form.Label>
        <Form.Control type="text" placeholder="Enter Chat Room" />
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
}

export default WaitingRoom;


