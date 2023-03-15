import { Button } from "@mantine/core";
import React from "react";

type Props = {
  iconWithClass: React.ReactNode;
  Bg?: "!bg-gray-900";
  hoverBg?: "hover:!bg-gray-700";
};

const CustomButton: React.FC<Props> = ({
  iconWithClass = null,
  Bg = "!bg-gray-900",
  hoverBg = "hover:!bg-gray-700",
}) => {
  return (
    <Button bg={"dark"} size="md" className={`${Bg} ${hoverBg}`}>
      Shop now {iconWithClass}
    </Button>
  );
};

export default CustomButton;
