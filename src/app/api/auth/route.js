import { db } from "../db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { username, password } = await req.json();  // Ajuste para el App Router

  try {
    const [rows] = await db.query("SELECT * FROM users WHERE username = ?", [username]);

    if (rows.length === 0) {
      return new Response(JSON.stringify({ message: "Usuario no encontrado" }), { status: 401 });
    }

    const user = rows[0];
    const validPassword = await bcrypt.compare(password, user.password_hash);

    if (!validPassword) {
      return new Response(JSON.stringify({ message: "Contraseña incorrecta" }), { status: 401 });
    }

    // Generar un token JWT
    const token = jwt.sign({ id: user.id, username: user.username }, "secreto_super_seguro");

    return new Response(JSON.stringify({ token }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error en el servidor", error: error.message }), { status: 500 });
  }
}
