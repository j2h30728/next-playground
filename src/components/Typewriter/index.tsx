import style from "./style.module.css";

const Typewriter = ({ text, size = 40 }: { text: string; size?: number }) => {
  const typewriterStyle: React.CSSProperties = {
    "--characters": text.length,
    "font-size": size + "px",
  } as React.CSSProperties;

  return (
    <div style={typewriterStyle} className={style.typewriter}>
      <p>{text}</p>
    </div>
  );
};

export default Typewriter;
