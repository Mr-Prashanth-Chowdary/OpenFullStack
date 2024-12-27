const Content= (props)=>{
return(
    <>
    <p>Part1 : "{props.course.parts[0].name}", No.of Exercises : {props.course.parts[0].exercises} </p>
    <p>Part2 : "{props.course.parts[1].name}", No.of Exercises : {props.course.parts[1].exercises} </p>
    <p>Part3 : "{props.course.parts[2].name}", No.of Exercises : {props.course.parts[2].exercises} </p>   
    </>
)
}
export default Content
