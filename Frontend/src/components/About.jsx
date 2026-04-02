import { motion } from "framer-motion";
import profile from "../assets/projects/profile.png";

function About() {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE SECTION */}
      

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center">
            {/* <p className="text-gray-400">Your Image</p> */}
            <img
              // src="../assets/projects/profile.png"
              src={profile}
              alt="Profile"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/30 shadow-lg"
            />
          </div>
        </motion.div>

        {/* TEXT SECTION */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Hi, I'm Manish, a passionate Full Stack Developer who loves building
            modern web applications using technologies like React, Node.js and
            MongoDB. I enjoy solving real world problems through code and
            constantly learning new technologies to improve my skills.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-gray-400">Experience</p>
              <p className="font-semibold">Fresher</p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-gray-400">Projects</p>
              <p className="font-semibold">5+</p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-gray-400">Focus</p>
              <p className="font-semibold">Full Stack</p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-gray-400">Location</p>
              <p className="font-semibold">India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
