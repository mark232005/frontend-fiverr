import { useSelector } from 'react-redux'
import { AccessibilityIcon, Facebook, Global, Instagram, InstagramIcon, Linkedin, Pinterest, Tiktok, Twitter } from '../svg'

export function AppFooter() {
    const count = useSelector(storeState => storeState.userModule.count)

    return (
        <footer>
            <section className="app-footer flex">
                <div className="flex logo">
                    <p className="logo-txt">
                        alufix<span className="dom"></span>
                    </p>
                    <p>© Alufix International Ltd. 2025</p>
                </div>
                <div className="flex footer-links">
                    <div className="icons">
                        <button><Tiktok /></button>
                        <button><Instagram /></button>
                        <button><Linkedin /></button>
                        <button><Facebook /></button>
                        <button><Pinterest /></button>
                        <button><Twitter /></button>
                    </div>
                    <span>.</span>
                    <div className="flex language-currency">
                        <div className="language">
                            <Global />
                            <span>English</span>
                        </div>
                        <p>₪ ILS</p>
                    </div>
                    <AccessibilityIcon />
                </div>
            </section>
        </footer>
    )
}