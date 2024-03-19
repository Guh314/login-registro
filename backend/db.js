import mysql from "mysql";

const db_info = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "projeto"
};

export const db = mysql.createConnection(db_info);
db.connect((err) => {
    if (err) {
        console.log(err);
    }
});



// Usar o que está comentado abaixo para criar um novo banco de dados caso um não exista e criar a tabela usuários.

// Criar o banco de dados.
//db.query("CREATE DATABASE projet",((err, _) => {
//    if (err) return err;
//    return console.log('Connected');
//}));


// Criar a tabela usuarios.
//const create_table = 
//    `create table usuarios (
//	    id int unique not null auto_increment,
//        nome varchar(255),
//        email varchar(255),
//        senha varchar(255),
//        cpf varchar(255),
//        numero varchar(255),
//        PRIMARY KEY (id)
//    )`;
//db.query(create_table, ((err, _) => {
//    if (err) return err;
//    return console.log("created");
//}));

// Criar usuarios.
//import { createRandomUser } from './geradorUsuario.js';
//const q = "INSERT INTO usuarios(`nome`, `email`, `senha`, `cpf`, `numero`) VALUES (?)"
//for (let i = 0; i < 100; i++) {
//    let newUser = createRandomUser();
//    db.query(q, [Object.values(newUser)], (err, data) => {
//        if (err) return console.log(err);
//        console.log("Success");
//    });
//}


// Usar para ver se a conexão com o banco e a tabela usuários foi realizada.
//db.query("SELECT * FROM usuarios", ((err, _) => {
//    if (err) return err;
//    return console.log('Connected');
//}));


// Comando para realizar o Dump da database.
//import mysqldump from "mysqldump";
//mysqldump({
//    connection: {
//        host: "localhost",
//        user: "root",
//        password: "root",
//        database: "projeto"
//    },
//    dumpToFile: './dump.sql',
//});
