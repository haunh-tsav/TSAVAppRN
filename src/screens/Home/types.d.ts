export type HomeServiceType = {
  key: string
  label: string
  /**
   * Material icon
   */
  icon: string
  component: () => JSX.Element
}
