import { useRef } from "react";

function MagneticButton({ children, onClick }) {
  const ref = useRef(null);

  const move = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.3}px,${y * 0.3}px)`;
  };

  const leave = () => {
    ref.current.style.transform = "translate(0px,0px)";
  };

  return (
    <button
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      onClick={onClick}
      className="px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg hover:scale-110 transition"
    >
      {children}
    </button>
  );
}

export default MagneticButton;
