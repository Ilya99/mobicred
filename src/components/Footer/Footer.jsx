import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import './Footer.styl'
import { FacebookIcon, TwitterIcon, LinkedinIcon, PinterestIcon, TelegramIcon } from 'react-share'

export default class Footer extends Component {
  render () {
    return (
      <Container>
        <Row className='icon justify-content-center'>
          <FacebookIcon size={45} round />
          <TwitterIcon size={45} round />
          <LinkedinIcon size={45} round />
          <PinterestIcon size={45} round />
          <TelegramIcon size={45} round />
        </Row>
        <p className='copy'>© 2016 SiteName - all rights reserved</p>
      </Container>
    )
  }
}
