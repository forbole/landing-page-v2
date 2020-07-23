export interface IMobileNavBarIconCSS {
  onClick?: any;
  isOpen: boolean;
}

export interface INavBar {
  isOpen: boolean;
  toggle(): void;
}

export interface IShowLanguage {
  showLanguage: boolean;
  props?: any;
  key?: any;
}
