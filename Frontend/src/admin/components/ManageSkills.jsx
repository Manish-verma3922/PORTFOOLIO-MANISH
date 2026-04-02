
import { useEffect, useState } from "react";
import axios from "axios";

function ManageSkills() {
  const [skills, setSkills] = useState([]);

  const [form, setForm] = useState({
    name: "",
    category: "",
    level: "",
  });

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = () => {
    axios
      .get("https://portfoolio-manish.onrender.com/api/skills")
      .then((res) => setSkills(res.data));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addSkill = async (e) => {
    e.preventDefault();

    await axios.post("https://portfoolio-manish.onrender.com/api/skills", form);

    setForm({
      name: "",
      category: "",
      level: "",
    });

    fetchSkills();
  };

  const deleteSkill = async (id) => {
    await axios.delete(`https://portfoolio-manish.onrender.com/api/skills/${id}`);

    fetchSkills();
  };

  return (
    <div>
      <h2 className="text-2xl mb-6">Manage Skills</h2>

      <form onSubmit={addSkill} className="flex gap-4 mb-8">
        <input
          name="name"
          placeholder="Skill Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 border"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="p-2 border"
        >
          <option value="">Category</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Languages">Languages</option>
          <option value="Tools">Tools</option>
        </select>

        <input
          type="number"
          name="level"
          placeholder="Level (0-100)"
          value={form.level}
          onChange={handleChange}
          className="p-2 border"
        />

        <button className="bg-blue-500 text-white px-4">Add</button>
      </form>

      <ul>
        {skills.map((skill) => (
          <li key={skill._id} className="flex justify-between mb-2">
            <span>
              {skill.name} - {skill.category} ({skill.level}%)
            </span>

            <button
              onClick={() => deleteSkill(skill._id)}
              className="bg-red-500 text-white px-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageSkills;
