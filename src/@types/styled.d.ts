import 'styled-components';
import { defaultTheme } from '../styles/theme/default';

type defaultTheme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends defaultTheme {}
}