import React from "react";

const Button = ({
  className,
  label,
  onClick,
  ...rest // This will collect any additional props passed to the component
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      {...rest} // Spread the rest of the props on the button element
    >
      {label}
    </button>
  );
};

export default Button;
