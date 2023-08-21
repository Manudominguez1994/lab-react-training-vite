export default function Random(props){
    const {min,max}=props
    const result = Math.floor( Math.random()*(max - min) + min )
    return(
        <div>
            <h4>Random value between {min} and {max} = {result}</h4>
        </div>
    )
}