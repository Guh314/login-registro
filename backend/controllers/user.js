import { db } from "../db.js";

import mysql from 'mysql';

export const getUsuarios = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const get5users = (_, res) => {
    const q = "SELECT * FROM usuarios ORDER BY id DESC LIMIT 5";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const get5common_names = (_, res) => {
    const q = "SELECT id, nome, COUNT(nome), email, numero FROM usuarios GROUP BY nome ORDER BY COUNT(nome) DESC LIMIT 5";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const get5largestPasswords = (_, res) => {
    const q = "SELECT id, nome, email, senha, character_length(senha) FROM usuarios ORDER BY character_length(senha) DESC LIMIT 5";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

// ADICIONAR USUARIO
export const adicionarUsuario = (req, res) => {
    const q =
        "INSERT INTO usuarios(`nome`, `email`, `senha`, `cpf`, `numero`) VALUES (?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha,
        req.body.cpf,
        req.body.numero
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(values);
    });
};

// Autentica Usuario.
export const validarUsuario = (req, res) => {
    const q =
        "SELECT id, nome, email, senha, cpf, numero FROM usuarios WHERE email = " + mysql.escape(req.body.email) + " AND senha = " + mysql.escape(req.body.senha);
    const values = [
        req.body.email,
        req.body.senha
    ];

    db.query(q, [values], (err, data) => {
        if (err) { 
            return res.json(err);
        }

        return res.status(200).json(data);
    });
};

// DELETAR USUARIO
export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso!");
    });
};

// ATUALIZAR USUARIO
export const updateUser = (req, res) => {
    const q =
        "UPDATE usuarios SET `name` = ?, `email` = ?, `senha` = ?, `cpf` = ?, `numero` = ? WHERE id = ?";

    const values = [
        req.body.id,
        req.body.name,
        req.body.email,
        req.body.senha,
        cpf.body.cpf,
        numero.body.numero
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso!");
    });
};

export const updateUser2 = (req, res) => {
    const q =
        "UPDATE usuarios SET nome = " + mysql.escape(req.body.nome) + ", email = " + mysql.escape(req.body.email) + ", senha = " + mysql.escape(req.body.senha) + " WHERE id = " + mysql.escape(req.body.id);

    const values = [
        req.body.id,
        req.body.nome,
        req.body.email,
        req.body.senha,
    ];

    db.query(q, [values], (err, data) => {
        if (err) { 
            return res.json(err);
        }

        console.log(data);
        return res.status(200).json(data);
    });
};

export const encontraUsuario = (req, res) => {
    const q =
        "SELECT id, nome, email, senha FROM usuarios WHERE nome = " + mysql.escape(req.body.nome)  + " email = " + mysql.escape(req.body.email) + " AND senha = " + mysql.escape(req.body.senha);
    const values = [
        req.body.id,
        req.body.nome,
        req.body.email,
        req.body.senha
    ]

    db.query(q, [values], (err, data) => {
        if (err) { 
            return res.json(err);
        }

        return res.status(200).json(data);
    });
};


