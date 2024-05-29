import Guitar from "./components/Guitar"
import Header from "./components/Header"

// custom hooks
import useCart from "./hooks/useCart";

function App() {

  // custom hook
  const { 
    data,
    carrito,
    addToCart,
    deleteItem,
    incrementarCantidad,
    decrementarCantidad,
    vaciarCarrito,
    carritoVacio,
    carritoTotal,
  
  } = useCart();
  
  return (
    <>
      <Header 
        carrito={carrito}
        deleteItem={deleteItem}
        incrementarCantidad={incrementarCantidad}
        decrementarCantidad={decrementarCantidad}
        vaciarCarrito={vaciarCarrito}
        carritoVacio={carritoVacio}
        carritoTotal={carritoTotal}
      />

      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>

          <div className="row mt-5">
              {data.map( (guitar) => 
                <Guitar 
                  guitar={guitar} 
                  key={guitar.id}
                  addToCart={addToCart}
                />
              )}
          </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
              <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
          </div>
      </footer>

    </>
  )
}

export default App
