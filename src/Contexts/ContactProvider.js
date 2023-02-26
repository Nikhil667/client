import React, { createContext, useContext } from 'react'
import useLocalStorage from '../CustomHooks/useLocalStorage'

const ContactContext = createContext()

export function ContactProvider({ children }) {

  const[contacts, setContacts] = useLocalStorage('contacts', [])
  
  function createContact(id, name){
    setContacts(prev => {
      return [...prev, {id, name}]
    })
  }

  return (
    <ContactContext.Provider value={{ contacts, createContact }} >
      {children}
    </ContactContext.Provider>
  )
}
