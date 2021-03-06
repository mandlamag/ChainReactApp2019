import { ImageURISource, ViewProperties, ViewStyle } from "react-native"
import { ScreenPresets } from "./screen.presets"

export interface ScreenProps extends ViewProperties {
  /**
   * Children components.
   */
  children?: React.ReactNode

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle

  /**
   * One of the different types of presets.
   */
  preset?: ScreenPresets

  /**
   * An optional background image
   */
  backgroundImage?: ImageURISource

  /**
   * An optional background color
   */
  backgroundColor?: string
}
