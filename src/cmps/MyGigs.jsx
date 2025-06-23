import { useState } from "react";
import { CaretDownIcon } from "../svg";
import { useNavigate } from 'react-router'
import { getRandomIntInclusive } from "../services/util.service";

export function MyGigs({ gigs, onRemove }) {
    const [showActivity, setShowActivity] = useState('')
    const navigate = useNavigate()

    return (
        <section className="my-gigs">
            <h1>Gigs</h1>
            <ul className="tabs">
                <li className="active select">ACTIVE</li>
                <li >PENDING APPROVAL</li>
                <li>REQUIRES MODIFICATION</li>
                <li>DRAFT</li>
            </ul>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2" className="title">ACTIVE GIGS</th>
                        </tr>
                        <tr>
                            <td className="f">
                                <input type="checkbox" />
                            </td>
                            <td>
                                GIG
                            </td>
                            <td>
                            </td>
                            <td>
                                IMPRESSIONS
                            </td>
                            <td>
                                CLICKS
                            </td>
                            <td>
                                ORDERS
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            gigs.map(gig => (
                                <tr key={gig._id}>
                                    <td className="checkbox"><input type="checkbox" /></td>
                                    <td><img src={gig.imgUrl[0]} alt="" /></td>
                                    <td className="title"><a href={`/gig/${gig._id}`}>{gig.title}</a></td>
                                    <td> {getRandomIntInclusive(1,1000000)} </td>
                                    <td> {getRandomIntInclusive(1,10000)} </td>
                                    <td> {getRandomIntInclusive(1,30)} </td>
                                    <td> </td>
                                    <td>  </td>
                                    <td className="relative caret-down" > <button onClick={() => setShowActivity(gig._id)} className="caret-down-btn"><CaretDownIcon /></button>
                                        {showActivity === gig._id &&
                                            <ul className="list-act">
                                                <li onClick={() => navigate(`/gig/${gig._id}`)}>PREVIEW</li>
                                                <li>EDIT</li>
                                                <li>PAUSE</li>
                                                <li>SHARE</li>
                                                <li onClick={() => onRemove(gig._id)}>DELETE</li>
                                                <li>ADD VIDEO</li>
                                            </ul>

                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </section>
    )
}
