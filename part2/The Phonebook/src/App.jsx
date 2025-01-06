import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import api from './Services/data'


const App = () => {
  const [persons, setPersons] = useState([]) 
const [newName, setNewName] = useState('')
const [number, setNumber] = useState('')
const [filterText, setFilterText] = useState('')

const handleFilterChange=(event)=>{
  setFilterText(event.target.value)
}
const handleNameChange=(event)=>{
  setNewName(event.target.value)
}
const handleNumberChange=(event)=>{
  setNumber(event.target.value)
}
// fetching(get) data from the json server
useEffect(()=>{
  api.get().then((data)=>setPersons(persons.concat(data)))
},[])

const onSubmit=(event)=>{
    event.preventDefault()
    const isDuplicate = persons.find((person)=>person.name === newName)
    if(isDuplicate){
      if(window.confirm(`${isDuplicate.name} is already added to phonebook, replace the old number with new number`)){
      const changeNode = {...isDuplicate,number:number}
      // updating(put) the number
      api.put(isDuplicate.id,changeNode).then((data)=>setPersons(persons.map((person)=>person.id === isDuplicate.id ? data : person)))
      }
    }
    else{
    // Adding(add) to json database 
    const newObj = {name : newName,number : number}
    api.add(newObj).then((data)=>setPersons(persons.concat(data)))
  }
  setNewName('')
  setNumber('') 
}
// deleting(delete) the data from json server
const onDelete = (id,name) =>{
  if(window.confirm(`would you like to delete ${name}`)){
  api.del(id)
    .then((data)=>console.log("the id",data.id,"have been deleted"))
    .catch((err)=>console.log("error while deleting the data",err))
  setPersons((persons)=>{
   return persons.filter((person)=>person.id !== id);
  })
  }
}
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterText} onChangeHandle={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm onsubmitHandle={onSubmit} nameValue={newName} onChangeHandleName={handleNameChange} numberValue={number} onChangeHandleNumber={handleNumberChange}/>
      <h2>Numbers</h2> 
      <Persons filterText={filterText} personsData={persons} handleDelete={onDelete}/>
    </div>
  )
}

export default App
