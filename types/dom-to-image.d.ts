import { View } from "react-native";

declare module "dom-to-image" {
  export function toJpeg(
    node: HTMLElement | Element | View | Node | null,
    options?: {
      quality?: number;
      width?: number;
      height?: number;
    }
  ): Promise<string>;
}
