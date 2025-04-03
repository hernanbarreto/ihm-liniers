import { db } from "../db";

export async function POST() {
  try {
    const [rows] = await db.query("SELECT * FROM mdc");

    const mdcData = rows.reduce((acc, row) => {
        const { MDC, ...rest } = row;
        acc[MDC] = {
          N: Boolean(rest.N),
          R: Boolean(rest.R),
          F: Boolean(rest.F),
          M: Boolean(rest.M),
          ENC: Boolean(rest.ENC),
          SD: Boolean(rest.SD),
        };
        return acc;
      }, {});    

    if (rows.length === 0) {
      return new Response(JSON.stringify({ exists: false, message: "Error en la tabla MDC" }), { status: 404 });
    }

    return new Response(JSON.stringify({exists: true, data: mdcData}), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ exists: false, message: "Error en el servidor", error: error.message }), { status: 500 });
  }
}