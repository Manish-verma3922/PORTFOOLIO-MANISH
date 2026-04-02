import { FaGithub, FaLinkedin, FaArrowUp, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (

    <footer className="bg-black text-white border-t border-white/10 py-10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left text */}

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Manish Verma. All rights reserved.
        </p>


        {/* Social icons */}

        <div className="flex gap-6 text-xl">

          <motion.a
            whileHover={{ scale:1.2 }}
            href="https://github.com/Manish-verma3922"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub/>
          </motion.a>

          <motion.a
            whileHover={{ scale:1.2 }}
            href="https://www.linkedin.com/in/manish-kumar-verma-65a416275/"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin/>
          </motion.a>

          <motion.a
            whileHover={{ scale:1.2 }}
            href="mailto:manishverma3922@gmail.com"
            className="text-gray-400 hover:text-white"
          >
            <FaEnvelope/>
          </motion.a>

        </div>


        {/* Back to top button */}

        <button
          onClick={scrollTop}
          className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full hover:bg-white/20 transition"
        >
          <FaArrowUp/>
        </button>

      </div>

    </footer>

  )
}

export default Footer