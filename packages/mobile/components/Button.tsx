import { Button as ButtonB } from "./ui/button";
import { Text } from "./ui/text";
import type { ButtonProps } from "@repo/shared";

export const Button = ({
  primary = false,
  size = "medium",
  label = "Button Mobile",
  onPress,
}: ButtonProps) => {
  return (
    <>
      <ButtonB>
        <Text>ABC</Text>
      </ButtonB>
    </>
  );
};
