import { db } from "../db";

export async function POST() {
  try {
    const [rows] = await db.query("SELECT * FROM sen_prin");

    const sen_prinData = rows.reduce((acc, row) => {
        const { SEN, ...rest } = row;
        acc[SEN] = {
            R: Boolean(rest.R),
            RF: Boolean(rest.RF),
            G: rest.G !== null ? Boolean(rest.G) : null,
            GF: rest.GF !== null ? Boolean(rest.GF) : null,
            Y: rest.Y !== null ? Boolean(rest.Y) : null,       // Mapeado de V → Y
            YF: rest.YF !== null ? Boolean(rest.YF) : null,   // Mapeado de VF → YF
            YY: rest.YY !== null ? Boolean(rest.YY) : null,   // Mapeado de CDV_O → YY
            YYF: rest.YYF !== null ? Boolean(rest.YYF) : null, // Campo adicional
            SD: Boolean(rest.SD),
            BD: Boolean(rest.BD),                            // Mapeado de IR → BD
            X: Boolean(rest.X),
            RUTA: rest.RUTA !== null ? String(rest.RUTA) : null
        };
        return acc;
    }, {});  

    if (rows.length === 0) {
      return new Response(JSON.stringify({ exists: false, message: "Error en la tabla SEN_PRIN" }), { status: 404 });
    }

    return new Response(JSON.stringify({exists: true, data: sen_prinData}), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ exists: false, message: "Error en el servidor", error: error.message }), { status: 500 });
  }
}