import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts} from '../Contexts/ContactProvider'
import { useConversations } from '../Contexts/ConversationsProvider'

export default function NewConversationModal({ closeModal }) {

  const [selectedContactsId, setSelectedContactsId] = useState([])
  const { contacts } = useContacts()
  const { createConversation } = useConversations()

  function handleSubmit(e){
    e.preventDefault()

    createConversation(selectedContactsId)
    closeModal()
  }

  function handleCheckboxChange(contactId){
    setSelectedContactsId(prevSelectedContactId => {
      if (prevSelectedContactId.includes(contactId)){
        return prevSelectedContactId.filter(ele => {
          return contactId !== ele
        })
      } else {
        return [...prevSelectedContactId, contactId]
      }
    })
  }

  return (
    <>
      <Modal.Header closeButton>
        Create Conversation
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          { contacts.map((ele) => (
            <Form.Group controlId={ele.id} key={ele.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactsId.includes(ele.id)}
                label={ele.name}
                onChange={() => handleCheckboxChange(ele.id)}
              />
            </Form.Group>
          )) }
          <Button type='submit' className='mt-3'>Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}
