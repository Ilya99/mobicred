import React, { Component } from 'react'
import { Row, Container } from 'reactstrap'
import dev from 'global/images/dev.jpg'
import './Companies.styl'

export default class Companies extends Component {
  render () {
    return (
      <Container>
        <Row className='comp justify-content-center'>FEATURED COMPANIES</Row>
        <Row className='justify-content-center'>
          <img className='marka' src={dev} />
          <img className='marka' src={dev} />
          <img className='marka' src={dev} />
          <img className='marka' src={dev} />
          <img className='marka' src={dev} />
          <img className='marka' src={dev} />
        </Row>
      </Container>
    )
  }
}
