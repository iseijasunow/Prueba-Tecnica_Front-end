import { useState } from 'react'

export function Searcher({onClick}) {
    const [searchTerm, setSearchTerm] = useState('')
    const [validate, setValidate] = useState('')


    const handleInputChange = (event) => {
        setValidate('')
        setSearchTerm(event.target.value);
    };
    
    const handleSearcherClick = () => {
        if(searchTerm.length < 4){
            setValidate('4 minimum characters')
        } else if (searchTerm === 'iseijasunow') {
            setValidate('Search not allowed')
        }else{
            onClick(searchTerm)
        }
    };

    function ValidateTemple () {
        return (
            <span className='searcher-validation'> <i className="bi bi-exclamation-circle-fill"></i> {validate}</span>
        )
    }

    return (
        <article className='us-search-card searcher-input' style={{position: 'relative'}}>
            <div>
                <input placeholder='Search' type="text" value={searchTerm} onChange={handleInputChange} />
                {(validate) ? <ValidateTemple /> : null}
            </div>
            <div>
                <button onClick={handleSearcherClick}><i className="bi bi-search"></i></button>
            </div>
      </article>
    )
}