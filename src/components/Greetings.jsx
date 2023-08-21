export default function Greetings(props){
    // console.log(props);
    const {lang, children} = props;
    let saludo = '';
    if(lang === "de"){
        saludo = `Hallo ${children}!`
    }else if(lang === "en"){
        saludo = `Hello ${children}!`
    }else if(lang === "es"){
        saludo = `¡Hola ${children}!`
    }else if(lang === "fr"){
        saludo = `Bonjour ${children}!`
    }
    return(
        <div>
            <h3>{saludo}</h3>
        </div>
    )
}