
import { useEffect, useState } from 'react'
import { GigLayout } from '../cmps/GigLayout'
import { gigService } from '../services/gig/gig.service.local.js'
import { useNavigate } from 'react-router'


export function GigCheckout() {



    return (
        <section className='checkout'>
            <section className='payment-container'>
                <section className='billing-info-wrapper'>
                    <header className='billing-info-header'>
                        <h6>Billing Information</h6>
                    </header>
                    <div className='user-details-wrapper'>
                        <p>Your invoice will be issued according to the details listed here</p>
                    </div>

                </section>
                <section className='billing-info-wrapper-payment'>
                    <header className='billing-info-header'>
                        <h6>Payment Options</h6>
                    </header>
                    <section className='payment-options'>
                        <label>
                            <input className='form-check-input'
                                type="radio" name='visa' checked></input>
                            <img src="" alt="" />
                        </label>
                    </section>
                    <form className='credit-card-details-wrapper'>
                        <article className='credit-card-details'>
                            <div className='card-number'>
                                <label>
                                    <h6>Card Number</h6>
                                </label>
                                <label className='cradit-card-input-wrapper'>
                                    <img src="" alt="" />
                                    <input className='input' type="text" placeholder='5326 1000 2000 3000' value="5326-1000-2000-3000" />
                                </label>
                            </div>
                            <div className='card-number'>
                                <span className='expiration-date'>
                                    <label>
                                        <h6>Expiration date</h6>
                                    </label>
                                    <input type="text" className='input' placeholder='MM/YY' value='03/28' />
                                </span>
                                <div className='security-code'>
                                    <label>
                                        <h6>Security code</h6>
                                    </label>
                                    <input type="text" className='input' placeholder='NNN' value='345' />
                                </div>
                            </div>
                            <div className='card'>
                                <div className='first-name'>
                                    <label>
                                        <h6>First name</h6>
                                    </label>
                                    <input type="text" className='input' placeholder='Insert first name' value="Dima" />
                                </div>
                                <div className='last-name'>
                                    <label>
                                        <h6>First name</h6>
                                    </label>
                                    <input type="text" className='input' placeholder='Insert last name' value="Aluf" />
                                </div>
                            </div>
                        </article>
                    </form>
                </section>
            </section>
            <section className='cta-container'>
                <h1>Hello2</h1>
            </section>
        </section>


    )
}