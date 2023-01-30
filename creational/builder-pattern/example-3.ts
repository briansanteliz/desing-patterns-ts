class EstudianteBuilder {
  public nombre: string;
  public apellido: string;
  public edad: number;
  public carrera: string;
  public universidad: string;

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
console.log(estudiante.getApellido());
