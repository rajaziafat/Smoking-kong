import React from "react";

function Button({
  title,
  onClick,
  style,
  className = " uppercase weight-7",
  fontSize = "fs-16px",
  type = "",
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} ${fontSize} opacity-hover-effect bg-btn-gradient white pointer`}
      style={style}
    >
      {title}
    </button>
  );
}

export default Button;
