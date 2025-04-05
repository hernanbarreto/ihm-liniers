import { db } from "../db";

export async function POST() {
  try {
    const [rows] = await db.query("SELECT * FROM sen_man");

    const sen_manData = rows.reduce((acc, row) => {
        const { SEN, ...rest } = row;
        acc[SEN] = {
            R: Boolean(rest.R),
            RF: Boolean(rest.RF),
            G: Boolean(rest.G),
            GF: Boolean(rest.GF),
            V: rest.V !== null ? Boolean(rest.V) : null,  // Manejo explícito de valores NULL
            VF: rest.VF !== null ? Boolean(rest.VF) : null,
            CDV_O: rest.CDV_O !== null ? Boolean(rest.CDV_O) : null,
            IR: Boolean(rest.IR),
            SD: Boolean(rest.SD),
            X: Boolean(rest.X),
            RUTA: rest.RUTA !== null ? String(rest.RUTA) : null  // VARCHAR(10) se convierte a String
          };
        return acc;
      }, {});    

    if (rows.length === 0) {
      return new Response(JSON.stringify({ exists: false, message: "Error en la tabla SEN_MAN" }), { status: 404 });
    }

    return new Response(JSON.stringify({exists: true, data: sen_manData}), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ exists: false, message: "Error en el servidor", error: error.message }), { status: 500 });
  }
}