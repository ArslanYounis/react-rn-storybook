import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { ButtonProps } from "@repo/shared";

export const Button = ({
  primary = false,
  size = "medium",
  label = "Button Mobile",
  onPress,
}: ButtonProps) => {
  const modeStyle = primary ? styles.primary : styles.secondary;
  const textModeStyle = primary ? styles.primaryText : styles.secondaryText;
  const sizeStyle = styles[size];
  const textSizeStyle = textSizeStyles[size];

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, sizeStyle]} className="bg-red-900">
          <Text style={[textModeStyle, textSizeStyle]}>{label}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: { borderRadius: 48 },
  primary: { backgroundColor: "#1ea7fd" },
  primaryText: { color: "white" },
  secondary: { backgroundColor: "transparent", borderWidth: 1 },
  secondaryText: { color: "#333" },
  small: { paddingVertical: 10, paddingHorizontal: 16 },
  smallText: { fontSize: 12 },
  medium: { paddingVertical: 11, paddingHorizontal: 20 },
  mediumText: { fontSize: 14 },
  large: { paddingVertical: 12, paddingHorizontal: 24 },
  largeText: { fontSize: 16 },
});
const textSizeStyles = {
  small: styles.smallText,
  medium: styles.mediumText,
  large: styles.largeText,
};
