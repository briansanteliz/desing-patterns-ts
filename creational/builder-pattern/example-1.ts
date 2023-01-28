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
    this.builder.setModelo("Sedan");
    this.builder.setAnio(2020);
    this.builder.setTransmision("Automatico");
    this.builder.setNumeroPuertas(4);
  }
}

let constructor = new ConstructorVehiculos();
let builder = new VehiculoBuilder();
constructor.setBuilder(builder);
constructor.construirVehiculo();
let vehiculo = builder.getVehiculo();
console.log(vehiculo); // imprime: Vehiculo { modelo: 'Sedan', anio: 2020, transmision: 'Automatico', numeroPuertas: 4 }
