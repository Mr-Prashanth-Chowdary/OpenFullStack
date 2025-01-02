const PersonForm = ({onsubmitHandle,nameValue,onChangeHandleName,numberValue,onChangeHandleNumber})=>{
    return(
    <>
      <form onSubmit={onsubmitHandle}>
        <div>
          name: <input value={nameValue} onChange={onChangeHandleName} placeholder='enter the name'/><br/>
          number: <input value={numberValue} onChange={onChangeHandleNumber} placeholder='enter the mobile number'/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
    )
}
export default PersonForm;