import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import MagneticButton from "./MagneticButton";
import profile from "../assets/projects/profile.png";

function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* PARTICLES */}

      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: { value: 60 },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.4 },
          },
        }}
        className="absolute top-0 left-0"
      />

      {/* GRADIENT BLOBS */}

      <div className="absolute w-125 h-125 bg-purple-500 rounded-full blur-[200px] opacity-20 animate-pulse -top-25 -left-25" />

      <div className="absolute w-125 h-125 bg-blue-500 rounded-full blur-[200px] opacity-20 animate-pulse -bottom-25 -right-25" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* TEXT */}

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Hi I'm
            <span className="bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Manish
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mt-6 text-lg"
          >
            Full Stack Developer building modern digital experiences.
          </motion.p>

          <div className="flex gap-4 mt-8">
            <a href="#projects">
              <MagneticButton>View Projects</MagneticButton>
            </a>
            <a href="#contact">
              <MagneticButton>Contact Me</MagneticButton>
            </a>
          </div>
        </div>

        {/* GLASS PROFILE CARD */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 md:w-96 md:h-96 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl hover:rotate-3 hover:scale-105 transition duration-500">
            {/* IMAGE PLACEHOLDER */}
            <img
              src={profile}
              alt="Profile"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/30 shadow-lg"
            />

            {/* </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
