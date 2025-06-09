import { useState } from 'react'
import { useNavigate } from 'react-router'

import { signup } from '../store/user.actions'

import { ImgUploader } from '../cmps/ImgUploader'
import { userService } from '../services/user'

export function Signup() {
    const [credentials, setCredentials] = useState(userService.getEmptyUser())
    const navigate = useNavigate()
    const [skillsInput, setSkillsInput] = useState('')
    function clearState() {
        setCredentials({ username: '', password: '', fullname: '', imgUrl: '', score: 100 })
    }

    function handleChange(ev) {
        const field = ev.target.name
        let newValue = ev.target.value

         if (ev.target.type === 'select-multiple') {
            newValue = Array.from(ev.target.selectedOptions, option => option.value)
        }

        setCredentials(prev => ({ ...prev, [field]: newValue }))
    }
    async function onSignup(ev = null) {
        if (ev) ev.preventDefault()

        if (!credentials.username || !credentials.password || !credentials.fullname) return
        const skills = skillsInput.split(',').map(skill => skill.trim()).filter(skill => skill)
        const updatedCredentials = { ...credentials, skills }

        await signup(updatedCredentials)
        clearState()
        navigate('/')
    }

    function onUploaded(imgUrl) {
        setCredentials(credentials => ({ ...credentials, imgUrl }))
    }

    return (
        <form className="signup-form" onSubmit={onSignup}>
            <input
                type="text"
                name="fullname"
                value={credentials.fullname}
                placeholder="Fullname"
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="username"
                value={credentials.username}
                placeholder="Username"
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                value={credentials.password}
                placeholder="Password"
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="located"
                value={credentials.located}
                placeholder="Where are you from?"
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="skills"
                value={skillsInput}
                placeholder="Enter your skills separated by commas"
                onChange={(ev) => setSkillsInput(ev.target.value)}
            />
            <input
                type="text"
                name="description"
                value={credentials.description}
                placeholder="Describe yourself"
                onChange={handleChange}
                required
            />
            <label htmlFor="languages" >Choose a language:</label>
            <select id="languages" name="languages" multiple value={credentials.languages} onChange={handleChange}>
                <option value="English">English</option>
                <option value="Hebrew">Hebrew</option>
                <option value="Arabic">Arabic</option>
                <option value="Chinese">Chinese</option>
                <option value="French">French</option>
                <option value="Russian">Russian</option>
                <option value="spanish">Spanish</option>
            </select>
            <ImgUploader onUploaded={onUploaded} />
            <button>Signup</button>
        </form >
    )
}