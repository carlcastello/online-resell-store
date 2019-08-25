export interface IOwnProps {
  media: {
    image?: string,
    title?: string
  },
  string: {
    name: string,
    sellerName: string,
    price: string,
    description: string,
  },
  classes: {
    cardMedia: string,
    cardContent: string,
    productDescription: string,
    cardAction: string,
    priceContent: string,
    addToCartButton: string,
  }
}