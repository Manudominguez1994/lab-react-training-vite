export default function BoxColor(props){
    console.log(props);
    const{r,g,b} = props
    const BoxStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
    }
    return(
        <div style={BoxStyle}>
           rgb({r},{g},{b})
        </div>
    )
}