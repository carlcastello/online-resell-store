export interface IOwnProps {
  cartItem: {
    title: string,
    image?: string,
    price: string,
    quantity: number,
  }
  classes: {
    container: string,
    cardContent: string,
    detail: string,
    price: string,
    image: string
  } 
}