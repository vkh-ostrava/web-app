import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { H2, Behind, Infront, Container } from '../styles/style'
import { Wrapper } from './WordpressPage.styled'

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
    <Behind style={{ paddingTop: '300px' }}>
      <Infront>
        <Container>
          <H2>{title}</H2>
          {pagePost === {} ? (
            'Loading'
          ) : (
            <Wrapper>
              <div dangerouslySetInnerHTML={{ __html: pagePost }} />
            </Wrapper>
          )}
        </Container>
      </Infront>
    </Behind>
  )
}
