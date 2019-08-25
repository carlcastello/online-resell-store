export enum IVariant { 
  PRIMARY,
  SECONDARY
}

export enum IPadding {
  SMALL,
  MEDIUM,
  LARGE
}

export interface IOwnProps {
  children: string,
  icon?: string,
  variant?: IVariant,
  classes: {
    iconStyle: string,
    primaryContainer: string,
    secondaryContainer: string,
    defaultContainer: string,
  }
}

export interface IStyleProps {
  padding?: IPadding,
}