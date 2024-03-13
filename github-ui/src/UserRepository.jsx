export function UserRespository({name, description, language}) {
    function CodeIcon() {
        return(
            <i className="bi bi-code-slash"></i>
        )
    }
    

    return (
        <div className="repository-cart">
            <div>
                <strong>{name}</strong>
                <span>{description}</span>
            </div>
            <div>
                <span>{(language) ? <CodeIcon /> : null} {language}</span>
            </div>
        </div>
    )
}