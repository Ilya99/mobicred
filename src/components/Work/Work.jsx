import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import './Work.styl'
import video from 'global/video/video_test.mp4'
import img from 'global/images/dev.jpg'

export default class Work extends Component {
  render () {
    return (
      <Container id='work'>
        <div className='work'>HOW WE WORK</div>
        <Row>
          <Col md={6}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque molestias, quae expedita labore, quo autem adipisci dolorum quis repudiandae numquam sequi voluptatibus ipsam, corporis cum? Delectus odit illo voluptatem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque molestias, quae expedita labore, quo autem adipisci dolorum quis repudiandae numquam sequi voluptatibus ipsam, corporis cum? Delectus odit illo voluptatem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque molestias, quae expedita labore, quo autem adipisci dolorum quis repudiandae numquam sequi voluptatibus ipsam, corporis cum? Delectus odit illo voluptatem.</p>
          </Col>
          <Col md={6}>
            <video className='video' controls='controls' poster={img} src={video} />
          </Col>
        </Row>
      </Container>
    )
  }
}
