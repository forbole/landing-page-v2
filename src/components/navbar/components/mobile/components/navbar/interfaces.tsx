export interface IMobileNavBarIconCSS {
  onClick?: any;
  isOpen: boolean;
}

export interface INavBar {
  isOpen: boolean;
  toggle(): void;
}
