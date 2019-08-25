export interface SideBarItems {
  key: string,
  label: string,
}

export interface IOwnState {
  selectedItems: string[],
}

export interface IOwnProps {
  header?: string,
  items: SideBarItems[],
  multiSelect?: boolean,
  classes: {
    listContainer: string,
    listItem: string
  }
}