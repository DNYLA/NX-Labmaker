interface Navbar {
  base: string;
  item: string;
  active: string;
  title: string;
  titleHover: string;
}

interface Base {
  backCol: string;
}

export const DarkTheme: DefaultTheme = {
  base: {
    backCol: '#202225',
  },
  navbar: {
    base: '#1A1A1D',
    item: '#8d8d8e',
    active: '#FFF',
    title: '#ff9929',
    titleHover: '#ffaf29',
  },
  // text: {
  //   main: '#FFF',
  // },
  // height: {
  //   topContent: '85px',
  // },
  // padding: {
  //   content: '20px 0px',
  // },
};

import 'styled-components';
import { DefaultTheme } from 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    navbar: Navbar;
    base: Base;
    text?: any;
    height?: any;
    padding?: any;
  }
}