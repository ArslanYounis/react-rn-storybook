import type { ButtonProps } from "@repo/shared";

export const Button = ({
  label = "Button Web",
  onPress, // unify API
}: ButtonProps) => {
  return (
    <button
      className="w-96 bg-red-900"
      onClick={onPress} // map onClick -> onPress
    >
      {label}
    </button>
  );
};
