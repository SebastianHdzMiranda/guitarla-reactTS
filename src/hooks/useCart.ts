import { useEffect, useState } from "react"
import { db } from '../data/db'
import { useMemo } from 'react'

// custom hooks 
const useCart = ()=> {

    const initialCart = () => {
        const localStorageCart = localStorage.getItem('carrito');
        // Si no es nullo returname localStorage en formato json y si es nullo returname un array
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }
    
    const [data] = useState(db);
    const [carrito, setCarrito] = useState(initialCart);

    const MAX_ITEMS = 5;
    const MIN_ITEMS = 1;

    // useEffect(() => {
    //     setData(db);
    // }, [])

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);
    

    const addToCart = (item) => {
        // Me verifica la posicion exacta donde el id es igual a item.id
        const itemExist = carrito.findIndex( guitar => guitar.id  === item.id );

        if (itemExist >= 0) {
            if (item.quantify < MAX_ITEMS) {
            const updateCarrito = [...carrito];
            updateCarrito[itemExist].quantify++;
            setCarrito(updateCarrito);
            }
            return;
        }

        item.quantify = 1;
        setCarrito( prevCarrito => [...prevCarrito, item] )
    }

    const deleteItem = (id)=> {
        const updateCarrito = carrito.filter( guitar => guitar.id !== id );
        setCarrito(updateCarrito);
    }

    const incrementarCantidad = (id)=> {
        const updateCarrito = carrito.map( item => {
            if (item.id === id && item.quantify < MAX_ITEMS) {
            item.quantify++;
            }
            return item;
        });

        setCarrito(updateCarrito);
    }

    const decrementarCantidad = (id)=>{
        const updateCarrito = carrito.map( item => {
            if (item.id === id && item.quantify > MIN_ITEMS) {
            item.quantify--;
            }
            return item;
        });
        setCarrito(updateCarrito);
    }

    const vaciarCarrito = ()=> {
        setCarrito([]);
    }

    // Logica Header.jsx

    // state Derivado (depende del estado)
    /* Use Memo 
        Hook enficado en performance de la app, evita que el codigo se ejecute (1er parametro) hasta cambie alguna de las dependencias definidas (2do parametro)
    */
    const carritoVacio = useMemo( ()=> carrito.length === 0, [carrito]);

    const carritoTotal = ()=> carrito.reduce( (total, item) => total + (item.quantify * item.price) , 0);

    return {
        data,
        carrito,
        addToCart,
        deleteItem,
        incrementarCantidad,
        decrementarCantidad,
        vaciarCarrito,
        carritoVacio,
        carritoTotal,
    }
}



export default useCart;