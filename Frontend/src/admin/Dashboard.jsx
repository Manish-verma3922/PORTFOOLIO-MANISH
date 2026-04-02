
import { useState } from "react"
import ManageProjects from "./components/ManageProjects"
import ManageSkills from "./components/ManageSkills"
import ManageMessages from "./components/ManageMessages"

function Dashboard(){

const [section,setSection] = useState("projects")

return(

<div className="min-h-screen flex bg-black text-white">

{/* Sidebar */}

<div className="w-60 bg-gray-900 p-6">

<h2 className="text-2xl mb-8">
Admin Panel
</h2>

<ul className="space-y-4">

<li
className="cursor-pointer hover:text-blue-400"
onClick={()=>setSection("projects")}
>
Projects
</li>

<li
className="cursor-pointer hover:text-blue-400"
onClick={()=>setSection("skills")}
>
Skills
</li>

<li
className="cursor-pointer hover:text-blue-400"
onClick={()=>setSection("messages")}
>
Messages
</li>

</ul>

</div>


{/* Content Area */}

<div className="flex-1 p-10">

<h1 className="text-3xl mb-6">
Admin Dashboard
</h1>

{section === "projects" && <ManageProjects/>}

{section === "skills" && <ManageSkills/>}

{section === "messages" && <ManageMessages/>}

</div>

</div>

)

}

export default Dashboard