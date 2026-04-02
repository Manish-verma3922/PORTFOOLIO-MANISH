
import { useEffect, useState } from "react"
import axios from "axios"

function ManageProjects(){

const [projects,setProjects] = useState([])

const [form,setForm] = useState({
title:"",
desc:"",
image:"",
github:"",
demo:""
})

useEffect(()=>{
fetchProjects()
},[])

const fetchProjects = ()=>{
axios.get("https://portfoolio-manish.onrender.com/api/projects")
// axios.get("http://localhost:5000/api/projects")
.then(res=>setProjects(res.data))
}

const handleChange = (e)=>{
setForm({
...form,
[e.target.name]:e.target.value
})
}

const addProject = async(e)=>{

e.preventDefault()

await axios.post("https://portfoolio-manish.onrender.com/api/projects",form)

setForm({
title:"",
desc:"",
image:"",
github:"",
demo:""
})

fetchProjects()
}

const deleteProject = async(id)=>{

await axios.delete(`https://portfoolio-manish.onrender.com/api/projects/${id}`)

fetchProjects()

}

return(

<div>

<h2 className="text-2xl mb-6">Manage Projects</h2>

{/* ADD PROJECT */}

<form onSubmit={addProject} className="grid grid-cols-2 gap-4 mb-10">

<input
name="title"
placeholder="Project Title"
value={form.title}
onChange={handleChange}
className="p-2 bg-black border"
/>

<input
name="image"
placeholder="Image URL"
value={form.image}
onChange={handleChange}
className="p-2 bg-black border"
/>

<input
name="github"
placeholder="Github Link"
value={form.github}
onChange={handleChange}
className="p-2 bg-black border"
/>

<input
name="demo"
placeholder="Live Demo"
value={form.demo}
onChange={handleChange}
className="p-2 bg-black border"
/>

<textarea
name="desc"
placeholder="Description"
value={form.desc}
onChange={handleChange}
className="p-2 bg-black border col-span-2"
/>

<button className="bg-blue-500 p-2 col-span-2">
Add Project
</button>

</form>

{/* PROJECT LIST */}

<table className="w-full border">

<thead>

<tr className="border-b">

<th className="text-left">Title</th>
<th>Delete</th>

</tr>

</thead>

<tbody>

{projects.map(project=>(
<tr key={project._id} className="border-b">

<td>{project.title}</td>

<td>

<button
onClick={()=>deleteProject(project._id)}
className="bg-red-500 px-3 py-1"
>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

)

}

export default ManageProjects
