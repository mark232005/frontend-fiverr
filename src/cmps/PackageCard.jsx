import { useState } from "react";
import { CheckFullIcon, CheckIcon, ClockIcon, RefreshIcon } from "../svg";



export function PackageCard({ gig }) {
    const [selectedPackage, setSelectedPackage] = useState('basic')
    function isCount(selectedPackage) {
        switch (selectedPackage) {
            case 'basic':
                return gig.price
            case 'standard':
                return gig.price + 25
            case 'premium':
                return gig.price + 55
            default:
                return gig.price
        }
    }
    function isDelivery(daysToMake) {
        switch (selectedPackage) {
            case 'basic':
                return gig.daysToMake
            case 'standard':
                return gig.daysToMake + 2
            case 'premium':
                return gig.daysToMake + 5
            default:
                return gig.daysToMake
        }
    }
    return (
        <section className='package-card'>
            <header>
                <button className={selectedPackage === 'basic' ? 'selected' : ''} onClick={() => setSelectedPackage('basic')}>Basic</button>
                <button className={selectedPackage === 'standard' ? 'selected' : ''} onClick={() => setSelectedPackage('standard')}>Standard</button>
                <button className={selectedPackage === 'premium' ? 'selected' : ''} onClick={() => setSelectedPackage('premium')}>Premium</button>
            </header>
            <section className="card-body">
                <div className="price flex">
                    <span className="count">{isCount(selectedPackage)}₪</span>
                    <span className="txt">Save up to 10% with <span style={{ color: '#026a5d' }}>Subscribe to Save</span></span>
                    <p>
                        <span>PLEASE CONTACT ME BEFORE ORDERING </span>
                        Basic editing in full HD 1920/1080
                        PLEASE CONTACT ME BEFORE ORDERING
                    </p>
                    <div className="additional-info flex">
                        <div className="delivery flex">
                            <ClockIcon />
                            <b>{isDelivery(gig.daysToMake)}-day delivery</b>
                        </div>
                        <div className="revisions flex">
                            <RefreshIcon />
                            <b>2 Revisions</b>
                        </div>
                    </div>
                </div>
                <ul>
                    <li> <CheckFullIcon /> <span>Up to 2 minutes running time</span></li>
                    <li><CheckFullIcon /> <span>Color grading</span></li>
                    <li>{selectedPackage !== 'basic' ? <CheckFullIcon /> : <CheckIcon />}<span>Sound design & mixing</span></li>
                    <li> {selectedPackage !== 'basic' ? <CheckFullIcon /> : <CheckIcon />}<span>Motion graphics</span></li>
                    <li> {selectedPackage === 'premium' ? <CheckFullIcon /> : <CheckIcon />} <span>Subtitles</span></li>
                </ul>
                <div class="continue-btn">
                    <button>Request to order</button>
                </div>
            </section>
        </section>

    )
}


