import React from "react";
import type { ButtonProps } from "@repo/shared";

export const Button = ({
  primary = false,
  size = "medium",
  label = "Button Web",
  onPress, // unify API
}: ButtonProps) => {
  const base: React.CSSProperties = {
    border: "none",
    borderRadius: 48,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
  };

  const mode = primary
    ? { backgroundColor: "#1ea7fd", color: "white" }
    : {
        backgroundColor: "transparent",
        border: "1px solid #ccc",
        color: "#333",
      };

  const sizes: Record<string, React.CSSProperties> = {
    small: { padding: "10px 16px", fontSize: 12 },
    medium: { padding: "11px 20px", fontSize: 14 },
    large: { padding: "12px 24px", fontSize: 16 },
  };

  return (
    <button
      style={{
        ...base,
        ...mode,
        ...sizes[size],
      }}
      className="w-6xl"
      onClick={onPress} // map onClick -> onPress
    >
      {label}
    </button>
  );
};
