export interface IMobileNavBarIconCSS {
  onClick?: any;
  isOpen: boolean;
}

export interface INavBar {
  isOpen: boolean;
  toggle(): void;
  color?: string;
}

export interface IShowLanguage {
  showLanguage: boolean;
  props?: any;
  key?: any;
}

export interface IMobileNav {
  color?: string;
}
