import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Header from 'components/Header/Header'
import Slider from 'components/Slider/Slider'
import Work from 'components/Work/Work'
import Companies from 'components/Companies/Companies'
import Testimonials from 'components/Testimonials/Testimonials'
import Contact from 'components/Contact/Contact'
import Footer from 'components/Footer/Footer'

export default class App extends Component {
  render () {
    return (
      <Container fluid>
        <Header />
        <Slider />
        <Work />
        <Companies />
        <Testimonials />
        <Contact />
        <Footer />
      </Container>
    )
  }
}
