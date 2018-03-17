import React, { Component } from 'react'
import { Container, Form, FormGroup, Input, Button, Row, Col } from 'reactstrap'
import './Contact.styl'

export default class Contact extends Component {
  render () {
    return (
      <Container className='contact'>
        <Row>
          <Col xs={6} md={9} xl={8}>
            <div className='drop'>DROP US A LINE</div>
            <Form className='input'>
              <FormGroup>
                <Input type='name' name='name' id='exampleName' placeholder='Name' />
              </FormGroup>
              <FormGroup>
                <Input type='email' name='email' id='exampleEmail' placeholder='Email' />
              </FormGroup>
              <FormGroup>
                <Input type='textarea' name='text' id='exampleText' placeholder='Message' />
              </FormGroup>
            </Form>
            <Button className='send'>Send</Button>
          </Col>
          <Col md={3} xl={4} className='loc'>
            <div className='visit'>VISIT OUR OFFICE</div>
            <p>New York</p>
            <p>5 Park Avenue<br />New York, NY 10016<br />USA</p>
            <p>+1 718.242.5555<br />+1 718.242.5556<br />ny@jobseek.com</p>
            <p>Mon-Fri 9am - 5pm<br />Sat 10am - 2pm<br />Sun Closed</p>
          </Col>
        </Row>
      </Container>
    )
  }
}
