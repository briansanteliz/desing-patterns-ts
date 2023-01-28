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
        picantePizzaBuilder.buildRelleno()
    
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