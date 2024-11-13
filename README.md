
# Marvel app

## Descripción:
Solicitamos que desarrolle una app con `React-Native v0.73` que conste de un login simulado
(mediante un servicio mockeado local, que sólo deje a acceder con una combinación de
dirección de correo y contraseña en particular, devolviendo nombre y apellidos); tras el
acceso, una vista de listado de héroes de Marvel como pantalla principal; y una vista de
detalle para cada uno de los héroes
La documentación y el registro en la API de Marvel (para la obtención de las claves
necesarias) está accesible en `https://developer.marvel.com/`. Para la interacción desde
React con la mencionada API será necesario que el candidato utilice el paquete apisauce.

### Funcionalidades a implementar:

1. Pantalla de login → persistencia de datos en proveedor (mail, nombre, apellidos)
2. Autorización para la API de Marvel (según su especificación)
3. Obtener y pintar el listado de héroes, con paginación infinita, y con los siguientes
   datos por cada uno de ellos:

● Imagen

● Nombre

● Número de cómics en los que aparece

4. Cuando se pulse un héroe del listado, navegar a su detalle con:

● Nombre

● Descripción

● Imagen

● Un listado (también paginación
infinta) de los cómics en que aparece el héroe

5. Utilizar un objeto Proxy EcmaScript mediante un proveedor (que adjuntamos en el
   código base, con partes pendientes de implementar) como caché en memoria de
   peticiones de API (una segunda petición con los mismos parámetros no debe
   generar llamadas de red, si no obtener el valor transparentemente de dicho Proxy)

6. Dar la posibilidad de cerrar la sesión

## Instalación


```bash
git clone https://github.com/Gustavo19951/marvelApp.git
```
```bash
cd marvelApp
```
```bash
yarn install
```
```bash
yarn start
```

```bash
presiona la tecla a para ejecutar simulador de android
```
## Variables de entorno

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env

`API_MARVEL_URL`

`API_MARVEL_PRIVATE_KEY`

`API_MARVEL_PUBLIC_KEY`


## Autor

- [@Gustavo19951](https://github.com/Gustavo19951/)

