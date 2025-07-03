import { ClockIcon, FacebookIcon, GoogleIcon, InstagramIcon, LocationIcon, SendIcon, TwitterIcon, UserIcon } from "../svg";

export function AboutUser({ user }) {
    function stringAvatar(name = '') {
        const parts = name.trim().split(' ')
        const first = parts[0]?.[0] || ''
        const second = parts[1]?.[0] || ''
        return {
            children: `${first}${second}`.toUpperCase()
        }
    }
    return (
        <section className="about-user flex">
            <div className="user-profile flex">
                {
                    !user.imgUrl ?
                        <div className="user-profile-no-img flex" >{stringAvatar(user.fullname).children}</div>
                        : <img src={user.imgUrl} alt="" />

                }
                <h2>{user.fullname}</h2>
                <div className="user-details">

                    <ul>
                        <li>
                            <LocationIcon />  Located in {user.located}
                        </li>
                        <li>
                            <UserIcon />Joined in May 2025
                        </li>
                        <li>
                            <ClockIcon />  Avg. Response Time: 1 hour
                        </li>
                        <li>
                            <SendIcon /> Last Delivery: 4 hours
                        </li>

                    </ul>
                </div>
            </div>
            <div className="user-extra-info">
                <ul>
                    <li>
                        <h2>Description</h2>
                        <p>{user.description}</p>

                    </li>
                    <li>
                        <h2> Languages</h2>
                        <p>
                            {(user.languages || []).map((language, idx) => <div key={idx}>{language}</div>)}
                        </p>

                    </li>
                    <li>
                        <h2>Linked Accounts</h2>

                        <div className="linked-accounts flex">
                            <span><FacebookIcon />Facebook</span>
                            <span><InstagramIcon />Instagram</span>
                            <span><TwitterIcon />Twitter</span>
                            <span><GoogleIcon />Google</span>
                        </div>
                    </li>
                    <li className="skills ">
                        <h2>Skills</h2>
                        <p className="s">
                            {(user.skills || []).map((skill, idx) => <span key={idx}>{skill}</span>)}
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}