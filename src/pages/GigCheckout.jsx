import { useState } from 'react'
import { GigLayout } from '../cmps/GigLayout'
import { gigService } from '../services/gig/gig.service.local.js'
import { useNavigate } from 'react-router'
import mastercards from '../assets/img/credit-cards.svg'
import vsign from '../assets/img/img-of-v.svg'
import questionMark from '../assets/img/question-mark.svg'
// import visaIcon from '../assets/img/visa.png' // placeholder, update path as needed
// import mastercardIcon from '../assets/img/
// import amexIcon from '../assets/img/amex.png'
// import dinersIcon from '../assets/img/diners.png'
// import discoverIcon from '../assets/img/discover.png'
// import paypalIcon from '../assets/img/paypal.png'
// import gigImg from '../assets/img/profileimg.jpg' // placeholder, update path as needed

export function GigCheckout() {
    const [displayName, setDisplayName] = useState('')
    const [saveCard, setSaveCard] = useState(true)

    return (
        <section className='checkout'>
            {/* LEFT: Payment & Billing */}
            <section className='payment-container'>
                {/* Payment Options */}
                <section className='billing-info-wrapper-payment'>
                    <header className='billing-info-header'>
                        <h6>Payment Options</h6>
                    </header>
                    <section className='payment-options'>
                        <label className='radio-label'>
                            <input className='form-check-input' type='radio' name='payment' defaultChecked />
                            <span>Credit & Debit Cards</span>
                            <span className='card-icons'>
                                <img src={mastercards} alt='Credit Cards' />
                            </span>
                        </label>
                    </section>
                    <form className='credit-card-details-wrapper'>
                        <article className='credit-card-details'>
                            {/* Card number */}
                            <div className='card-number'>
                                <label>
                                    <h6>Card number</h6>
                                </label>
                                <label className='cradit-card-input-wrapper'>
                                    <input className='input' type='text' placeholder='1234 5678 9012 3456' readOnly />
                                    <span className='input-lock' role='img' aria-label='lock'>🔒</span>
                                </label>
                            </div>
                            {/* Expiration & Security */}
                            <div className='card-row'>
                                <div className='expiration-date'>
                                    <label>
                                        <h6>Expiration date</h6>
                                    </label>
                                    <input type='text' className='input' placeholder='MM / YY' readOnly />
                                </div>
                                <div className='security-code'>
                                    <label>
                                        <h6>Security code <span className='info-icon' title='3 or 4 digit code'>?</span></h6>
                                    </label>
                                    <input type='text' className='input' placeholder='123' readOnly />
                                </div>
                            </div>
                            {/* Cardholder's name */}
                            <div className='cardholder-name'>
                                <label>
                                    <h6>Cardholder's name</h6>
                                </label>
                                <input type='text' className='input' placeholder='' readOnly />
                                <div className='helper-text'>As written on card</div>
                            </div>
                            {/* Card display name (optional) */}
                            <div className='card-display-name'>
                                <div className='display-name-row'>
                                    <label>
                                        <h6>Card display name <span className='optional'>(Optional)</span></h6>
                                    </label>
                                    <span className='char-count'>{displayName.length}/30</span>
                                </div>
                                <input
                                    type='text'
                                    className='input'
                                    placeholder='e.g. Marketing card, Legal team card...'
                                    maxLength={30}
                                    value={displayName}
                                    onChange={e => setDisplayName(e.target.value)}
                                    readOnly
                                />
                            </div>
                            {/* Save card checkbox */}
                            <div className='save-card-row'>
                                <label className='save-checkbox'>
                                    <input
                                        type='checkbox'
                                        checked={saveCard}
                                        onChange={() => setSaveCard(!saveCard)}
                                        readOnly
                                    />
                                    Save this card for future payments
                                    <span className='info-icon' title='We will securely save your card for next time'>?</span>
                                </label>
                            </div>
                        </article>
                    </form>
                    {/* PayPal Option */}
                    <div className='paypal-option'>
                        <label className='radio-label'>
                            <input className='form-check-input' type='radio' name='payment' />
                            <span style={{ color: '#0070ba', fontWeight: 700 }}>PayPal</span>
                        </label>
                    </div>
                </section>
                {/* Billing Information */}
                <section className='billing-info-wrapper'>
                    <header className='billing-info-header'>
                        <h6>Billing information</h6>
                    </header>
                    <div className='user-details-wrapper'>
                        <p>Your invoice will be issued according to the details listed here.</p>
                        <p><b>dimaaluf</b></p>
                        <p>Israel</p>
                        <button style={{ marginTop: 8, alignSelf: 'flex-end', border: '1px solid #222325', borderRadius: 6, padding: '6px 18px', background: '#fff', fontWeight: 500, cursor: 'pointer' }}>Add details</button>
                    </div>
                </section>
            </section>
            {/* RIGHT: Order Summary */}
            <section className='cta-container'>
                <div className='order-summary-card'>
                    <div className='gig-header'>
                        <img className='gig-img' src='https://via.placeholder.com/226x139?text=Gig+Image' alt='Gig' style={{width: 226, height: 139, borderRadius: 6, objectFit: 'cover', background: '#eee'}} />
                        <div className='gig-info'>
                            <div className='gig-title'>I will create and edit complex ai images, ai art and illustrations</div>
                        </div>
                    </div>
                    <div className='gig-package-section'>
                        <div className='gig-package'>Bronze <span className='gig-price'>$45</span></div>
                        <ul className='gig-features'>
                            <li><span style={{display: 'inline-flex', alignItems: 'center'}}><img src={vsign} alt='' style={{height: '1em', marginRight: 6}} />1 concept included</span></li>
                            <li><span style={{display: 'inline-flex', alignItems: 'center'}}><img src={vsign} alt='' style={{height: '1em', marginRight: 6}} />Logo transparency</span></li>
                        </ul>
                       
                    </div>
                    <div className='order-fees'>
                        <div className='fee-row'><span style={{display: 'inline-flex', alignItems: 'center'}}>Service fee <img src={questionMark} alt='' className='info-icon' /></span><span>$5.25</span></div>
                        <div className='fee-row-secondary'><span style={{display: 'inline-flex', alignItems: 'center'}}>VAT <img src={questionMark} alt='' className='info-icon' /></span><span>$7.65</span></div>
                    </div>
                    <div className='order-total'>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div className='total-label'>You'll pay</div>
                            <div className='total-amount'>$57.9</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div className='delivery-time'>Total delivery time</div>
                            <div className='delivery-time'><span>1 day</span></div>
                        </div>
                    </div>
                    <button className='pay-btn'>Pay in USD</button>
                    <div className='secure-payment'>
                        <i className='fa-solid fa-lock'></i> SSL Secure Payment
                    </div>
                    <div className='order-note order-note-grey'>
                        You will be charged $57.9. The order total is an estimation and does not include additional fees your bank may apply.
                    </div>
                </div>
            </section>
        </section>
    )
}