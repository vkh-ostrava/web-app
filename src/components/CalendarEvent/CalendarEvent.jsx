import React from 'react'
import CalendarOctagon from './CalendarOctagon'
import colors from '../../styles/colors'
import {
  Title,
  Time,
  Card,
  TextContainer,
  SocialContainer,
} from './CalendarEvent.styled'
import { CalendarIcon } from '../icons/CalendarIcon'
import { FacebookIcon } from '../icons/FacebookIcon'

export function CalendarEvent(props) {
  const event = props.event
  console.log(props.reverse)
  if (event.description) {
    event.fb = event.description.match(
      /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/\S[^"]*/
    )
    event.description = event.description.replace(
      /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/\S[^"]*/g,
      ''
    )
    event.description = event.description.replace(/<\/?[^>]+(>|$)/g, '')
  }
  console.log(event)
  let color = colors.EVENTS.FUN

  const showLocation = () => {
    if (event.location) {
      if (!event.location.toLowerCase().includes('pustkovec')) {
        return <p style={{ color: 'red' }}> Zmena mista - {event.location}</p>
      }
    }
    return
  }

  const parseDate = date => {
    const optionsShort = { day: 'numeric', month: 'long' }
    const optionsLong = {
      minute: 'numeric',
      hour: 'numeric',
      day: 'numeric',
      month: 'long',
    }
    const options = date.length > 10 ? optionsLong : optionsShort
    return new Date(Date.parse(date)).toLocaleDateString('cs-cz', options)
  }
  const date = event.start.dateTime
    ? parseDate(event.start.dateTime)
    : parseDate(event.start.date)

  const talk = ['přednáška', 'přednášející', 'přednášky']
  const fun = ['zábavný program', 'bowling', 'hry', 'zábava', 'sranda']
  const pray = ['duchovní program', 'modlitba', 'adorace']

  if (new RegExp(fun.join('|')).test(event.description.toLowerCase()))
    color = colors.EVENTS.FUN
  if (new RegExp(talk.join('|')).test(event.description.toLowerCase()))
    color = colors.EVENTS.TALK
  if (new RegExp(pray.join('|')).test(event.description.toLowerCase()))
    color = colors.EVENTS.PRAY
  console.log(color)
  return (
    <Card reverse={props.reverse}>
      <CalendarOctagon ratio={1.2} color={color.PRIMARY} type={color.DESC} />
      <TextContainer color={color.LIGHT} key={event.id} reverse={props.reverse}>
        <div>
          <Title color={color.PRIMARY}> {event.summary}</Title>
          <Time>{date} </Time>
          {event.description && <p> {event.description}</p>}
          {showLocation()}
        </div>
        <SocialContainer reverse={props.reverse}>
          <CalendarIcon href={event.htmlLink} />
          {event.fb && <FacebookIcon href={event.fb} />}
        </SocialContainer>
      </TextContainer>
    </Card>
  )
}
