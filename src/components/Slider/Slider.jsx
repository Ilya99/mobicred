import React from 'react'
import { Container, UncontrolledCarousel } from 'reactstrap'

const items = [
  {
    src: 'http://www.certtech.com/wp-content/uploads/2014/06/3dMedical-1600-x-300.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'http://ribroomneworleans.com/site2013/wp-content/uploads/2013/05/RRtitlebg-1600x300.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://d3lut3gzcpx87s.cloudfront.net/image_encoded/aHR0cHM6Ly9zaWxrc3RhcnQuczMuYW1hem9uYXdzLmNvbS8xYjNlZDY5Mi0yZDMwLTRlMzgtN2Y4YS1kMzY4MDg0ZGQ1NTgucG5n/1600x300',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
]

const Example = () => <Container><UncontrolledCarousel items={items} /></Container>

export default Example
