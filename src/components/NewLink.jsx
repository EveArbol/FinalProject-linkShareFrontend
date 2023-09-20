import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { sendLinkService } from "../services"
import "../components/NewLink.css"

function NewLink ({ addLink }) {
    const { token } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleForm = async (e) => {
        e.preventDefault()

    try {
        setLoading(true)
        const data = new FormData(e.target)
        const link = await sendLinkService({ data, token })

        addLink(link)

        e.target.reset()
    } catch (error) {
        setError(error.message)
    } finally {
        setLoading(false)
    }
    };
    return (
    <>
        <form className="new-link" onSubmit={handleForm}>
        <fieldset>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" required />
        </fieldset>
        <fieldset>
            <label htmlFor="url">URL</label>
            <input type="url" name="url" id="url" required />
        </fieldset>
        <fieldset>
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" rows="4" cols="50" required />
        </fieldset>
    
        <button className="posting-button">Share link</button>
        {error ? <p>{error}</p> : null}
        {console.log(`this is the error I can't fix ---"${error}"--- NewLink.jsx`)}
        {loading ? <p>posting link...</p> : null}
        </form>
    </>
    )
}
    
export default NewLink