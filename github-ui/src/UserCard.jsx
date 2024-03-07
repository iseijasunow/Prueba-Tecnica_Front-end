import { useState } from 'react'


export function UserCard({login='desconocido', id='xxxxxxx', isFocus = false, onClick}) {

    const cardClassName = isFocus
    ? 'us-card-focus us-card'
    : 'us-card'

    const handleChildClick = () => {
        onClick(id);
      };

    return (
        <div className={cardClassName} onClick={handleChildClick}>
            <div>
                <img className='us-card-avatar'
                    src="https://unavatar.io/instagram/willsmith" alt="img" />
            </div>
            <div>
                <strong>{login}</strong>
                <span>#{id}</span>
            </div>
      </div>
    )
}