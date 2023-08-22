function Greetings ({ lang, children } ) {

    let greeting;
    if(lang === "en") {
        greeting = "Hello"
    }
    else if (lang === "es")
        greeting === "Hola"
    return (
        <div className="greetings">
            <h3>{greeting} {children}</h3>
        </div>
    )
}

export default Greetings