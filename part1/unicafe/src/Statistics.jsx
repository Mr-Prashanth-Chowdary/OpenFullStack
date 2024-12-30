import StatisticLine from "./StatisticLine"

const Statistics = (props) =>{
    const {good, neutral,bad} = props.value
    const total = good+neutral+bad
    const average = ((good*1)+(neutral*0)+(bad*-1))/total
    const positive = (good/total)*100
    return(
        <>
        <h2>Statistics</h2>
        {total === 0 ? (<p>No feedback is given</p>) : (<>
        <table>
            <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={positive}/>
            </tbody>
        </table>
        </>)}
        </>
    )
}
export default Statistics;