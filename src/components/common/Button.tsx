import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  color?: {
    bgColor?: string,
    hoverColor?: string
  }
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  color = {
    bgColor: '',
    hoverColor: ''
  }
}) => {
const defaultColors = {
    bgColor: 'bg-blue-500',
    hoverColor: 'bg-blue-600'
}

const buttonColor: string = color.bgColor || defaultColors.bgColor
const buttonHoverColor: string = `hover:${color.hoverColor || defaultColors.hoverColor}`

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white rounded ${buttonColor} ${buttonHoverColor} ${className}`}
    >
      {children}
    </button>
  );
};
