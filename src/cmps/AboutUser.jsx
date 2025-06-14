import { use } from "react";
import { ClockIcon, FacebookIcon, GoogleIcon, InstagramIcon, LocationIcon, SendIcon, TwitterIcon, UserIcon } from "../svg";

export function AboutUser({ user }) {

    console.log(user);
    return (
        <section className="about-user flex">
            <div className="user-profile flex">
                <img src={user.imgUrl} alt="" />
                <h2>{user.fullname}</h2>
                <p>@{user.username}</p>
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
                        <p>{user.languages.map(language => <div>{language}</div>) || []}</p>

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
                            {user.skills.map(skill => <span>{skill}</span>) || []}
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}