import { useState } from "react"

function AdminLogin(){

const [password,setPassword] = useState("")

const login = ()=>{

if(password === "admin123"){

localStorage.setItem("admin",true)

window.location="/dashboard"

}else{

alert("Wrong password")

}

}

return(

<div className="min-h-screen flex items-center justify-center bg-black text-white">

<div className="bg-white/10 p-8 rounded-xl">

<h2 className="text-2xl mb-4">
Admin Login
</h2>

<input
type="password"
placeholder="Enter password"
className="p-3 w-full mb-4 bg-black border border-white/20 rounded"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={login}
className="w-full bg-blue-500 py-2 rounded"
>
Login
</button>

</div>

</div>

)

}

export default AdminLogin