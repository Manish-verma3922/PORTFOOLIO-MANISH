// import { useEffect,useState } from "react"
// import axios from "axios"

// function ManageMessages(){

// const [messages,setMessages] = useState([])

// useEffect(()=>{

// axios.get("http://localhost:5000/api/messages")
// .then(res=>setMessages(res.data))

// },[])

// return(

// <div>

// <h2 className="text-2xl mb-4">
// Contact Messages
// </h2>

// {messages.map(msg=>(

// <div
// key={msg._id}
// className="border border-white/20 p-4 mb-4 rounded"
// >

// <h4>{msg.name}</h4>

// <p>{msg.email}</p>

// <p>{msg.message}</p>

// </div>

// ))}

// </div>

// )

// }

// export default ManageMessages











import { useEffect,useState } from "react"
import axios from "axios"

function ManageMessages(){

const [messages,setMessages] = useState([])

useEffect(()=>{
fetchMessages()
},[])

const fetchMessages = ()=>{
axios.get("https://portfoolio-manish.onrender.com/api/messages")
// axios.get("http://localhost:5000/api/messages")
.then(res=>setMessages(res.data))
}

const deleteMessage = async(id)=>{

await axios.delete(`https://portfoolio-manish.onrender.com/api/messages/${id}`)

fetchMessages()

}

return(

<div className="mt-10">

<h2 className="text-2xl mb-4">
Contact Messages
</h2>

{messages.map(msg=>(

<div
key={msg._id}
className="border border-white/20 p-4 mb-4 rounded flex justify-between"
>

<div>

<h4 className="font-bold">
{msg.name}
</h4>

<p>{msg.email}</p>

<p>{msg.message}</p>

</div>

<button
onClick={()=>deleteMessage(msg._id)}
className="bg-red-500 px-3 text-white rounded"
>
Delete
</button>

</div>

))}

</div>

)

}

export default ManageMessages
