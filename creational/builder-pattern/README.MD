# Patrón de diseño Builder

Entendiendo el concepto detras del patron de diseño Builder usando ejemplo en TS

---

### Concepto

El patrón de diseño Builder es un patrón creacional que se utiliza para separar la construcción de un objeto complejo de su representación, permitiendo que el mismo proceso de construcción pueda crear diferentes representaciones.

En este patrón, se crea una clase "builder" que define los pasos necesarios para construir el objeto complejo. Luego, se crea una clase "director" que utiliza el builder para construir el objeto. El usuario final solo interactúa con el director, pero el builder es el encargado de realizar las tareas específicas de construcción.

En resumen, el patrón Builder se utiliza para construir objetos complejos de forma ordenada, paso a paso, y de manera desacoplada al objeto final. Esto permite construir objetos complejos de diferentes maneras, utilizando el mismo proceso de construcción.

El patrón de diseño de construcción (Builder) es un patrón de diseño de creación que permite separar la construcción de un objeto complejo de su representación, de manera que el mismo proceso de construcción pueda crear diferentes representaciones.

![Referencia de como luciría el patron](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1c8eb3f1-5e29-4f3b-9c3e-6c225761cfc3/Untitled.png)

Referencia de como luciría el patron

---

**Ventajas**:

- El patrón Builder permite separar la construcción de un objeto complejo de su representación, lo que permite construir diferentes representaciones de un mismo objeto.
- Permite construir objetos paso a paso, lo que es útil en casos en los que el objeto es complejo y su construcción requiere varios pasos.
- 3. Permite reutilizar la misma lógica de construcción para diferentes tipos de objetos, lo que aumenta la flexibilidad y la capacidad de adaptación del código.
- 4. Facilita la lectura y el mantenimiento del código, ya que la lógica de construcción está separada de la lógica de negocio.
- 5. Permite la inyección de dependencias, lo que ayuda a cumplir con los principios SOLID.
- 5. Permite la inyección de dependencias, lo que ayuda a cumplir con los principios SOLID.

- Complejidad aumentada: La implementación de un patrón de construcción puede aumentar la complejidad del código.
- Dificultad para el mantenimiento: La complejidad adicional puede dificultar el mantenimiento y la comprensión del código por parte de otros desarrolladores.
- Sobrecarga de clases: El patrón Builder puede resultar en un número excesivo de clases, lo que puede aumentar la complejidad y dificultar la comprensión del código.
- Dificultad para escalar: El patrón Builder puede resultar en una solución que no es escalable a largo plazo y requiere una reestructuración significativa cuando se agrega o cambia funcionalidad.
- Dificultad para probar: El patrón Builder puede hacer que sea más difícil probar el código debido a la complejidad adicional.

---

### ¿Cuándo usar el patrón de diseño builder?

1. Creación de objetos complejos: El patrón Builder es útil cuando se requiere crear objetos complejos con una gran cantidad de opciones de configuración.
2. Abstracción de la construcción: El patrón Builder permite abstraer la lógica de construcción de un objeto para que sea más fácil de entender y mantener.
3. Separación de preocupaciones: El patrón Builder permite separar la lógica de construcción de la lógica de negocios, lo que hace que el código sea más fácil de mantener y mejorar.
4. Reutilización de código: El patrón Builder permite reutilizar la lógica de construcción para crear objetos similares con diferentes configuraciones.
5. Flujo de construcción flexible: El patrón Builder permite especificar diferentes flujos de construcción para crear objetos de manera flexible y personalizada.

---

### Entendiendo el concepto en codigo:

```tsx
interface VehiculoBuilder {
  setModelo(modelo: string): void;
  setAnio(anio: number): void;
  setTransmision(transmision: string): void;
  setNumeroPuertas(puertas: number): void;
  getVehiculo(): Vehiculo;
  }
  
  class Vehiculo {
  modelo: string;
  anio: number;
  transmision: string;
  numeroPuertas: number;
  
  
  constructor(builder: VehiculoBuilder) {
      this.modelo = builder.modelo;
      this.anio = builder.anio;
      this.transmision = builder.transmision;
      this.numeroPuertas = builder.numeroPuertas;
  }
  
  
  }
  
  class VehiculoBuilder implements VehiculoBuilder {
  modelo: string;
  anio: number;
  transmision: string;
  numeroPuertas: number;
  
  setModelo(modelo: string): void {
      this.modelo = modelo;
  }
  
  setAnio(anio: number): void {
      this.anio = anio;
  }
  
  setTransmision(transmision: string): void {
      this.transmision = transmision;
  }
  
  setNumeroPuertas(puertas: number): void {
      this.numeroPuertas = puertas;
  }
  
  getVehiculo(): Vehiculo {
      return new Vehiculo(this);
  }
  
  
  
  }
  
  class ConstructorVehiculos {
  private builder: VehiculoBuilder;
  
  
  setBuilder(builder: VehiculoBuilder): void {
      this.builder = builder;
  }
  
  construirVehiculo(): void {
      this.builder.setModelo('Sedan');
      this.builder.setAnio(2020);
      this.builder.setTransmision('Automatico');
      this.builder.setNumeroPuertas(4);
  }
  
  
  }
  
  let constructor = new ConstructorVehiculos();
  let builder = new VehiculoBuilder();
  constructor.setBuilder(builder);
  constructor.construirVehiculo();
  let vehiculo = builder.getVehiculo();
  console.log(vehiculo); // imprime: Vehiculo { modelo: 'Sedan', anio: 2020, transmision: 'Automatico', numeroPuertas: 4 }
```

---

### Ejemplo practicos

Ejemplo #1

```jsx
interface VehiculoBuilder {
    setModelo(modelo: string): void;
    setAnio(anio: number): void;
    setTransmision(transmision: string): void;
    setNumeroPuertas(puertas: number): void;
    getVehiculo(): Vehiculo;
}

class Vehiculo {
    modelo: string;
    anio: number;
    transmision: string;
    numeroPuertas: number;

    constructor(builder: VehiculoBuilder) {
        this.modelo = builder.modelo;
        this.anio = builder.anio;
        this.transmision = builder.transmision;
        this.numeroPuertas = builder.numeroPuertas;
    }
}

class VehiculoBuilder implements VehiculoBuilder {
    modelo: string;
    anio: number;
    transmision: string;
    numeroPuertas: number;

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    setAnio(anio: number): void {
        this.anio = anio;
    }

    setTransmision(transmision: string): void {
        this.transmision = transmision;
    }

    setNumeroPuertas(puertas: number): void {
        this.numeroPuertas = puertas;
    }

    getVehiculo(): Vehiculo {
        return new Vehiculo(this);
    }
}

class ConstructorVehiculos {
    private builder: VehiculoBuilder;

    setBuilder(builder: VehiculoBuilder): void {
        this.builder = builder;
    }

    construirVehiculo(): void {
        this.builder.setModelo('Sedan');
        this.builder.setAnio(2020);
        this.builder.setTransmision('Automatico');
        this.builder.setNumeroPuertas(4);
    }
}

let constructor = new ConstructorVehiculos();
let builder = new VehiculoBuilder();
constructor.setBuilder(builder);
constructor.construirVehiculo();
let vehiculo = builder.getVehiculo();
console.log(vehiculo); // imprime: Vehiculo { modelo: 'Sedan', anio: 2020, transmision: 'Automatico', numeroPuertas: 4 }
```

Ejemplo #2:

```tsx

class EstudianteBuilder {
    private nombre: string;
    private apellido: string;
    private edad: number;
    private carrera: string;
    private universidad: string;

    setNombre(nombre: string): EstudianteBuilder {
        this.nombre = nombre;
        return this;
    }

    setApellido(apellido: string): EstudianteBuilder {
        this.apellido = apellido;
        return this;
    }

    setEdad(edad: number): EstudianteBuilder {
        this.edad = edad;
        return this;
    }

    setCarrera(carrera: string): EstudianteBuilder {
        this.carrera = carrera;
        return this;
    }

    setUniversidad(universidad: string): EstudianteBuilder {
        this.universidad = universidad;
        return this;
    }

    build(): Estudiante {
        return new Estudiante(this);
    }
}

class Estudiante {
    private nombre: string;
    private apellido: string;
    private edad: number;
    private carrera: string;
    private universidad: string;

    constructor(builder: EstudianteBuilder) {
        this.nombre = builder.nombre;
        this.apellido = builder.apellido;
        this.edad = builder.edad;
        this.carrera = builder.carrera;
        this.universidad = builder.universidad;
    }

    getNombre(): string {
        return this.nombre;
    }

    getApellido(): string {
        return this.apellido;
    }

    getEdad(): number {
        return this.edad;
    }

    getCarrera(): string {
        return this.carrera;
    }

    getUniversidad(): string {
        return this.universidad;
    }
}

let estudiante = new EstudianteBuilder()
    .setNombre("Juan")
    .setApellido("Perez")
    .setEdad(22)
    .setCarrera("Ingenieria en Sistemas")
    .setUniversidad("Universidad de los Andes")
    .build();

console.log(estudiante.getNombre());
console.log(estudiante.getApellido));

class EstudianteBuilder {
private nombre: string;
private apellido: string;
private edad: number;
private carrera: string;
private universidad: string;

setNombre(nombre: string): EstudianteBuilder {
    this.nombre = nombre;
    return this;
}

setApellido(apellido: string): EstudianteBuilder {
    this.apellido = apellido;
    return this;
}

setEdad(edad: number): EstudianteBuilder {
    this.edad = edad;
    return this;
}

setCarrera(carrera: string): EstudianteBuilder {
    this.carrera = carrera;
    return this;
}

setUniversidad(universidad: string): EstudianteBuilder {
    this.universidad = universidad;
    return this;
}

build(): Estudiante {
    return new Estudiante(this);
}

}

class Estudiante {
private nombre: string;
private apellido: string;
private edad: number;
private carrera: string;
private universidad: string;

constructor(builder: EstudianteBuilder) {
    this.nombre = builder.nombre;
    this.apellido = builder.apellido;
    this.edad = builder.edad;
    this.carrera = builder.carrera;
    this.universidad = builder.universidad;
}

getNombre(): string {
    return this.nombre;
}

getApellido(): string {
    return this.apellido;
}

getEdad(): number {
    return this.edad;
}

getCarrera(): string {
    return this.carrera;
}

getUniversidad(): string {
    return this.universidad;
}

}

let estudiante = new EstudianteBuilder()
.setNombre("Juan")
.setApellido("Perez")
.setEdad(22)
.setCarrera("Ingenieria en Sistemas")
.setUniversidad("Universidad de los Andes")
.build();

console.log(estudiante.getNombre());
console.log(estudiante.getApellido));
```

Ejercicio #3

```jsx
interface Pizza {
masa: string;
salsa: string;
relleno: string;
}

interface PizzaBuilder {
pizza: Pizza;
buildMasa(prametro:string): void;
buildSalsa(): void;
buildRelleno(): void;
}

class HawaiPizzaBuilder implements PizzaBuilder {
pizza: Pizza;

constructor() {
    this.pizza = { masa: "", salsa: "", relleno: "" };
}

buildMasa(prametro:string) {
    this.pizza.masa = prametro
}

buildSalsa() {
    this.pizza.salsa = "dulce";
}

buildRelleno() {
    this.pizza.relleno = "chorizo+alcachofas";
}
}

class PicantePizzaBuilder implements PizzaBuilder {
pizza: Pizza;

constructor() {
    this.pizza = { masa: "", salsa: "", relleno: "" };
}

buildMasa(prametro:string) {
    this.pizza.masa = prametro
}

buildSalsa() {
    this.pizza.salsa = "picante";
}

buildRelleno() {
    this.pizza.relleno = "pimienta+salchichón";
}
}

class Cocina {
private pizzaBuilder: PizzaBuilder;

setPizzaBuilder(pb: PizzaBuilder) {
    this.pizzaBuilder = pb;
}

getPizza(): Pizza {
    return this.pizzaBuilder.pizza;
}

construirPizza() {
    this.pizzaBuilder.buildMasa('dura');
    this.pizzaBuilder.buildSalsa();
    this.pizzaBuilder.buildRelleno();
}
}

class BuilderExample {
public static main() {
const cocina = new Cocina();
const hawaiPizzaBuilder = new HawaiPizzaBuilder();
const picantePizzaBuilder = new PicantePizzaBuilder();

    cocina.setPizzaBuilder(hawaiPizzaBuilder);
    cocina.construirPizza();
    picantePizzaBuilder.buildMasa('dura');
    picantePizzaBuilder.buildRelleno('ejemplo')

    const pizza = cocina.getPizza();
    console.log(pizza)
}
}

interface OtroPizzaBuilder {
pizza: Pizza;
crearNuevaPizza(): void;
buildMasa(): void;
buildSalsa(): void;
buildRelleno(): void;
}

class OtraCocina {
private pizzaBuilder: OtroPizzaBuilder;

construirPizza() {
    this.pizzaBuilder.crearNuevaPizza();
}
}
const example = new BuilderExample()

console.log(BuilderExample.main())
```

### Explicacion del ejercicio

La interface **`Pizza`** define la estructura de un objeto pizza con tres propiedades: masa, salsa y relleno.

La interface **`PizzaBuilder`** define los métodos que deben ser implementados para construir un objeto Pizza.

Las clases **`HawaiPizzaBuilder`** e **`PicantePizzaBuilder`** implementan la interface **`PizzaBuilder`** y proporcionan implementaciones específicas para construir una pizza hawaiana o picante, respectivamente.

La clase **`Cocina`** es el objeto que utiliza el patrón Builder para construir una pizza. Tiene una propiedad privada **`pizzaBuilder`** que se utiliza para almacenar una referencia a un objeto que implementa **`PizzaBuilder`**. La clase proporciona un método **`setPizzaBuilder()`** para establecer la referencia a un objeto **`PizzaBuilder`**, un método **`getPizza()`** para obtener el objeto **`Pizza`** construido y un método **`construirPizza()`** que utiliza los métodos del objeto **`PizzaBuilder`** para construir la pizza.

La clase **`BuilderExample`** proporciona un ejemplo de cómo se utiliza la clase **`Cocina`** para construir una pizza hawaiana y una pizza picante.

La interface **`OtroPizzaBuilder`** y la clase **`OtraCocina`** son un ejemplo de como se podria implementar una version diferente de la clase Cocina, pero no estan siendo utilizadas en el código.

---

### Conclusión

En conclusión, el patrón de diseño Builder es una herramienta valiosa para la creación de objetos complejos con una gran cantidad de opciones de configuración. Permite abstraer la lógica de construcción, separar las preocupaciones, reutilizar el código y especificar flujos de construcción flexibles. Sin embargo, es importante tener en cuenta que su implementación puede aumentar la complejidad del código y hacer que sea más difícil de mantener y probar. Por lo tanto, es importante considerar cuidadosamente cuándo y cómo utilizar este patrón en un proyecto para obtener los mejores resultados.