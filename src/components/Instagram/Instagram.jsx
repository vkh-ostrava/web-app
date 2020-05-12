import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Image, ImageWrapper } from './Instagram.styled'
import { H2, Cell, Container, Column, Row } from '../../styles/style'

export default function Instagram() {
  const [photos, setPhotos] = useState([])
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = 'https://www.instagram.com/vkhostrava/'
        const response = await axios.get(URL)
        const instagramRegExp = new RegExp(
          /<script type="text\/javascript">window\._sharedData = (.*);<\/script>/
        )
        const json = JSON.parse(response.data.match(instagramRegExp)[1])
        const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
          0,
          8
        )
        const fetchedPhotos = edges.map(({ node }) => {
          return {
            url: `https://www.instagram.com/p/${node.shortcode}/`,
            thumbnailUrl: node.thumbnail_src,
            displayUrl: node.display_url,
            caption: node.edge_media_to_caption.edges[0].node.text,
          }
        })
        setPhotos(fetchedPhotos)
      } catch (e) {
        console.error('Fetching Instagram photos failed', e)
      }
    }
    fetchData()
  }, [])

  const getGrid = () => {
    return (
      <Row>
        {photos.map(photo => {
          return (
            <Column xs={12} md={6} lg={3} key={photo.url}>
              <ImageWrapper>
                <Image src={photo.displayUrl} />
                <div>
                  <a href={photo.url} target="_blank" rel="noopener noreferrer">
                    {photo.caption}
                  </a>
                </div>
              </ImageWrapper>
            </Column>
          )
        })}
      </Row>
    )
  }

  const getSlider = () => {
    return (
      <Slider {...settings}>
        {photos.map(photo => {
          return (
            <Cell key={photo.url}>
              <a href={photo.url} target="_blank" rel="noopener noreferrer">
                <Image src={photo.displayUrl} />
              </a>
            </Cell>
          )
        })}
      </Slider>
    )
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <Container style={{ padding: '2rem 0' }}>
      <H2>Instagram</H2>
      {isDesktopOrLaptop ? getGrid() : getSlider()}
    </Container>
  )
}
