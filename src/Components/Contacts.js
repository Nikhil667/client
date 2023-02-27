import React from 'react'
import { useContacts } from '../Contexts/ContactProvider'
import { ListGroup } from 'react-bootstrap'

export default function Contacts() {

  const { contacts } = useContacts()

  return (
    <ListGroup variant='flush'>
      {contacts.map(ele => (
        <ListGroup.Item key={ ele.id }>
          {ele.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
