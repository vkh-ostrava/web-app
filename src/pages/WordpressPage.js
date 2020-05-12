import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { H2Color, Container } from '../styles/style'
import { Wrapper } from './WordpressPage.styled'
import Footer from '../sections/Footer'

export default function WordpressPage(props) {
  const [pagePost, setPagePost] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://administrace.vkhostrava.cz/wp-json/wp/v2/pages/${props.id}`
      )
      setTitle(result.data.title.rendered)
      setPagePost(result.data.content.rendered)
    }
    fetchData()
  }, [props.id])

  return (
    <>
      <Container style={{ marginBottom: '200px' }}>
        <H2Color>{title}</H2Color>
        {pagePost === {} ? (
          'Loading'
        ) : (
          <Wrapper>
            <div dangerouslySetInnerHTML={{ __html: pagePost }} />
          </Wrapper>
        )}
      </Container>
      <Footer />
    </>
  )
}
