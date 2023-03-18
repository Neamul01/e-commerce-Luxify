import { Button } from "@mantine/core";
import React from "react";

type Props = {
  iconWithClass: React.ReactNode;
  Bg?: string;
  hoverBg?: string;
  customClass?: string;
};

const CustomButton: React.FC<Props> = ({
  iconWithClass = null,
  Bg = "!bg-gray-900",
  hoverBg = "!bg-gray-700",
  customClass = null,
}) => {
  return (
    <Button
      bg={"dark"}
      size="md"
      className={`${Bg} hover:${hoverBg} ${customClass}`}
    >
      Shop now {iconWithClass}
    </Button>
  );
};

export default CustomButton;
