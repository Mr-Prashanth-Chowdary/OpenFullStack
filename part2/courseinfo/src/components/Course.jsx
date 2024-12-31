import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({course}) =>{
    return(
        <>
        {course.map((course) => {
        const total = course.parts.reduce((acc,crr)=>(acc+crr.exercises),0)
        return (
        <section key={course.id}>
            <Header name={course.name} />
        {course.parts.map((part) =>
            <Content  key={part.id} id={part.id} name={part.name} exercises={part.exercises}/>
        )}
            <Total total={total}/>
        </section>
        )
        })}
        </>
    )
}
export default Course;