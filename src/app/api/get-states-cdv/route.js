import { db } from "../db";

export async function POST() {
  try {
    const [rows] = await db.query("SELECT * FROM cdv");

    const cdvData = rows.reduce((acc, row) => {
        const { CDV, ...rest } = row;
        acc[CDV] = {
          L: Boolean(rest.L),
          SD: Boolean(rest.SD),
          RA: Boolean(rest.RA),
          RM: Boolean(rest.RM),
          DES: Boolean(rest.DES),
          REQN: Boolean(rest.REQN),
          REQR: Boolean(rest.REQR),
          X: Boolean(rest.X)
        };
        return acc;
      }, {});    

    if (rows.length === 0) {
      return new Response(JSON.stringify({ exists: false, message: "Error en la tabla CDV" }), { status: 404 });
    }

    return new Response(JSON.stringify({exists: true, data: cdvData}), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ exists: false, message: "Error en el servidor", error: error.message }), { status: 500 });
  }
}