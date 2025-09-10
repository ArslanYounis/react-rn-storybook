import { Avatar as RUAvatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Text } from "./ui/text";

export const Avatar = () => {
  return (
    <RUAvatar alt="Zach Nugent's Avatar">
      <AvatarImage source={{ uri: "https://github.com/mrzachnugent.png" }} />
      <AvatarFallback>
        <Text>ZN</Text>
      </AvatarFallback>
    </RUAvatar>
  );
};
