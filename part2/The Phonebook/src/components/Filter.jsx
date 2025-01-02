const Filter = ({value,onChangeHandle })=> {
    return(
        <>
        filter shown with  <input value={value} onChange={onChangeHandle} type="text" />
        </>
    )
}
export default Filter 