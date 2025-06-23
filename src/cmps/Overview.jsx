import { useState } from "react"
import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';


export function Overview({ createGig, gig }) {
    const [text, setText] = useState(gig.title)
    function handleChange(e) {
        const { name, value } = e.target
        setText(value)
        createGig(name, value)
    }
    return (
        <section className="overview">
            <div className="title">
                <div className="txt">
                    <h2> Gig title
                    </h2>
                    <p>As your Gig storefront, your
                        <b> title is the most important place </b>
                        to include keywords that buyers would likely use to search for a service like yours.
                    </p>
                </div>
                <div className="input">
                    <span>I will</span>
                    <textarea
                        name="title"
                        minLength={15}
                        placeholder="do something I'm really good at"
                        maxLength="80"
                        value={text}
                        onChange={handleChange}
                    > </textarea>
                    <div className="footer-input flex">
                        {
                            text.length < 15 ?
                                <p className="min-words">Create a title with 15 characters minimum. Your title should have at least 4 words</p> :
                                <p className="perfect">Just perfect!</p>
                        }
                        <p className="count">{`${text.length}/80 max`}</p>
                    </div>
                </div>
            </div>
            <div className="category">
                <div className="txt">
                    <h2>Category</h2>
                    <p>Choose the category your Gig.</p>
                </div>
                <div className="input">
                    <Select
                        value={gig.tags}
                        name="tag"
                        onChange={(event, newValue) => createGig("tags", newValue)}
                        placeholder="SELECT A CATEGORY"
                        indicator={<KeyboardArrowDown />}
                        sx={{
                            width: 250,
                            [`& .${selectClasses.indicator}`]: {
                                transition: '0.2s',
                                [`&.${selectClasses.expanded}`]: {
                                    transform: 'rotate(-180deg)',
                                },
                            },
                        }}
                    >
                        <Option value="Graphics & Design">Graphics & Design</Option>
                        <Option value="Programming & Tech">Programming & Tech</Option>
                        <Option value="Digital Marketing">Digital Marketing</Option>
                        <Option value="Video & Animation">Video & Animation</Option>
                        <Option value="Writing & Translation">Writing & Translation</Option>
                        <Option value="Music & Audio">Music & Audio</Option>
                        <Option value="Business">Business</Option>
                        <Option value="Finance">Finance</Option>
                        <Option value="AI Service">AI Service</Option>
                        <Option value="Personal Growth">Personal Growth</Option>
                        <Option value="Consulting">Consulting</Option>
                        <Option value="Data">Data</Option>
                        <Option value="Photography">Photography</Option>
                    </Select>
                </div>
            </div>

        </section>
    )
}