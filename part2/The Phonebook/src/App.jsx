import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456',},
    { name: 'Ada Lovelace', number: '39-44-5323523',},
    { name: 'Dan Abramov', number: '12-43-234345', },
    { name: 'Mary Poppendieck', number: '39-23-6423122',}
]) 
const [newName, setNewName] = useState('')
const [number, setNumber] = useState('')
const [filterText, setFilterText] = useState('')
const handleNameChange=(event)=>{
    setNewName(event.target.value)
}
  const handleNumberChange=(event)=>{
    setNumber(event.target.value)
}
const onSubmit=(event)=>{
    event.preventDefault()
    
    const isDuplicate = persons.some((person)=>person.name === newName)
    
    if(isDuplicate){
      return alert(`username ${newName} is already added to phonebook`)
    }
    const newObj = {
      name : newName,
      number : number
    }
    setPersons(persons.concat(newObj))
    setNewName('')
    setNumber('') 
}
const handleFilterChange=(event)=>{
  setFilterText(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterText} onChangeHandle={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm onsubmitHandle={onSubmit} nameValue={newName} onChangeHandleName={handleNameChange} numberValue={number} onChangeHandleNumber={handleNumberChange}/>
      <h2>Numbers</h2> 
      <Persons filterText={filterText} personsData={persons}/>
    </div>
  )
}

export default App
