import { Button } from "@mantine/core";
import React from "react";

type Props = {
  iconWithClass?: React.ReactNode;
  iconPosition?: "left" | "right";
  Bg?: string;
  hoverBg?: string;
  customClass?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const CustomButton: React.FC<Props> = ({
  iconWithClass = null,
  iconPosition = "right",
  Bg = "!bg-gray-900",
  hoverBg = "!bg-gray-700",
  customClass = null,
  size = "md",
  text = "Shop now",
  disabled = false,
  ...rest
}) => {
  return (
    <Button
      disabled={disabled}
      bg={Bg}
      size={size}
      {...rest}
      className={`${Bg} hover:${hoverBg} ${customClass}`}
    >
      {iconPosition === "left" ? (
        <>
          {iconWithClass}
          {text}
        </>
      ) : (
        <>
          {text} {iconWithClass}
        </>
      )}
    </Button>
  );
};

export default CustomButton;
