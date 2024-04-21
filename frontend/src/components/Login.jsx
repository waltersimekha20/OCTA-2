import { useContext, useState } from "react"
import { AuthContext } from "../context"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const navigate = useNavigate()
    const {loginUser} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(email, password)
        navigate("/")

    }
    return(
        <form onSubmit={handleSubmit}>
            <input name="email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <input name = "password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
}