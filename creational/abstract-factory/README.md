# **Patrón de diseño fábrica abstracta**

----------

## **¿Qué es el patrón de diseño fábrica abstracta?**

-   Es un patrón de diseño que permite crear objetos relacionados pertenecientes a diferentes familias de objetos.
-   Encapsula la lógica de creación de objetos en una fábrica abstracta.
-   Permite cambiar fácilmente la implementación de los objetos sin afectar al resto del sistema.

----------

## **¿Cuándo usar el patrón de diseño fábrica abstracta?**

-   Cuando se necesita crear objetos relacionados pero pertenecientes a diferentes familias de objetos.
-   Cuando se quiere esconder la lógica de creación de objetos detrás de una interfaz.
-   Cuando se quiere permitir cambiar la implementación de los objetos de manera sencilla.

----------

## **Ejemplos de uso en TypeScript**

1.  Creación de objetos gráficos:

```jsx
interface Button {
  render(): void;
}

interface Window {
  addButton(button: Button): void;
}

interface GUIFactory {
  createButton(): Button;
  createWindow(): Window;
}

class WindowsButton implements Button {
  render() {
    console.log('Rendering a button in Windows style.');
  }
}

class WindowsWindow implements Window {
  addButton(button: Button) {
    console.log('Adding a button to a Windows window.');
  }
}

class WindowsFactory implements GUIFactory {
  createButton() {
    return new WindowsButton();
  }
  createWindow() {
    return new WindowsWindow();
  }
}

class MacButton implements Button {
  render() {
    console.log('Rendering a button in Mac style.');
  }
}

class MacWindow implements Window {
  addButton(button: Button) {
    console.log('Adding a button to a Mac window.');
  }
}

class MacFactory implements GUIFactory {
  createButton() {
    return new MacButton();
  }
  createWindow() {
    return new MacWindow();
  }
}

let factory: GUIFactory;
if (isWindows) {
  factory = new WindowsFactory();
} else {
  factory = new MacFactory();
}

const button = factory.createButton();
button.render();
const window = factory.createWindow();
window.addButton(button);

```

1.  Creación de objetos de conexión a bases de datos:

```jsx
interface Connection {
  execute(query: string): void;
}

interface Command {
  execute(): void;
}

interface DatabaseFactory {
  createConnection(): Connection;
  createCommand(): Command;
}

class MySQLConnection implements Connection {
  execute(query: string) {
    console.log(`Executing query ${query} on MySQL.`);
  }
}

class MySQLCommand implements Command {
  execute() {
    console.log(`Executing command on MySQL.`);
  }
}

class MySQLServerFactory implements DatabaseFactory {
  createConnection() {
    return new MySQLConnection();
  }
  createCommand() {
    return new MySQLCommand();
  }
}

class SQLiteConnection implements Connection {
  execute(query: string) {
    console.log(`Executing query ${query} on SQLite.`);
  }
}

class SQLiteCommand implements Command {
  execute() {
    console.log(`Executing command on SQLite.`);
  }
}

class SQLiteFactory implements DatabaseFactory {
  createConnection() {
    return new SQLiteConnection();
  }
  createCommand() {
    return new SQLiteCommand();
  }
}

let factory: DatabaseFactory;
if (isSQLite) {
factory = new SQLiteFactory();
} else {
factory = new MySQLServerFactory();
}

const connection = factory.createConnection();
connection.execute("SELECT * FROM users");
const command = factory.createCommand();
command.execute();


```

----------

## **Ventajas**

-   Permite cambiar fácilmente la implementación de los objetos sin afectar al resto del sistema.
-   Encapsula la lógica de creación de objetos detrás de una interfaz.
-   Promueve la reutilización de código.

----------

## **Desventajas**

-   Puede ser más compleja que otras formas de creación de objetos.
-   Puede aumentar el número de clases en el sistema.

----------

## **Conclusión**

El patrón de diseño fábrica abstracta es una técnica útil para crear objetos relacionados pertenecientes a diferentes familias de objetos de manera sencilla y manteniendo un alto nivel de abstracción. Es especialmente