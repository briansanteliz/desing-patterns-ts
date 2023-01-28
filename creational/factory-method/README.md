
# **Patrón de diseño Factory Method**

## **¿Qué es el patrón de diseño Factory Method?**

-   Es un patrón de diseño que define una interfaz para crear un objeto, pero permite a las subclases decidir cuál clase instanciar.
-   Encapsula la lógica de creación de objetos en un método específico.
-   Permite cambiar fácilmente la implementación de los objetos sin afectar al resto del sistema.

----------

## **¿Cuándo usar el patrón de diseño Factory Method?**

-   Cuando se necesita decidir en tiempo de ejecución qué clase instanciar.
-   Cuando se quiere esconder la lógica de creación de objetos detrás de una interfaz.
-   Cuando se quiere permitir cambiar la implementación de los objetos de manera sencilla.

----------

## **Ejemplos de uso en TypeScript**

1.  Creación de objetos de transporte:

```jsx
interface Transport {
  deliver(): void;
}

interface TransportFactory {
  createTransport(): Transport;
}

class Truck implements Transport {...}
class TruckFactory implements TransportFactory {...}

class Ship implements Transport {...}
class ShipFactory implements TransportFactory {...}


```

1.  Creación de objetos de comida:

```jsx
interface Food {...}
interface FoodFactory {...}

class Pizza implements Food {...}
class PizzaFactory implements FoodFactory {...}

class Tacos implements Food {...}
class TacosFactory implements FoodFactory {...}


```

----------

## **Ventajas**

-   Permite cambiar fácilmente la implementación de los objetos sin afectar al resto del sistema.
-   Encapsula la lógica de creación de objetos detrás de una interfaz.
-   Promueve la reutilización de código.
-   Permite decidir en tiempo de ejecución qué clase instanciar.

----------

## **Desventajas**

-   Puede ser más compleja que otras formas de creación de objetos.
-   Puede aumentar el número de clases en el sistema.

----------

## **Conclusión**

El patrón de diseño Factory Method es una técnica útil para crear objetos de manera sencilla, permitiendo la decisión de qué clase instanciar en tiempo de ejecución, manteniendo un alto nivel de abstracción y permitiendo cambiar fácilmente la implementación de los objetos sin afectar al resto del sistema.