import { useState } from "react"

export function TwitterFollowCard ({formatUserName, initialIsfollowing,userName, name}){
    const [isFollowing, setIsFollowing] = useState(initialIsfollowing)

    const imgSrc = `https://unavatar.io/${userName}`
    //const addAt = (userName) =>`@${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
    <article className='tw-followCard'>
            <header className='tw-followCard-header' >
                <img className='tw-followCard-avatar' alt="El avatar de andrea melero" src={imgSrc} ></img>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}