export type HomeServiceType = {
  key: string
  label: string
  /**
   * Material icon
   */
  icon: FC<SvgProps>
  component: () => JSX.Element
}
