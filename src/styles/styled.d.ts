/* eslint @typescript-eslint/no-empty-interface: "off" */
import 'styled-components'
import { Dark } from './theme'

export type Theme = typeof Dark

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
