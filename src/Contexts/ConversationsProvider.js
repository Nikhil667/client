import React, { createContext, useContext } from 'react'
import useLocalStorage from '../CustomHooks/useLocalStorage'
import { useContacts } from './ContactProvider';

const ConversationsContext = createContext()

export function useConversations(){
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ children }) {

  const[conversations, setConversations] = useLocalStorage('conversations', [])
  const { contacts } = useContacts()
  
  function createConversation(recipients){
    setConversations(prev => {
      return [...prev, {recipients, message: []}]
    })
  }

  const formattedConversation = conversations.map(ele => {
    const recipients = ele.recipients.map(rec => {
      const contact = contacts.find(con => {
        return con.id === rec
      })
      const name = (contact && contact.name) || rec
      return { id : rec, name }
    })
    return { ...conversations, recipients}
  })

  const value = {
    conversations: formattedConversation, 
    createConversation 
  }

  return (
    <ConversationsContext.Provider value={value} >
      {children}
    </ConversationsContext.Provider>
  )
}
