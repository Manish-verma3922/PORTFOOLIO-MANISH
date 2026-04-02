import { motion } from "framer-motion"
import { useEffect,useState } from "react"
import axios from "axios"

function Skills(){

const [skills,setSkills] = useState([])

useEffect(()=>{

axios.get("https://portfoolio-manish.onrender.com/api/skills")
.then(res=>{

setSkills(res.data)

})

.catch(err=>{

console.log(err)

})

},[])


const groupedSkills = skills.reduce((acc,skill)=>{

if(!acc[skill.category]){

acc[skill.category] = []

}

acc[skill.category].push(skill)

return acc

},{})


return(

<section id="skills" className="py-24 bg-black text-white relative overflow-hidden">

<div className="absolute w-100 h-100 bg-blue-500 rounded-full blur-[180px] opacity-20 -top-25 -left-25 animate-pulse"/>

<div className="absolute w-100 h-100 bg-purple-500 rounded-full blur-[180px] opacity-20 -bottom-25 -right-25 animate-pulse"/>


<div className="max-w-7xl mx-auto px-6 relative z-10">

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-4xl md:text-5xl font-bold text-center mb-20"
>
My Skills
</motion.h2>


{Object.entries(groupedSkills).map(([category,items])=> (

<div key={category} className="mb-16">

<h3 className="text-2xl font-semibold mb-8 text-blue-400">
{category}
</h3>


<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

{items.map((skill,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1}}
whileHover={{scale:1.08}}
className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition"
>

<div className="flex items-center gap-3 mb-4 text-xl">

<h4 className="font-medium">
{skill.name}
</h4>

</div>


<div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">

<motion.div
initial={{width:0}}
whileInView={{width:`${skill.level}%`}}
transition={{duration:1}}
className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
/>

</div>

</motion.div>

))}

</div>

</div>

))}

</div>

</section>

)

}

export default Skills
