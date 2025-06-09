import { NavBar } from '../cmps/Categories'
import { IndexHeader } from './IndexHeader'

export function GigLayout({ category, children, onAddGig }) {
    return (
        <main className="gig-layout">
            <NavBar />
            <header>
                <IndexHeader category={category} />
            </header>
            {children}
        </main>
    )
}
