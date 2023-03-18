import { Button } from "@mantine/core";
import React from "react";

type Props = {
  iconWithClass?: React.ReactNode;
  Bg?: string;
  hoverBg?: string;
  customClass?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

const CustomButton: React.FC<Props> = ({
  iconWithClass = null,
  Bg = "!bg-gray-900",
  hoverBg = "!bg-gray-700",
  customClass = null,
  size = "md",
}) => {
  return (
    <Button
      bg={"dark"}
      size={size}
      className={`${Bg} hover:${hoverBg} ${customClass}`}
    >
      Shop now {iconWithClass}
    </Button>
  );
};

export default CustomButton;
