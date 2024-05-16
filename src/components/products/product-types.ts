import { Key } from "react"

export interface productTypes 
  {
    _id: string
    // _id: string
    productDetails: any
    prodId?: string
    imageUrl: {
      publicId: string
      url: string
    }[]
    productTitle: string
    price: string
    description: string
  }


export enum productEnum {
  Add,
  Edit
}
