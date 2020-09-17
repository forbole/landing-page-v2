export interface IMobileNavBarIconCSS {
  onClick?: any;
  isOpen: boolean;
  displayBackground?: boolean;
}

export interface INavBar extends IMobileNav {
  isOpen: boolean;
  toggle(): void;
}

export interface IShowLanguage {
  showLanguage: boolean;
  props?: any;
  key?: any;
}

export interface IMobileNav {
  color?: string;
  displayBackground?: boolean;
}
