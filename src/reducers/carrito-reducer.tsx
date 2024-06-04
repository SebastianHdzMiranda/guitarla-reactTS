import { db } from "../data/db";
import { CartItem, Guitar } from "../types/types";


const MAX_ITEMS = 5;
const MIN_ITEMS = 1;

export type CarritoActions = 
    { type: 'add-to-cart', payload: { item: Guitar }} |
    { type: 'delete-item', payload: { id: Guitar['id'] }} |
    { type: 'incrementar-cantidad', payload: { id: Guitar['id'] }} |
    { type: 'decrementar-cantidad', payload: { id: Guitar['id'] }} |
    { type: 'vaciar-carrito' };

export type CarritoState = {
    data: Guitar[]
    carrito: CartItem[]
}


const localStorageCarrito = (): CartItem[] => {
    const carrito = localStorage.getItem('carrito');
    return carrito ? JSON.parse(carrito) : [];
}

// State inicial
export const initialState: CarritoState = {
    data: db,
    carrito: localStorageCarrito(),
}


// Reducer
export const carritoReducer = (state = initialState , action: CarritoActions) => {

    if (action.type === "add-to-cart") {

        // Me verifica la posicion exacta donde el id es igual a item.id
        const itemExist = state.carrito.find( guitar => guitar.id  === action.payload.item.id );

        let updateCarrito : CartItem[] = [];

        
        if (itemExist) {

            updateCarrito = state.carrito.map( item => {

                if (item.id === itemExist.id) {
                    if (item.quantify < MAX_ITEMS) {
                        return {...item, quantify: item.quantify++}
                    }
                }
                return item;
            });
            
        } else {
            const newItem = {...action.payload.item, quantify: 1 }
            updateCarrito = [...state.carrito, newItem ];
        }

        return {
            ...state,
            carrito: updateCarrito
        }
    }
    if (action.type === 'delete-item') {

        const updateCarrito = state.carrito.filter( guitar => guitar.id !== action.payload.id);

        return {
            ...state,
            carrito: updateCarrito
        }
    }

    if (action.type === 'decrementar-cantidad') {

        const updateCarrito = state.carrito.map( item => {

            if (item.id === action.payload.id && item.quantify > MIN_ITEMS) {
                // decrementar
                return {...item, quantify: item.quantify-1}
            } else {
                return item;
            }
        });

        return {
            ...state,
            carrito: updateCarrito
        } 
    }
    if (action.type === 'incrementar-cantidad') {
        const updateCarrito = state.carrito.map( item => {

            if (item.id === action.payload.id && item.quantify < MAX_ITEMS) {
                // incrementar
                return {...item, quantify: item.quantify+1}
            } else {
                return item;
            }
        });

        return {
            ...state,
            carrito: updateCarrito
        }
    }
    if (action.type === 'vaciar-carrito') {
        return {
            ...state,
            carrito: []
        } 
    }

    return state;
}
