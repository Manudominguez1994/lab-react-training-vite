export default function Rating(props){
        const {children} = props
        let result = Math.round(children)
        let star = '★'.repeat(result)
        let noStar ='☆'.repeat(5 - result)
    return(
        <div>
            <p>{star}{noStar}</p>
        </div>
    )
}