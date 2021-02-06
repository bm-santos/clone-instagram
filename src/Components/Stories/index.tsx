import { useEffect, useState } from "react"
import axios from "axios"

const Stories = () => {

    const [storiesList, setStoriesList] = useState<any[]>([])

    useEffect(() => {
        axios.get("http://localhost:4000/stories")
            .then(resposta => setStoriesList(resposta.data))
    }, [])

    return (
        <div className="stories">
            <h2>Stories</h2>
            {storiesList.map((item: any) => (
                <div key={item.id} className="storie">
                    <div className="storie-image">
                        <img src={item.userPicture} alt={item.user} />
                    </div>
                    <div className="storie-user">
                        <strong>{item.user}</strong>
                        <span>{item.time}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Stories;