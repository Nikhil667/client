import React from 'react'
import { useConversations } from '../Contexts/ConversationsProvider'
import { ListGroup } from 'react-bootstrap'

export default function Contacts() {

  const { conversations } = useConversations()

  return (
    <ListGroup variant='flush'>
      {conversations.map((ele, index) => (
        <ListGroup.Item key={index}>
          {ele.recipients.map(r => r.name).join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}