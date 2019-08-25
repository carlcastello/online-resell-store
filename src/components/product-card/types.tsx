export interface IOwnProps {
  product: {
    id: string,
    image?: string,
    name: string,
    sellerName: string,
    price: string,
    description: string,    
  }
  classes: {
    cardMedia: string,
    cardContent: string,
    productDescription: string,
    cardAction: string,
    priceContent: string,
    addToCartButton: string,
    link: string,
  }
}