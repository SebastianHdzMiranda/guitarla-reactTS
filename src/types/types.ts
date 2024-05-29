export type Guitar = {
    id : number
    name: string
    image: string
    description: string
    price: number
}

// Heredando propiedades de Guitar
export type CartItem = Guitar & {
    quantify: number
}