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
const isSQLite = true;
if (isSQLite) {
factory = new SQLiteFactory();
} else {
factory = new MySQLServerFactory();
}

const connection = factory.createConnection();
connection.execute("SELECT * FROM users");
const command = factory.createCommand();
command.execute();