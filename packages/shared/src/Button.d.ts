export interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label?: string;
  onPress?: () => void; // single event handler for all platforms
}
