import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local.js'
import mastercards from '../assets/img/credit-cards.svg'
import vsign from '../assets/img/img-of-v.svg'
import questionMark from '../assets/img/question-mark.svg'
import { loadGig } from '../store/gig.actions'
import { useSelector } from 'react-redux'



export function GigCheckout() {
    const { gigId } = useParams()
    const gig = useSelector(storeState => storeState.gigModule.gig)
    const [cardDetails, setCardDetails] = useState({
        number: '',
        expiration: '',
        securityCode: '',
        cardholderName: '',
        displayName: '',
        saveCard: true,
    })

    useEffect(() => {
        loadGig()
    }, [gigId])

    // async function loadGig() {
    //     try {
    //         const loadedGig = await gigService.getById(gigId)
    //         console.log(loadedGig);

    //         setGig(loadedGig)
    //     } catch (err) {
    //         console.error('Failed to load gig', err)
    //     }
    // }

    function handleCardChange(ev) {
        const { name, value, type, checked } = ev.target
        setCardDetails(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    if (!gig) return <div>Loading...</div>

    const serviceFee = 5.25
    const vat = 7.65
    const total = gig.price + serviceFee + vat

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
                                    <input className='input' type='text' name='number' value={cardDetails.number} onChange={handleCardChange} placeholder='1234 5678 9012 3456' />
                                    <span className='input-lock' role='img' aria-label='lock'>🔒</span>
                                </label>
                            </div>
                            {/* Expiration & Security */}
                            <div className='card-row'>
                                <div className='expiration-date'>
                                    <label>
                                        <h6>Expiration date</h6>
                                    </label>
                                    <input type='text' className='input' name='expiration' value={cardDetails.expiration} onChange={handleCardChange} placeholder='MM / YY' />
                                </div>
                                <div className='security-code'>
                                    <label>
                                        <h6>Security code <span className='info-icon' title='3 or 4 digit code'>?</span></h6>
                                    </label>
                                    <input type='text' className='input' name='securityCode' value={cardDetails.securityCode} onChange={handleCardChange} placeholder='123' />
                                </div>
                            </div>
                            {/* Cardholder's name */}
                            <div className='cardholder-name'>
                                <label>
                                    <h6>Cardholder's name</h6>
                                </label>
                                <input type='text' className='input' name='cardholderName' value={cardDetails.cardholderName} onChange={handleCardChange} placeholder='' />
                                <div className='helper-text'>As written on card</div>
                            </div>
                            {/* Card display name (optional) */}
                            <div className='card-display-name'>
                                <div className='display-name-row'>
                                    <label>
                                        <h6>Card display name <span className='optional'>(Optional)</span></h6>
                                    </label>
                                    <span className='char-count'>{cardDetails.displayName.length}/30</span>
                                </div>
                                <input
                                    type='text'
                                    className='input'
                                    name='displayName'
                                    placeholder='e.g. Marketing card, Legal team card...'
                                    maxLength={30}
                                    value={cardDetails.displayName}
                                    onChange={handleCardChange}
                                />
                            </div>
                            {/* Save card checkbox */}
                            <div className='save-card-row'>
                                <label className='save-checkbox'>
                                    <input
                                        type='checkbox'
                                        name='saveCard'
                                        checked={cardDetails.saveCard}
                                        onChange={handleCardChange}
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
                    </div>
                </section>
            </section>
            {/* RIGHT: Order Summary */}
            <section className='cta-container'>
                <div className='order-summary-card'>
                    <div className='gig-header'>
                        <img className='gig-img' src={gig.imgUrl[0]} alt='Gig' style={{ width: 226, height: 139, borderRadius: 6, objectFit: 'cover', background: '#eee' }} />
                        <div className='gig-info'>
                            <div className='gig-title'>{gig.title}</div>
                        </div>
                    </div>
                    <div className='gig-package-section'>
                        <div className='gig-package'>Bronze <span className='gig-price'>₪{gig.price}</span></div>
                        <ul className='gig-features'>
                            <li><span style={{ display: 'inline-flex', alignItems: 'center' }}><img src={vsign} alt='' style={{ height: '1em', marginRight: 6 }} />1 concept included</span></li>
                            <li><span style={{ display: 'inline-flex', alignItems: 'center' }}><img src={vsign} alt='' style={{ height: '1em', marginRight: 6 }} />Logo transparency</span></li>
                        </ul>

                    </div>
                    <div className='order-fees'>
                        <div className='fee-row'><span style={{ display: 'inline-flex', alignItems: 'center' }}>Service fee <img src={questionMark} alt='' className='info-icon' /></span><span>₪{serviceFee.toFixed(2)}</span></div>
                        <div className='fee-row-secondary'><span style={{ display: 'inline-flex', alignItems: 'center' }}>VAT <img src={questionMark} alt='' className='info-icon' /></span><span>₪{vat.toFixed(2)}</span></div>
                    </div>
                    <div className='order-total'>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div className='total-label'>You'll pay</div>
                            <div className='total-amount'>₪{total.toFixed(2)}</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div className='delivery-time'>Total delivery time</div>
                            <div className='delivery-time'><span>{gig.daysToMake} days</span></div>
                        </div>
                    </div>
                    <button className='pay-btn'>Pay in USD</button>
                    <div className='secure-payment'>
                        <i className='fa-solid fa-lock'></i> SSL Secure Payment
                    </div>
                    <div className='order-note order-note-grey'>
                        You will be charged ₪{total.toFixed(2)}. The order total is an estimation and does not include additional fees your bank may apply.
                    </div>
                </div>
            </section>
        </section>
    )
}