const Persons = ({filterText,personsData,handleDelete})=>{
    const filterdData = personsData.filter((person)=>
    person.name.toLowerCase().includes(filterText.toLowerCase())
    )
    return(
        <>
            {filterText.length <= 0 ? 
                personsData.map((person,i)=><p key={i}>{person.name} {person.number} <button onClick={()=>handleDelete(person.id,person.name)}>delete</button></p>) :
                filterdData.map((person,i)=><p key={i}>{person.name} {person.number} <button onClick={()=>handleDelete(person.id,person.name)}>delete</button></p>)
            }
        </>
    )
}
export default Persons