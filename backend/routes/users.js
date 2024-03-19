import express from "express";
import { adicionarUsuario, deleteUser, getUsuarios, updateUser, updateUser2, encontraUsuario, validarUsuario, get5users, get5common_names, get5largestPasswords } from "../controllers/user.js";

const router = express.Router()
router.post("/auth", validarUsuario)

router.get("/all", getUsuarios)

router.get("/get5users", get5users);

router.get("/get5common_names", get5common_names);

router.get("/get5passwords", get5largestPasswords);

router.post("/", adicionarUsuario)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

router.post("/find", encontraUsuario)

router.post("/update", updateUser2)

export default router;
