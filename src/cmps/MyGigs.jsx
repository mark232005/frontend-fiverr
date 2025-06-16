// export function MyGigs({ gigs }) {
//     return (
//         <section className="my-gigs">
//             <h2>Active gigs</h2>
//             <table>
//                 <thead>
//                     <tr >
//                         <th>GIG</th>
//                         <th>PRICE</th>
//                         <th>REVIEWS</th>
//                         <th>CLICKS</th>
//                         <th>ORDERS</th>
//                         <th>STATUS</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         gigs.map(gig => (
//                             <tr key={gig._id}>
//                                 <td>
//                                     <input type="checkbox" />
//                                     <img src={gig.imgUrl} alt="" />
//                                     <p className="ellipsis">{gig.title}</p>
//                                 </td>
//                                 <td>
//                                     {gig.price}$
//                                 </td>
//                                 <td>
//                                     {gig.reviews?.length || 0}
//                                 </td>
//                                 <td>
//                                     200
//                                 </td>
//                                 <td>
//                                    3
//                                 </td>
//                                 <td>
//                                    <button className="status">{gig.status}</button>
//                                 </td>
//                                 <td>
//                                     <button className="remove-btn">Remove</button>
//                                 </td>
//                                 <td>
//                                     <button className="update-btn">Update</button>
//                                 </td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>

import { useState } from "react";
import {  CaretDownIcon } from "../svg";
import { useNavigate } from 'react-router'


//             </table>
//         </section>
//     )
// }

export function MyGigs({ gigs ,onRemove }) {
    const [showActivity, setShowActivity] = useState('')
    const navigate = useNavigate()

    return (
        <section className="my-gigs">
            <h1>Gigs</h1>
            <ul class="tabs">
                <li className="active">ACTIVE</li>
                <li >PENDING APPROVAL</li>
                <li>REQUIRES MODIFICATION</li>
                <li>DRAFT</li>
            </ul>
            <table>
                <thead>
                    <tr>
                        <td className="title">Active Gigs</td>
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
                                <td><img src={gig.imgUrl} alt="" /></td>
                                <td className="title"><a href={`/gig/${gig._id}`}>{gig.title}</a></td>
                                <td> 0 </td>
                                <td> 0 </td>
                                <td> 0 </td>
                                <td> </td>
                                <td>  </td>
                                <td className="relative caret-down" > <button onClick={()=>setShowActivity(gig._id)} className="caret-down-btn"><CaretDownIcon /></button>
                                    {showActivity === gig._id &&
                                        <ul className="list-act">
                                            <li onClick={()=>navigate(`/gig/${gig._id}`)}>PREVIEW</li>
                                            <li>EDIT</li>
                                            <li>PAUSE</li>
                                            <li>SHARE</li>
                                            <li onClick={()=>onRemove(gig._id)}>DELETE</li>
                                            <li>ADD VIDEO</li>
                                        </ul>

                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}
