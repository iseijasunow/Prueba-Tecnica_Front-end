export function Searcher({login='desconocido', id='xxxxxxx', avatar, url}) {
    return (
        <article className='us-search-card searcher-input'>
            <div>
                <input type="text" />
            </div>
            <div>
                <button>Buscar</button>
            </div>
      </article>
    )
}