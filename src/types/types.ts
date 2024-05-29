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

// Heredamos las props de Guitar que seleccionamos en Pick
export type PickItem = Pick< Guitar, 'id' | 'name' | 'price'> & {
    quantify: number
}

// Heredamos las props de Guitar omitiendo las declaradas en Omit
export type OmitItem = Omit< Guitar, 'id' | 'description'> & {
    quantify: number
}