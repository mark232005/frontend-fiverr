import { NavBar } from '../cmps/Categories'
import { IndexHeader } from './IndexHeader'

export function GigLayout({ category, children, onAddGig }) {
    return (
        <main className="gig-layout">
            <NavBar />
            <header>
                <IndexHeader category={category} />
                {userService.getLoggedinUser() && (
                    <button onClick={onAddGig}>Add a gig</button>
                )}
            </header>
            {children}
        </main>
    )
}
