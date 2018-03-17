import React, { Component } from 'react'
import {
  Row,
  Col,
  Button,
  Carousel,
  Container,
  CarouselItem,
  CarouselIndicators
} from 'reactstrap'
import './Testimonials.styl'

const items = [
  {
    id: 1,
    caption: 'John Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque molestias, quae expedita labore, quo autem adipisci dolorum quis repudiandae numquam sequi voluptatibus ipsam, corporis cum? Delectus odit illo voluptatem.'
  },
  {
    id: 2,
    caption: 'John Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque molestias, quae expedita labore, quo autem adipisci dolorum quis repudiandae numquam sequi voluptatibus ipsam, corporis cum? Delectus odit illo voluptatem.'
  },
  {
    id: 3,
    caption: 'John Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque molestias, quae expedita labore, quo autem adipisci dolorum quis repudiandae numquam sequi voluptatibus ipsam, corporis cum? Delectus odit illo voluptatem.'
  }
]

export default class Testimonials extends Component {
  state = {
    activeIndex: 0
  };

  onExiting = () => {
    this.animating = true
  }

  onExited = () => {
    this.animating = false
  }

  next = () => {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous = () => {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex = newIndex => {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render () {
    const { activeIndex } = this.state

    const slides = items.map(item => (
      <CarouselItem
        className='custom-tag'
        tag='div'
        key={item.id}
        onExiting={this.onExiting}
        onExited={this.onExited}
      >
        <div className='text-danger'>
          <div className='text'>{item.text}</div>
          <div className='caption'>{item.caption}</div>
        </div>
      </CarouselItem>
    ))

    return (
      <Container id='testimonials'>
        <Row className='testimonials justify-content-center'>FEW TESTIMONIALS</Row>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
        </Carousel>
        <Row className='start'>
          <Col sm={8} md={8}>Start Building Your Own Profile Now</Col>
          <Col sm={4} md={4}><Button className='started' color='primary'>Get Started</Button></Col>
        </Row>
      </Container>
    )
  }
}
