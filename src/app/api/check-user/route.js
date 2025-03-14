import { db } from "../db";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { token } = await req.json();

    if (!token) {
      return new Response(JSON.stringify({ exists: false, message: "Token no proporcionado" }), { status: 400 });
    }

    // Verificar el token
    let decoded;
    try {
      decoded = jwt.verify(token, "secreto_super_seguro");
    } catch (error) {
      return new Response(JSON.stringify({ exists: false, message: "Token inválido o expirado" }), { status: 401 });
    }

    // Buscar usuario en la base de datos
    const [rows] = await db.query("SELECT id, role FROM users WHERE id = ?", [decoded.id]);

    if (rows.length === 0) {
      return new Response(JSON.stringify({ exists: false, message: "Usuario no encontrado" }), { status: 404 });
    }

    const userRole = rows[0].role;
    const userId = rows[0].id;

    return new Response(JSON.stringify({ exists: true, role: userRole, id: userId }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ exists: false, message: "Error en el servidor", error: error.message }), { status: 500 });
  }
}
