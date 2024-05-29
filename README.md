# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# TypeScript
    - Lenguaje de programacion
    - Subconjunto tipado de JS
    - Agrega sistema de tipos estatico a JS
    - Permite detectar errores y proporcionar herramientas de desarrollo mas solidas

    Ventajas:

        - Especificacion de variables
        - Parametros de funcion
        - Valores de retorno

# Primitive Types
    - Tipos de datos que soporta Ts:

        * number
        * string
        * boolean
        * null
        * undefined

    en caso de arrays hay una sintaxis especifica

# Types y interfaces

  - 2 caracteristicas muy usadas en typeScript
  - poca diferencia entre ambas
    
    type:
      type Guitar = {
        id : number
        name: string
        image: string
        description: string
        price: number
      }
    interface:
      interface Guitar {
        id : number
        name: string
        image: string
        description: string
        price: number
      }

# inline Type

  - Los tipos en línea (inline types) se refieren a la práctica de definir tipos directamente en el lugar donde se utilizan, en lugar de declarar un alias de tipo o una interfaz por separado. Esto puede hacer que el código sea más conciso y legible cuando se trata de tipos simples o de uso único. Los tipos en línea son especialmente útiles cuando se definen objetos o parámetros de función.

  -void: se usa principalmente para indicar que una función no devuelve un valor. 

  

  