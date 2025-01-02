const Persons = ({filterText,personsData})=>{
    const filterdData = personsData.filter((person)=>
    person.name.toLowerCase().includes(filterText.toLowerCase())
    )
    return(
        <>
            {filterText.length <= 0 ? 
                personsData.map((person,i)=><p key={i}>{person.name} {person.number}</p>) :
                filterdData.map((person,i)=><p key={i}>{person.name} {person.number}</p>)
            }
        </>
    )
}
export default Persons