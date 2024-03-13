export function UserCard({
    login='UnknowUser', 
    id='xxxxxxx', 
    avatar='https://unavatar.io/instagram/willsmith', 
    isFocus = false, 
    onClick}) {

    const cardClassName = isFocus
        ? 'us-card-focus us-card'
        : 'us-card'

    const handleChildClick = () => {
        onClick(id)
      };

    return (
        <div className={cardClassName} onClick={handleChildClick}>
            <div>
                <img className='us-card-avatar'
                    src={avatar} alt="not found" />
            </div>
            <div>
                <strong>{login}</strong>
                <span>#{id}</span>
            </div>
        </div>
    )
}