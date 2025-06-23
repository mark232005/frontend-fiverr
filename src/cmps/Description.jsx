import { useState } from "react"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export function Description({ createGig, gig, stripHtml }) {
    const [txt, setTxt] = useState('')

    function handleChange(value) {
        const count = stripHtml(value).length
        if (count > 1200) return
        createGig('description', value)
        setTxt(value)
    }

    const charCount = stripHtml(txt).length
    return (
        <section className="description">
            <header>
                <h3>Description</h3>
            </header>
            <div className="inputTxt" style={{ width: '100%' }}>
                <p>Briefly Describe Your Gig</p>
                <ReactQuill theme="snow" value={gig.description} onChange={handleChange} style={{ height: '100%', backgroundColor: '#fff' }} />
                <p className="count">{charCount}/1200 Characters</p>
            </div>
        </section>
    )
}