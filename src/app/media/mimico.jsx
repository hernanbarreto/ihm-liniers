import * as React from "react"
const Mimico = ({cdv_prin = {}, mdc = {}, sen_man = {},...props}) => {

const estadoCDV = {
  "L":"#FFF212",
  "O":"#FF0000",
  "SD": "#808080",
  "RA": "#00FF00",
  "RM": "#A2CADF",
  "DES": "#800080",
  "REQ": "#800080",
};

const getCDVColor = (cdv) => {
  if ((cdv.SD)||(cdv.L === cdv.O)) return estadoCDV["SD"];  // Sin Datos (Máxima prioridad)
  if (cdv.O) return estadoCDV["O"];    // Ocupado
  if (cdv.RA) return estadoCDV["RA"];   // Ruta Absoluta
  if (cdv.RM) return estadoCDV["RM"];   // Ruta Maniobra
  if (cdv.DES) return estadoCDV["DES"];  // Deslizamiento
  if (cdv.REQ) return estadoCDV["REQ"];  // Requerido
  return estadoCDV["L"];;               // Libre (Menor prioridad)
};

const getCDVColorCAM = (cdv, mdc, pos) => {
  if ((mdc.N&&pos=="N")||(mdc.R&&pos=="R")) return getCDVColor(cdv);
  if ((mdc.N&&pos=="R")||(mdc.R&&pos=="N")){ 
    if ((cdv.SD)||(cdv.L === cdv.O)) return estadoCDV["SD"];
    else
    if (cdv.RA||cdv.RM) return estadoCDV["L"];
    else
    if (cdv.L) return estadoCDV["L"];
    else
    if (cdv.O) return estadoCDV["O"];
  }
};

const estadoSEN = {
  "R":"#FF0000",
  "G":"#00FF00",
  "RF": "#000000",
  "GF": "#000000",
  "SD": "#808080",
  "SA_SEM": "#000000",
  "SA_STROKE": "#FFFFFF",
  "CDV_O_SEM": "#000000",
  "CDV_O_STROKE": "#FFFFFF",
  "V": "#FF69FF",
  "VF": "#000000",
};

const getColorSenMan = (sen) => {
  if (sen.SD) return estadoSEN["SD"];
  if (sen.R&&!sen.RF) return estadoSEN["R"];
  if (sen.R&&sen.RF) return estadoSEN["RF"];
  if (sen.G&&!sen.GF) return estadoSEN["G"];
  if (sen.G&&sen.GF) return estadoSEN["GF"];
};

const getColorStrokeSenMan = (sen) => {
  if (sen.SD) return estadoSEN["SD"];
  if (sen.R) return estadoSEN["R"];
  if (sen.G) return estadoSEN["G"];
};

const getColorSenManUsoComp = (sen) => {
  if (sen.SD) return estadoSEN["SD"];
  if (sen.SA) return estadoSEN["SA_SEM"];
  if (sen.CDV_O) return estadoSEN["CDV_O_SEM"];
  if (sen.V&&!sen.VF) return estadoSEN["V"];
  if (sen.V&&sen.VF) return estadoSEN["VF"];
};
const getColorStrokeSenManUsoCom = (sen) => {
  if (sen.SD) return estadoSEN["SD"];
  if (sen.SA) return estadoSEN["SA_STROKE"];
  if (sen.CDV_O) return estadoSEN["CDV_O_STROKE"];
  if (sen.V) return estadoSEN["V"];
};

const handleLeftClick = (e) => {
    console.log(e.target);
}

const handleRightClick = (e) => {
  e.preventDefault();
  console.log(e.target);
}

return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="500mm"
    height="210mm"
    viewBox="0 0 500 210"
    onClick={handleLeftClick}
    onContextMenu={handleRightClick}
    style={{userSelect: 'none'}}
    {...props}
  >
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="b" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="c" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="d" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="e" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="f" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="g" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="h" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="i" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="k" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="l" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="m" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="n" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="o" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="j" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="p" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="q" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="s" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="r" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="t" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="u" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="v" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="x" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="y" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="A" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="B" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="C" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="F" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="G" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="z" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="H" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="D" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="E" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="I" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="w" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="J" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="K" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="L" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="M" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="O" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="N" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="P" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="Q" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="R" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="S" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="T" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="U" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="V" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="W" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="X" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="Y" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="Z" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="aa" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
      <clipPath id="ab" clipPathUnits="userSpaceOnUse">
        <path d="M-31921.776 4984.001h78516v-14672h-78516v14672" />
      </clipPath>
    </defs>
    {/*EDIFICIO*/}
    <g
      style={{
        display: "inline",
      }}
    >
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeOpacity: 1,
        }}
      >
        <g
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        >
          <path
            d="M321.568 177.12H290.92M306.19 157.938l7.716 3.858M306.19 157.938l-7.607 3.858M321.568 169.458v7.661M321.568 161.796v7.662M290.921 177.12v-15.324M313.906 161.796h7.662M290.921 161.796h7.501"
            style={{
              fill: "none",
              fillOpacity: 1,
              stroke: "#fff",
              strokeWidth: 0.4,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            transform="translate(2.646 5.82)"
          />
        </g>
        <text
          xmlSpace="preserve"
          x={290.868}
          y={181.005}
          style={{
            fontSize: ".642937px",
            fill: "#fff",
            stroke: "#fff",
            strokeWidth: 0.054,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(2.646 5.82)"
        >
          <tspan
            x="290.86844 293.36765 295.86707 297.9505 300.44989 301.49161 304.19714 306.69644 307.73816 310.85956 313.35904 316.06458 318.76996"
            y={181.005}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.7472px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "#fff",
              strokeWidth: 0.054,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
          >
            {"SALA DE MANDO"}
          </tspan>
        </text>
      </g>
      <path
        d="M311.853 75.003h40.272v12.288h-40.272z"
        style={{
          display: "inline",
          fill: "teal",
          stroke: "none",
          strokeWidth: 0.788083,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      />
      <text
        xmlSpace="preserve"
        x={321.339}
        y={82.284}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "3.175px",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={321.339}
          y={82.284}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 400,
            fontStretch: "normal",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            strokeWidth: 0.1,
          }}
        >
          {"PLATAFORMA"}
        </tspan>
      </text>
      <path
        d="M102.197 90.913h27.654v12.313h-27.654z"
        style={{
          fill: "teal",
          stroke: "none",
          strokeWidth: 3.29241,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      />
      <text
        xmlSpace="preserve"
        x={107.74}
        y={97.954}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "2.46944px",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={107.74}
          y={97.954}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 400,
            fontStretch: "normal",
            fontSize: "2.46944px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "Arial",
            strokeWidth: 0.1,
          }}
        >
          {"PLATAFORMA"}
        </tspan>
      </text>
    </g>
    {/*CDV_SEC*/}
    <g
      style={{
        display: "inline",
      }}
    >
      <path
        d="M219.277 194.004h18.845v2.311h-18.845z"
        style={{
          opacity: 1,
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.0737216,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M474.887 133.044h24.502v2.311h-24.502z"
        style={{
          fill: "olive",
          strokeWidth: 0.0840608,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M.027 84.297h10.504v2.311H.027z"
        style={{
          fill: "olive",
          strokeWidth: 0.0550394,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M.502 61.031h20.02v2.311H.502z"
        style={{
          fill: "olive",
          strokeWidth: 0.0759839,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M466.354 61.031h21.012v2.311h-21.012z"
        style={{
          fill: "olive",
          strokeWidth: 0.0778453,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M466.144 37.736h21.006v2.311h-21.006z"
        style={{
          fill: "olive",
          strokeWidth: 0.0778334,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M474.884 107.584h24.452v2.311h-24.452z"
        style={{
          fill: "olive",
          strokeWidth: 0.0839757,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M78.177 194.004H94.19v2.311H78.177z"
        style={{
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0679565,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M78.177 164.074H94.19v2.311H78.177z"
        style={{
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          strokeWidth: 0.0679565,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M98.149 81.004h1.789V89.9h-1.789z"
        style={{
          display: "inline",
          fill: "#fff",
          stroke: "#fff",
          strokeWidth: 0.393066,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M-268.286 81.042h1.789v8.896h-1.789z"
        style={{
          display: "inline",
          fill: "#fff",
          stroke: "#fff",
          strokeWidth: 0.393066,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
        transform="scale(-1 1)"
      />
    </g>
    {/*CDV_PRIN*/}
    <g
      style={{
        display: "inline",
      }}
    >
      <path
        d="M21.218 61.031h40.681v2.311H21.218z"
        style={{
          fill: getCDVColor(cdv_prin["3T"]),
          strokeWidth: 0.108316,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M119.639 61.031h52.035v2.311h-52.035z"
        style={{
          fill: getCDVColor(cdv_prin["5AT"]),
          strokeWidth: 0.122502,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M172.372 61.031h46.607v2.311h-46.607z"
        style={{
          fill: getCDVColor(cdv_prin["9T"]),
          strokeWidth: 0.115937,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M92.842 37.736h78.83v2.311h-78.83z"
        style={{
          fill: getCDVColor(cdv_prin["7T"]),
          strokeWidth: 0.150779,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M172.37 37.736h46.611v2.311H172.37z"
        style={{
          fill: getCDVColor(cdv_prin["11T"]),
          strokeWidth: 0.115942,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M82.848 133.044h29.521v2.311H82.848z"
        style={{
          fill: getCDVColor(cdv_prin["24BT"]),
          strokeWidth: 0.0922719,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M141.923 133.044h20.49v2.311h-20.49z"
        style={{
          fill: getCDVColor(cdv_prin["24T"]),
          strokeWidth: 0.0768739,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M163.114 133.044h73.501v2.311h-73.501z"
        style={{
          fill: getCDVColor(cdv_prin["20T"]),
          strokeWidth: 0.145597,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M237.315 133.044h30.817v2.311h-30.817z"
        style={{
          fill: getCDVColor(cdv_prin["14BT"]),
          strokeWidth: 0.0942761,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M177.522 107.584h59.526v2.311h-59.526z"
        style={{
          fill: getCDVColor(cdv_prin["18T"]),
          strokeWidth: 0.131024,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M82.58 107.584h58.658v2.311H82.58z"
        style={{
          fill: getCDVColor(cdv_prin["22AT"]),
          strokeWidth: 0.130064,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <g
        style={{
          fill: getCDVColor(cdv_prin["30AT"]),
          stroke: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M98.977 2.365h17.275v2.311H98.977z"
          style={{
            fill: getCDVColor(cdv_prin["30AT"]),
            stroke: "none",
            strokeWidth: 0.0705845,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
          transform="rotate(57)"
        />
        <path
          d="M11.227 84.297h40.697v2.311H11.227z"
          style={{
            fill: getCDVColor(cdv_prin["30AT"]),
            stroke: "none",
            strokeWidth: 0.108336,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      <path
        d="M190.59 84.296h28.927v2.311H190.59z"
        style={{
          fill: getCDVColor(cdv_prin["VMT"]),
          strokeWidth: 0.0913382,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M119.636 84.296h47.266v2.311h-47.266z"
        style={{
          fill: getCDVColor(cdv_prin["5BT"]),
          strokeWidth: 0.116753,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M162.504 164.074h80.227v2.311h-80.227z"
        style={{
          fill: getCDVColor(cdv_prin["V6T"]),
          strokeWidth: 0.152112,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M273.328 61.031h37.819v2.311h-37.819z"
        style={{
          fill: getCDVColor(cdv_prin["13BT"]),
          strokeWidth: 0.104436,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M311.834 61.031h43.947v2.311h-43.947z"
        style={{
          fill: getCDVColor(cdv_prin["P1T"]),
          strokeWidth: 0.112579,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M380.119 61.031h35.019v2.311h-35.019z"
        style={{
          fill: getCDVColor(cdv_prin["19CT"]),
          strokeWidth: 0.100496,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M362.663 37.736h73.616v2.311h-73.616z"
        style={{
          fill: getCDVColor(cdv_prin["21AT"]),
          strokeWidth: 0.145707,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M273.323 37.736h82.46v2.311h-82.46z"
        style={{
          fill: getCDVColor(cdv_prin["15AT"]),
          strokeWidth: 0.154211,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M356.491 37.736h5.482v2.311h-5.482zz"
        style={{
          fill: getCDVColor(cdv_prin["21T"]),
          strokeWidth: 0.0397605,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M356.495 61.031h5.482v2.311h-5.482z"
        style={{
          fill: getCDVColor(cdv_prin["19T"]),
          strokeWidth: 0.0397605,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDashaBrray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M219.484 37.736h27.025v2.311h-27.025z"
        style={{
          fill: getCDVColor(cdv_prin["15T"]),
          strokeWidth: 0.0882832,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M249.127 37.736h23.233v2.311h-23.233z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["15T"], mdc["49B"], "N"),
          strokeWidth: 0.0818553,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M-176.754-184.189h11.103v2.292h-11.103z"
        style={{
          fill: getCDVColorCAM(cdv_prin["15T"], mdc["49B"], "R"),
          strokeWidth: 0.0563507,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(-.57163 -.82051 -.8557 .51746 0 0)"
      />
      <path
        d="M-244.664-319.42h16.652v2.309h-16.652z"
        style={{
          fill: getCDVColor(cdv_prin["19BT"]),
          strokeWidth: 0.0692652,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(-.38734 -.92194 -.92379 .3829 0 0)"
      />
      <path
        d="M268.832 133.044h15.089v2.311h-15.089z"
        style={{
          fill: getCDVColorCAM(cdv_prin["14AT"], mdc["38A"], "N"),
          strokeWidth: 0.0659682,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M-210.099-218.361h11.28v2.311h-11.28z"
        style={{
          fill: getCDVColorCAM(cdv_prin["14AT"], mdc["38A"], "R"),
          strokeWidth: 0.0570312,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(-.35598 -.9345 -.95557 .29476 0 0)"
      />
      <path
        d="M311.851 133.044h43.938v2.311h-43.938z"
        style={{
          fill: getCDVColor(cdv_prin["10AT"]),
          strokeWidth: 0.112571,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M356.489 133.044h48.715v2.311h-48.715z"
        style={{
          fill: getCDVColor(cdv_prin["10T"]),
          strokeWidth: 0.118533,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M356.488 107.584h5.48v2.311h-5.48z"
        style={{
          fill: getCDVColor(cdv_prin["6CT"]),
          strokeWidth: 0.0397556,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M311.851 107.584h43.939v2.311h-43.939z"
        style={{
          fill: getCDVColor(cdv_prin["P2T"]),
          strokeWidth: 0.11257,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M-27.899 321.669h11.28v2.311h-11.28z"
        style={{
          fill: getCDVColorCAM(cdv_prin["12T"], mdc["21A"], "R"),
          strokeWidth: 0.0570312,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(.35598 -.9345 .95557 .29476 0 0)"
      />
      <path
        d="M305.78 107.584h5.371v2.311h-5.371z"
        style={{
          fill: getCDVColor(cdv_prin["12T"]),
          strokeWidth: 0.0393556,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M286.284 107.584h17.82v2.311h-17.82z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["12T"], mdc["21A"], "N"),
          strokeWidth: 0.0716889,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M179.115 398.333h11.236v2.317h-11.236z"
        style={{
          fill: getCDVColorCAM(cdv_prin["19ET"], mdc["41A"], "R"),
          strokeWidth: 0.0569898,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(.57055 -.82126 .85506 .51853 0 0)"
      />
      <path
        d="M436.999 61.031h2.079v2.311h-2.079z"
        style={{
          fill: getCDVColor(cdv_prin["19ET"]),
          strokeWidth: 0.0244862,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M441.695 61.031h23.965v2.311h-23.965z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["19ET"], mdc["41A"], "N"),
          strokeWidth: 0.083135,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M190.51 398.159h11.103v2.292H190.51z"
        style={{
          fill: getCDVColorCAM(cdv_prin["21BT"], mdc["41B"], "R"),
          strokeWidth: 0.0563507,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(.57163 -.82051 .8557 .51746 0 0)"
      />
      <path
        d="M461.749 37.736h3.707v2.311h-3.707z"
        style={{
          fill: getCDVColor(cdv_prin["21BT"]),
          strokeWidth: 0.0326963,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M436.956 37.736h22.712v2.311h-22.712z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["21BT"], mdc["41B"], "N"),
          strokeWidth: 0.0809331,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M261.093 164.074h7.04v2.311h-7.04z"
          style={{
            fill: getCDVColor(cdv_prin["14DT"]),
            strokeWidth: 0.0450595,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M243.429 164.074h15.045v2.311h-15.045z"
          style={{
            display: "inline",
            fill: getCDVColorCAM(cdv_prin["14DT"], mdc["47"], "N"),
            strokeWidth: 0.0658727,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M-84.268 300.484h30.882v2.391h-30.882z"
          style={{
            fill: getCDVColorCAM(cdv_prin["14DT"], mdc["47"], "R"),
            strokeWidth: 0.095975,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="rotate(-67.074) skewX(-.149)"
        />
        <path
          d="M-245.816-196.316h6.998v2.311h-6.998z"
          style={{
            fill: getCDVColorCAM(cdv_prin["14DT"], mdc["47"], "R"),
            strokeWidth: 0.0449258,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="scale(-1)"
        />
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M-4.665 196.818H6.571v2.317H-4.665z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["22T"], mdc["40B"], "R"),
            strokeWidth: 0.0569898,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.57055 -.82126 .85506 .51853 0 0)"
        />
        <path
          d="M141.937 107.584h19.897v2.311h-19.897z"
          style={{
            fill: getCDVColor(cdv_prin["22T"]),
            strokeWidth: 0.0757515,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M164.452 107.584h12.371v2.311h-12.371z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["22T"], mdc["40B"], "N"),
            strokeWidth: 0.0597296,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M65.738 107.584h16.145v2.311H65.738z"
          style={{
            display: "inline",
            fill: getCDVColorCAM(cdv_prin["30T"], mdc["32"], "N"),
            strokeWidth: 0.0682353,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M129.413-10.113h27.234v2.209h-27.234z"
          style={{
            fill: getCDVColorCAM(cdv_prin["30T"], mdc["32"], "R"),
            strokeWidth: 0.0866483,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.46592 .88483 -.91135 .41164 0 0)"
        />
        <path
          d="M80.186 133.044h2.035v2.311h-2.035z"
          style={{
            fill: getCDVColorCAM(cdv_prin["30T"], mdc["32"], "R"),
            stroke: "none",
            strokeWidth: 0.024227,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M116.655 2.419h11.147v2.429h-11.147z"
          style={{
            fill: getCDVColor(cdv_prin["30T"]),
            strokeWidth: 0.0581233,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.54545 .83814 -.81958 .57296 0 0)"
        />
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M117.33 164.074h10.987v2.311H117.33z"
          style={{
            fill: getCDVColor(cdv_prin["28AT"]),
            strokeWidth: 0.0562926,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M94.888 164.074h19.823v2.311H94.888z"
          style={{
            display: "inline",
            fill: getCDVColorCAM(cdv_prin["28AT"], mdc["26"], "N"),
            strokeWidth: 0.0756119,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M-140.613 168.074h30.882v2.391h-30.882z"
          style={{
            fill: getCDVColorCAM(cdv_prin["28AT"], mdc["26"], "R"),
            strokeWidth: 0.095975,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="rotate(-67.074) skewX(-.149)"
        />
        <path
          d="M-102.051-196.315h7.162v2.311h-7.162z"
          style={{
            fill: getCDVColorCAM(cdv_prin["28AT"], mdc["26"], "R"),
            strokeWidth: 0.0454482,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="scale(-1)"
        />
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M67.414 61.031h24.73v2.311h-24.73z"
          style={{
            fill: getCDVColorCAM(cdv_prin["3AT"], mdc["43"], "N"),
            strokeWidth: 0.0844515,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M-23.509 89.044H1.835v2.344h-25.344z"
          style={{
            display: "inline",
            fill: getCDVColorCAM(cdv_prin["3AT"], mdc["43"], "R"),
            strokeWidth: 0.0860903,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.49802 -.86717 .89718 .44166 0 0)"
        />
        <path
          d="M80.803 37.736h11.342v2.311H80.803z"
          style={{
            display: "inline",
            fill: getCDVColorCAM(cdv_prin["3AT"], mdc["43"], "R"),
            strokeWidth: 0.0571915,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M62.586 61.031h2.219v2.311h-2.219z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["3AT"]),
            strokeWidth: 0.0252985,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      <path
        d="M116.177 84.296h2.766v2.311h-2.766z"
        style={{
          display: "inline",
          fill: getCDVColor(cdv_prin["5T"]),
          strokeWidth: 0.0282432,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M100.121 84.296h13.435v2.311h-13.435z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["5T"], mdc["39A"], "N"),
          strokeWidth: 0.0622463,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M-135.326-52.723h21.302v2.529h-21.302z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["5T"], mdc["39A"], "R"),
          strokeWidth: 0.0819874,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(-.52567 -.85069 -.77631 .63035 0 0)"
      />
      <path
        d="M97.635 61.031h21.299v2.311H97.635z"
        style={{
          fill: getCDVColorCAM(cdv_prin["5T"], mdc["39B"], "N"),
          strokeWidth: 0.0783741,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M92.842 61.031h2.172v2.311h-2.172z"
        style={{
          display: "inline",
          fill: getCDVColor(cdv_prin["5T"]),
          strokeWidth: 0.0250284,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M6.966 196.871h11.103v2.292H6.966z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["26T"], mdc["40A"], "R"),
            strokeWidth: 0.0563507,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.57163 -.82051 .8557 .51746 0 0)"
        />
        <path
          d="M167.589 84.296h14.34v2.311h-14.34z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["26T"], mdc["40A"], "N"),
            strokeWidth: 0.0643089,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M184.548 84.296h5.344v2.311h-5.344z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["26T"]),
            strokeWidth: 0.0392592,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      <path
        d="M113.069 133.044h2.353v2.311h-2.353z"
        style={{
          fill: getCDVColor(cdv_prin["24AT"]),
          strokeWidth: 0.0260479,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M181.932 11.923h18.548v2.096h-18.548z"
        style={{
          fill: getCDVColorCAM(cdv_prin["24AT"], mdc["31B"], "R"),
          strokeWidth: 0.0696514,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(.71408 .70006 -.71407 .70007 0 0)"
      />
      <path
        d="M118.039 133.044h23.184v2.311h-23.184z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["24AT"], mdc["31B"], "N"),
          strokeWidth: 0.0817706,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M152.827 164.074h8.977v2.311h-8.977z"
        style={{
          fill: getCDVColor(cdv_prin["28T"]),
          strokeWidth: 0.0508832,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M201.25 11.768h18.527v2.094H201.25z"
        style={{
          fill: getCDVColorCAM(cdv_prin["28T"], mdc["31A"], "R"),
          strokeWidth: 0.0695717,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(.7133 .70086 -.71328 .70087 0 0)"
      />
      <path
        d="M129.017 164.074h21.192v2.311h-21.192z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["28T"], mdc["31A"], "N"),
          strokeWidth: 0.0781798,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M220.281 84.296h12.989v2.311h-12.989z"
        style={{
          fill: getCDVColor(cdv_prin["17T"]),
          strokeWidth: 0.0612043,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M52.396 242.29h11.236v2.317H52.396z"
        style={{
          fill: getCDVColorCAM(cdv_prin["17T"], mdc["17B"], "R"),
          strokeWidth: 0.0569898,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(.57055 -.82126 .85506 .51853 0 0)"
      />
      <path
        d="M235.903 84.296h12.508v2.311h-12.508z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["17T"], mdc["17B"], "N"),
          strokeWidth: 0.0600614,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M63.974 242.271h11.103v2.292H63.974z"
        style={{
          fill: getCDVColorCAM(cdv_prin["13T"], mdc["17A"], "R"),
          strokeWidth: 0.0563507,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(.57163 -.82051 .8557 .51746 0 0)"
      />
      <path
        d="M255.932 61.031h.961v2.311h-.961z"
        style={{
          fill: getCDVColor(cdv_prin["13T"]),
          strokeWidth: 0.016644,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M219.776 61.031h33.535v2.311h-33.535z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["13T"], mdc["17A"], "N"),
          strokeWidth: 0.098343,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M269.181 61.031h3.456v2.311h-3.456z"
        style={{
          fill: getCDVColor(cdv_prin["13AT"]),
          strokeWidth: 0.0315713,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M-188.845-184.455h11.236v2.317h-11.236z"
        style={{
          fill: getCDVColorCAM(cdv_prin["13AT"], mdc["49A"], "R"),
          strokeWidth: 0.0569898,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(-.57055 -.82126 -.85506 .51853 0 0)"
      />
      <path
        d="M257.591 61.031h8.973v2.311h-8.973z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["13AT"], mdc["49A"], "N"),
          strokeWidth: 0.0508695,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M-187.829-233.499h19.818v2.343h-19.818z"
        style={{
          fill: getCDVColorCAM(cdv_prin["12BT"], mdc["54B"], "R"),
          strokeWidth: 0.0761189,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(-.19748 -.9803 -.94304 .33269 0 0)"
      />
      <path
        d="M248.829 84.296h.429v2.311h-.429z"
        style={{
          fill: getCDVColor(cdv_prin["12BT"]),
          strokeWidth: 0.0111176,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M250.928 84.296h15.36v2.311h-15.36z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["12BT"], mdc["54B"], "N"),
          strokeWidth: 0.0665574,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M238.257 107.584h20.016v2.311h-20.016z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["12BT"], mdc["54A"], "N"),
          strokeWidth: 0.075978,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M259.951 107.584h8.183v2.311h-8.183z"
        style={{
          display: "inline",
          fill: getCDVColor(cdv_prin["12BT"]),
          strokeWidth: 0.0485784,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M-198.263-218.451h11.28v2.311h-11.28z"
        style={{
          fill: getCDVColorCAM(cdv_prin["12AT"], mdc["38B"], "R"),
          strokeWidth: 0.0570312,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(-.35598 -.9345 -.95557 .29476 0 0)"
      />
      <path
        d="M268.831 107.584h2.16v2.311h-2.16z"
        style={{
          fill: getCDVColor(cdv_prin["12AT"]),
          strokeWidth: 0.0249608,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M272.668 107.584h12.917v2.311h-12.917z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["12AT"], mdc["38B"], "N"),
          strokeWidth: 0.0610353,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M-7.92 317.839H7.354v1.759H-7.92z"
        style={{
          fill: getCDVColorCAM(cdv_prin["14T"], mdc["23A"], "R"),
          strokeWidth: 0.057893,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(-.49055 .87141 .89368 .4487 0 0)"
      />
      <path
        d="M-39.735 321.759h11.28v2.311h-11.28z"
        style={{
          fill: getCDVColorCAM(cdv_prin["14T"], mdc["21B"], "R"),
          strokeWidth: 0.0570312,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(.35598 -.9345 .95557 .29476 0 0)"
      />
      <path
        d="M292.909 133.044h18.242v2.311h-18.242z"
        style={{
          fill: getCDVColorCAM(cdv_prin["14T"], mdc["21B"], "N"),
          strokeWidth: 0.0725331,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M286.283 133.044h3.867v2.311h-3.867z"
        style={{
          display: "inline",
          fill: getCDVColor(cdv_prin["14T"]),
          strokeWidth: 0.0333964,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M291.099 133.044h.86v2.311h-.86z"
        style={{
          display: "inline",
          fill: getCDVColor(cdv_prin["14T"]),
          strokeWidth: 0.0157473,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M268.832 164.074h2.384v2.311h-2.384z"
        style={{
          fill: getCDVColor(cdv_prin["14CT"]),
          strokeWidth: 0.0262217,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M7.728 317.917h15.256v1.757H7.728z"
        style={{
          fill: getCDVColorCAM(cdv_prin["14CT"], mdc["23B"], "R"),
          strokeWidth: 0.057825,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(-.48955 .87197 .89319 .44968 0 0)"
      />
      <path
        d="M272.084 164.074h16.883v2.311h-16.883z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["14CT"], mdc["23B"], "N"),
          strokeWidth: 0.06978,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M-325.178-283.069h12.456v2.582h-12.456z"
        style={{
          fill: getCDVColorCAM(cdv_prin["6T"], mdc["16A"], "R"),
          strokeWidth: 0.0633459,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(-.57553 -.81778 -.85801 .51363 0 0)"
      />
      <path
        d="M407.19 107.584h9.582v2.311h-9.582z"
        style={{
          fill: getCDVColor(cdv_prin["6T"]),
          strokeWidth: 0.0525686,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M419.389 107.584h54.801v2.311h-54.801z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["6T"], mdc["16A"], "N"),
          strokeWidth: 0.125717,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M-338.248-282.969h12.456v2.582h-12.456z"
        style={{
          fill: getCDVColorCAM(cdv_prin["8T"], mdc["16B"], "R"),
          strokeWidth: 0.0633459,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(-.57553 -.81778 -.85801 .51363 0 0)"
      />
      <path
        d="M441.328 133.044h32.861v2.311h-32.861z"
        style={{
          fill: getCDVColor(cdv_prin["8T"]),
          strokeWidth: 0.0973515,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M405.905 133.044h32.805v2.311h-32.805z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["8T"], mdc["16B"], "N"),
          strokeWidth: 0.0972689,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M59.417 412.732h16.652v2.309H59.417z"
        style={{
          fill: getCDVColor(cdv_prin["6AT"]),
          strokeWidth: 0.0692652,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(.38734 -.92194 .92379 .3829 0 0)"
      />
      <path
        d="M362.664 61.031h5.36v2.311h-5.36z"
        style={{
          fill: getCDVColor(cdv_prin["19AT"]),
          strokeWidth: 0.0393175,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M-227.385-319.486h28.497v2.309h-28.497z"
        style={{
          fill: getCDVColorCAM(cdv_prin["19AT"], mdc["14A"], "R"),
          strokeWidth: 0.0906099,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(-.38734 -.92194 -.92379 .3829 0 0)"
      />
      <path
        d="M370.642 61.031h8.77v2.311h-8.77z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["19AT"], mdc["14A"], "N"),
          strokeWidth: 0.0502924,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M-250.894-319.394h5.45v2.309h-5.45z"
        style={{
          fill: getCDVColorCAM(cdv_prin["6BT"], mdc["14B"], "R"),
          strokeWidth: 0.0396263,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(-.38734 -.92194 -.92379 .3829 0 0)"
      />
      <path
        d="M362.668 107.584h28.988v2.311h-28.988z"
        style={{
          fill: getCDVColorCAM(cdv_prin["6BT"], mdc["14B"], "N"),
          strokeWidth: 0.0914344,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M53.186 412.757h5.45v2.309h-5.45z"
        style={{
          fill: getCDVColorCAM(cdv_prin["6BT"], mdc["15A"], "R"),
          strokeWidth: 0.0396263,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(.38734 -.92194 .92379 .3829 0 0)"
      />
      <path
        d="M394.275 107.584h5.59v2.311h-5.59z"
        style={{
          display: "inline",
          fill: getCDVColor(cdv_prin["6BT"]),
          strokeWidth: 0.0401501,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M402.482 107.584h4.008v2.311h-4.008z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["6BT"], mdc["15A"], "N"),
          strokeWidth: 0.0339987,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M426.115 61.031h10.178v2.311h-10.178z"
        style={{
          fill: getCDVColor(cdv_prin["19DT"]),
          strokeWidth: 0.0541792,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M76.695 412.666h28.497v2.309H76.695z"
        style={{
          fill: getCDVColorCAM(cdv_prin["19DT"], mdc["15B"], "R"),
          strokeWidth: 0.0906099,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="matrix(.38734 -.92194 .92379 .3829 0 0)"
      />
      <path
        d="M415.838 61.031h7.66v2.311h-7.66z"
        style={{
          display: "inline",
          fill: getCDVColorCAM(cdv_prin["19DT"], mdc["15B"], "N"),
          strokeWidth: 0.0470001,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
    </g>
    {/*MDC_N*/}
    <g
      style={{
        display: "inline",
      }}
    >
      <path
        d="M64.835 58.496h9.7v2.519h-9.7zM94.987 63.349h9.7v2.519h-9.7z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0552145,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M109.094 81.79h7.081v2.519h-7.081z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0471746,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M177.466 86.608h7.081v1.647h-7.081z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0381495,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M235.886 82.608h7.081v1.689h-7.081z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0386252,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M161.834 105.878h7.081v1.706h-7.081z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0388206,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M65.746 109.901h7.081v2.519h-7.081z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0471746,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M107.631 166.386h9.7v2.519h-9.7zM251.393 166.385h9.7v2.519h-9.7z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0552145,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M115.421 135.356h9.7v2.25h-9.7zM143.126 161.824h9.7v2.25h-9.7z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0521839,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M246.231 63.342h7.081v1.689h-7.081zM368.024 63.342h7.081v1.689h-7.081z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0386252,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M260.604 59.343h5.958v1.689h-5.958z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0354306,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M249.124 40.047h5.958v1.747h-5.958z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0360387,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M249.258 86.607h7.081v1.689h-7.081zM251.193 105.895h7.081v1.689h-7.081z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0386252,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M270.513 109.895h6.618v1.689h-6.618z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.037341,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M278.519 131.355h7.081v1.689h-7.081z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0386252,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M299.163 109.895h6.618v1.689h-6.618z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.037341,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M291.966 131.355h8.023v1.689h-8.023z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0411157,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M284.018 135.355h7.081v1.689h-7.081zM269.482 162.385h7.081v1.689h-7.081z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0386252,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M416.77 109.887h9.237v1.785h-9.237zM432.091 131.259h9.237v1.785h-9.237zM452.512 40.047h9.237v1.785h-9.237zM439.077 59.246h9.237v1.785h-9.237z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0453521,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M387.194 106.164h7.081v1.42h-7.081z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0354192,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M399.864 106.164h6.626v1.42h-6.626z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0342602,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M419.034 63.342h7.081v1.689h-7.081z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0386252,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
    </g>
    {/*MDC_R*/}
    <g
      style={{
        display: "inline",
      }}
    >
      {(mdc["49B"].R&&!mdc["49B"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M249.123 37.634h5.958v2.516h-5.958z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0432505,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m250.303 37.736-.017.02c-1.183 1.359.638-.728-.65.747-.292.34-.586.676-.88 1.013l3.87 5.557 1.962-1.186z"
          style={{
            display: "inline",
            fill: getCDVColorCAM(cdv_prin["15T"], mdc["49B"], "R"),
            strokeWidth: 0.0562919,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M247.389 37.736h2.913v2.311h-2.913z"
          style={{
            display: "inline",
            fill: getCDVColorCAM(cdv_prin["15T"], mdc["49B"], "R"),
            strokeWidth: 0.0289869,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["49A"].R&&!mdc["49A"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M260.603 60.929h5.958v2.516h-5.958z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0432505,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m265.385 63.343.017-.02c1.183-1.36-.638.728.65-.748.292-.339.586-.676.88-1.013l-3.87-5.556-1.962 1.186Z"
          style={{
            display: "inline",
            fill: getCDVColorCAM(cdv_prin["13AT"], mdc["49A"], "R"),
            strokeWidth: 0.0562919,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M-268.418-63.343h3.032v2.311h-3.032z"
          style={{
            display: "inline",
            fill: getCDVColorCAM(cdv_prin["13AT"], mdc["49A"], "R"),
            strokeWidth: 0.0295704,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="scale(-1)"
        />
      </g>
      )}
      {(mdc["17A"].R&&!mdc["17A"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M245.498 60.929h7.815v2.516h-7.815z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0495314,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m252.134 61.031-3.862 5.543 1.962 1.186 3.596-5.163a16.727 16.727 0 0 0-.463-.488c-.22-.213-.443-.426-.677-.624l-.458-.372a12.555 12.555 0 0 1-.098-.082z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["13T"]),
            strokeWidth: 0.0562919,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M252.135 61.031h2.872v2.311h-2.872z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["13T"]),
            strokeWidth: 0.0287812,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["17B"].R&&!mdc["17B"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M-253.306-63.445h7.479v2.533h-7.479z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0486127,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(1 0 0 .99352 489.197 147.228)"
        />
        <path
          d="m252.152 61.031-3.913 5.543 1.988 1.186 3.645-5.163a16.82 16.82 0 0 0-.47-.488 14.214 14.214 0 0 0-.686-.624l-.464-.372a13.549 13.549 0 0 1-.1-.082z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["17T"]),
            strokeWidth: 0.0566674,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(-1 0 0 -.99352 489.197 147.228)"
        />
        <path
          d="M252.135 61.031h3.104v2.311h-3.104z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["17T"]),
            strokeWidth: 0.0299186,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(-1 0 0 -.99352 489.197 147.228)"
        />
      </g>
      )}
      {(mdc["31A"].R&&!mdc["31A"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M142.183 163.97h10.643v2.519h-10.643z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.057835,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m149.576 166.39.1-.136a38.41 38.41 0 0 1 1.215-1.51l-4.502-4.414-1.497 1.468z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["28T"]),
            strokeWidth: 0.0696446,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(1 0 0 .99915 0 .137)"
        />
        <path
          d="M-151.472-166.39h1.894v2.311h-1.894z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["28T"]),
            strokeWidth: 0.023372,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(-1 0 0 -.99915 0 .137)"
        />
      </g>
      )}
      {(mdc["31B"].R&&!mdc["31B"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M115.421 132.94h10.643v2.519h-10.643z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.057835,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m118.675 133.044-.1.136a38.41 38.41 0 0 1-1.214 1.51l4.502 4.414 1.497-1.468z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["24AT"]),
            strokeWidth: 0.0696446,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M116.948 133.044h1.726v2.311h-1.726z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["24AT"]),
            strokeWidth: 0.0223089,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["47"].R&&!mdc["47"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M251.98 163.375h6.496v3.71h-6.496z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0548335,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m256.856 164.074-3.188 7.54 2.2.936 2.926-6.92c-.214-.196-.423-.398-.635-.596-.181-.176-.352-.361-.572-.49-.238-.166-.484-.318-.73-.47z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["14DT"]),
            strokeWidth: 0.0959748,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M256.857 164.074h3.363v2.311h-3.363z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["14DT"]),
            strokeWidth: 0.0311419,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["26"].R&&!mdc["26"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.204 163.375h6.496v3.71h-6.496z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0548335,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m113.092 164.074-3.188 7.54 2.2.936 2.926-6.92c-.214-.196-.423-.398-.635-.596-.181-.176-.352-.361-.572-.49-.238-.166-.484-.318-.73-.47z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["28AT"]),
            strokeWidth: 0.0959748,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M113.093 164.074h3.445v2.311h-3.445z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["28AT"]),
            strokeWidth: 0.0315215,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["32"].R&&!mdc["32"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <g
          style={{
            display: "inline",
            fill: "#000",
          }}
        >
          <path
            d="M70.379 107.322h2.514v4.564h-2.514z"
            style={{
              display: "inline",
              opacity: 1,
              fill: "#000",
              fillOpacity: 1,
              stroke: "#000",
              strokeWidth: 0.7,
              strokeLinecap: "square",
              strokeMiterlimit: 100,
              strokeDasharray: "none",
              strokeOpacity: 0,
              paintOrder: "markers stroke fill",
            }}
          />
          <path
            d="M69.587 105.757c-.314.222-.612.468-.907.714-.283.236-.553.485-.822.736l3 5.696 2.013-.91z"
            style={{
              display: "inline",
              fill: "#000",
              strokeWidth: 0.0865692,
              strokeLinecap: "square",
              strokeMiterlimit: 100,
              strokeDasharray: "none",
              paintOrder: "markers stroke fill",
            }}
          />
        </g>
        <path
          d="M68.058 107.584c-.315.222-.612.468-.908.714-.283.236-.553.485-.822.736l3 5.696 2.013-.91z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["30T"]),
            strokeWidth: 0.0865692,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M65.736 107.584h2.321v2.311h-2.321z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["30T"]),
            strokeWidth: 0.0258702,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["40B"].R&&!mdc["40B"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M164.455 107.482h7.479v2.516h-7.479z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.048455,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m165.66 109.896 2.758-3.969-1.981-1.201-2.254 3.245.23.314c.16.213.325.422.5.621.212.267.43.528.621.81l.127.18z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["22T"]),
            strokeWidth: 0.0569349,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M-165.661-109.896h2.944v2.311h-2.944z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["22T"]),
            strokeWidth: 0.0291375,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="scale(-1)"
        />
      </g>
      )}
      {(mdc["40A"].R&&!mdc["40A"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M174.369 84.209h7.561v2.519h-7.561z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0487468,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.98917 0 0 .99889 1.939 .094)"
        />
        <path
          d="m180.705 84.296-2.757 3.968 1.98 1.202 2.255-3.245c-.077-.105-.153-.21-.231-.314-.16-.213-.324-.422-.5-.621-.211-.267-.429-.529-.62-.81l-.127-.18z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["26T"]),
            strokeWidth: 0.0569349,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.98917 0 0 .99889 1.939 .094)"
        />
        <path
          d="M180.705 84.296h2.783v2.311h-2.783z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["26T"]),
            strokeWidth: 0.0283284,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.98917 0 0 .99889 1.939 .094)"
        />
      </g>
      )}
      {(mdc["39A"].R&&!mdc["39A"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M106.044 84.192h7.55v2.519h-7.55z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0487135,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M112.041 86.608a.535.535 0 0 1 .065-.08c.117-.132.22-.275.321-.419.127-.187.28-.355.429-.525.12-.146.222-.305.338-.454.076-.101.168-.186.252-.279.04-.04.075-.09.111-.136.048-.06.096-.126.145-.189l-3.26-5.274-1.963 1.595z"
          style={{
            display: "inline",
            fill: getCDVColorCAM(cdv_prin["5T"], mdc["39A"], "R"),
            strokeWidth: 0.0816487,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M-115.221-86.608h3.178v2.311h-3.178z"
          style={{
            display: "inline",
            fill: getCDVColorCAM(cdv_prin["5T"], mdc["39A"], "R"),
            strokeWidth: 0.0302758,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="scale(-1)"
        />
      </g>
      )}
      {(mdc["39B"].R&&!mdc["39B"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M97.647 60.951h8.113v2.519h-8.113z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0504946,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M99.172 61.031a.533.533 0 0 1-.065.08c-.116.132-.22.275-.32.419-.128.187-.281.355-.43.525-.12.146-.221.305-.338.454-.075.101-.168.186-.252.279-.039.04-.075.09-.11.136-.049.06-.097.126-.145.189l3.259 5.274 1.963-1.595z"
          style={{
            display: "inline",
            fill: getCDVColorCAM(cdv_prin["5T"], mdc["39B"], "R"),
            strokeWidth: 0.0816487,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M96.308 61.031h2.864v2.311h-2.864z"
          style={{
            display: "inline",
            fill: getCDVColorCAM(cdv_prin["5T"], mdc["39B"], "R"),
            strokeWidth: 0.0287378,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["54B"].R&&!mdc["54B"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M250.922 84.237h5.461v2.516h-5.461z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0414069,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m252.831 84.296-2.21.78 1.387 6.885.337-.166c.148-.07.295-.139.449-.195.094-.038.189-.075.285-.108.11-.032.21-.084.31-.135.138-.072.27-.15.406-.225.123-.07.25-.135.371-.209z"
          style={{
            display: "inline",
          fill: getCDVColor(cdv_prin["12BT"]),
            strokeWidth: 0.0757437,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M250.922 84.296h1.907v2.311h-1.907z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["12BT"]),
            strokeWidth: 0.0234517,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["43"].R&&!mdc["43"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M67.879 61.313h6.206v1.739h-6.206z"
          style={{
            display: "inline",
            opacity: 1,
            fill: "#000",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.801449,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M65.352 61.031h3.441v2.311h-3.441z"
          style={{
            display: "inline",
            fill: getCDVColorCAM(cdv_prin["3AT"], mdc["43"], "R"),
            strokeWidth: 0.0315031,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m70.703 55.324-4.502 7.84h.007c.018-.001.035-.005.054-.008.032-.005.064-.01.097-.013l.094-.01.102-.004c.041-.001.082 0 .124-.002a6.554 6.554 0 0 1 .238-.007h.142a1.884 1.884 0 0 1 .266.023c.036.006.071.014.107.023a.211.211 0 0 0 .042.008l.117.003c.064 0 .129 0 .193.002.05 0 .101.004.151.008.04.004.078.011.117.018a.974.974 0 0 0 .137.013h.055a.514.514 0 0 1 .102.01l.081.015a.36.36 0 0 1 .141.05c0-.001-.004-.002 0-.002.022.001.044.004.065.007.024.005.045.01.067.017l.06.017a.47.47 0 0 1 .032.016l4.014-6.988z"
          style={{
            display: "inline",
            fill: getCDVColorCAM(cdv_prin["3AT"], mdc["43"], "R"),
            strokeWidth: 0.0860025,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["54A"].R&&!mdc["54A"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M252.812 107.482h5.461v2.516h-5.461z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0414069,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m255.625 109.896 2.21-.78-1.387-6.886-.337.166c-.148.07-.295.14-.45.196-.093.038-.188.075-.284.108-.11.032-.21.083-.31.135-.138.071-.271.15-.406.225-.124.07-.25.135-.372.209z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["12BT"]),
            strokeWidth: 0.0757437,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M255.627 107.585h2.647v2.311h-2.647z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["12BT"]),
            strokeWidth: 0.0276313,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["38B"].R&&!mdc["38B"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M272.668 107.482h7.479v2.516h-7.479z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.048455,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M270.686 107.584h3.569v2.311h-3.569z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["12AT"]),
            strokeWidth: 0.0320843,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m274.257 107.584-2.21.681 2.139 5.612c.593-.212 1.184-.432 1.777-.644.13-.048.262-.093.393-.137z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["12AT"]),
            strokeWidth: 0.0569714,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["38A"].R&&!mdc["38A"].N)&&(
      <g
        style={{
          display: "inline",
          fill: "gray",
        }}
      >
        <path
          d="M276.444 132.942h7.479v2.516h-7.479z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.048455,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M282.722 130.052c-.48.151-.963.296-1.433.477-.246.098-.495.2-.734.315l1.72 4.511 2.208-.68z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["14AT"]),
            strokeWidth: 0.0569714,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M282.275 133.044h1.648v2.311h-1.648z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["14AT"]),
            strokeWidth: 0.0218031,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["21A"].R&&!mdc["21A"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M296.625 107.482h7.479v2.516h-7.479z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.048455,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m302.515 107.584-1.999 5.246c.204-.035.41-.051.616-.064.197-.011.393-.015.59-.018.063-.003.126-.004.19-.003.19.003.379.025.567.059.157.035.313.08.467.127l1.777-4.666z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["12T"]),
            strokeWidth: 0.0569714,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M302.511 107.584h3.268v2.311h-3.268z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["12T"]),
            strokeWidth: 0.0307,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["21B"].R&&!mdc["21B"].N)&&(
      <g
        style={{
          display: "inline",
          fill: "gray",
        }}
      >
        <path
          d="M292.908 132.942h7.479v2.516h-7.479z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.048455,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m294.011 130.153-1.722 4.521 2.208.681 1.76-4.619a9.181 9.181 0 0 0-.233-.125c-.175-.083-.35-.166-.544-.192-.25-.057-.5-.112-.752-.15-.239-.039-.479-.073-.717-.116z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["14T"]),
            strokeWidth: 0.0569714,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M292.877 133.044h1.613v2.311h-1.613z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["14T"]),
            strokeWidth: 0.0215678,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["23A"].R&&!mdc["23A"].N)&&(
      <g
        style={{
          display: "inline",
          fill: "gray",
        }}
      >
        <path
          d="M287.193 132.942h2.957v2.516h-2.957z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0304662,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m289.433 133.044-3.058 5.432.317.175c.418.206.826.428 1.23.657l3.083-5.475z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["14T"]),
            strokeWidth: 0.0578605,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M289.432 133.044h.718v2.311h-.718z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["14T"]),
            strokeWidth: 0.0143871,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["23B"].R&&!mdc["23B"].N)&&(
      <g
        style={{
          display: "inline",
          fill: "gray",
        }}
      >
        <path
          d="M272.1 163.972h5.9v2.516h-5.9z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.043038,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m275.1 158.742-3.848 6.854 1.569.79 3.943-7.023a13.4 13.4 0 0 1-1.15-.409c-.172-.07-.343-.14-.514-.212z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["14CT"]),
            strokeWidth: 0.0577955,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M272.087 164.074h.728v2.311h-.728z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["14CT"]),
            strokeWidth: 0.0144896,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["16A"].R&&!mdc["16A"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M419.397 107.482h8.968v2.516h-8.968z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0530597,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M418.521 107.584h2.391v2.311h-2.391z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["6T"]),
            strokeWidth: 0.0262581,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m420.913 107.584-2.215 1.326 3.626 5.154c.196-.17.404-.325.62-.468a7.87 7.87 0 0 1 .795-.449c.16-.074.322-.143.48-.22a6.11 6.11 0 0 1 .327-.18z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["6T"]),
            strokeWidth: 0.0632595,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["16B"].R&&!mdc["16B"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M430.122 132.942h8.587v2.516h-8.587z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0519223,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M435.299 128.198c-.046.024-.091.046-.136.072-.433.23-.856.476-1.252.766-.255.193-.504.393-.764.58l4.04 5.74 2.215-1.327z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["8T"]),
            strokeWidth: 0.0632595,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M437.19 133.044h1.521v2.311h-1.521z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["8T"]),
            strokeWidth: 0.020942,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["41B"].R&&!mdc["41B"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M451.436 37.634h8.226v2.516h-8.226z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0508178,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m457.953 37.736-3.26 4.68c.033.016.064.033.096.05.401.216.811.414 1.214.628.245.127.485.264.72.41l3.192-4.582z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["21BT"]),
            strokeWidth: 0.0562919,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M457.957 37.737h3.002v2.309h-3.002z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["21BT"]),
            strokeWidth: 0.0294121,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["41A"].R&&!mdc["41A"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M441.695 60.929h8.226v2.516h-8.226z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0508178,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m444.083 57.593-3.16 4.548 1.982 1.202 3.375-4.858-.398-.105c-.235-.07-.395-.112-.627-.2-.334-.126-.644-.305-.96-.472-.07-.04-.141-.077-.212-.115z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["19ET"]),
            strokeWidth: 0.0569349,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M440.286 61.031h2.618v2.311h-2.618z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["19ET"]),
            strokeWidth: 0.0274776,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["14A"].R&&!mdc["14A"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M370.642 61.031h6.381v2.311h-6.381z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0428974,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m372.176 61.031-2.134.884 3.856 9.177.855-.13c.501-.078 1.004-.142 1.507-.21z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["19AT"]),
            strokeWidth: 0.0906094,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M370.642 61.031h1.533v2.311h-1.533z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["19AT"]),
            strokeWidth: 0.0210298,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["14B"].R&&!mdc["14B"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M385.276 107.584h6.381v2.311h-6.381z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0428974,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m390.617 105.158-.014.002c-.053-.003-.139.048-.194.05a.988.988 0 0 0-.174.057 3.762 3.762 0 0 1-.436.143 5.865 5.865 0 0 0-.41.122c-.182.06-.365.113-.547.17-.148.045-.297.088-.445.135l1.705 4.058 2.133-.884z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["6BT"]),
            strokeWidth: 0.0396261,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M390.102 107.584h2.618v2.311h-2.618z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["6BT"]),
            strokeWidth: 0.0274776,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["15A"].R&&!mdc["15A"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M402.482 107.584h3.664v2.311h-3.664z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0325076,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m403.34 105.59-1.438 3.421 2.133.884 1.577-3.752c-.044-.008-.09-.015-.133-.024a28.818 28.818 0 0 1-.97-.207 20.757 20.757 0 0 1-1.17-.321z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["6BT"]),
            strokeWidth: 0.0396261,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M402.016 107.584h2.019v2.311h-2.019z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["6BT"]),
            strokeWidth: 0.0241309,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
      {(mdc["15B"].R&&!mdc["15B"].N)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M417.116 60.85h6.381v2.615h-6.381z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0456313,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="m421.962 61.031-4.78 11.378c.458.309.913.623 1.395.897.195.115.394.22.596.323l4.922-11.714z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["19DT"]),
            strokeWidth: 0.0906094,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
        <path
          d="M421.962 61.031h2.618v2.311h-2.618z"
          style={{
            display: "inline",
            fill: getCDVColor(cdv_prin["19DT"]),
            strokeWidth: 0.0274776,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        />
      </g>
      )}
    </g>
    {/*MDC_ESTADO*/}
    <g
      style={{
        display: "inline",
      }}
    >
      <path
        d="M161.834 107.584h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["40B"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M181.93 84.296h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["40A"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M113.559 84.296h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["39A"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M64.802 61.031h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["43"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274754,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M95.018 61.031h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["39B"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <rect
        width={2.74}
        height={2.422}
        x={124.045}
        y={2.641}
        ry={0}
        style={{
          display: "inline",
          fill: mdc["32"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0287729,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
        transform="rotate(56.844) skewX(-.15)"
      />
      <path
        d="M114.713 164.074h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["26"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M258.475 164.074h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["47"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M115.421 133.044h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["31B"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M150.209 164.074h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["31A"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M233.27 84.296h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["17B"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M253.313 61.031h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["17A"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274777,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M266.563 61.031h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["49A"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M246.509 37.736h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["49B"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M249.258 84.296h1.671v2.311h-1.671z"
        style={{
          display: "inline",
          fill: mdc["54B"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0219515,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M258.274 107.584h1.677v2.311h-1.677z"
        style={{
          display: "inline",
          fill: mdc["54A"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0219931,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M270.991 107.584h1.677v2.311h-1.677z"
        style={{
          display: "inline",
          fill: mdc["38B"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0219918,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M283.923 133.044h1.677v2.311h-1.677z"
        style={{
          display: "inline",
          fill: mdc["38A"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0219918,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M304.103 107.584h1.677v2.311h-1.677z"
        style={{
          display: "inline",
          fill: mdc["21A"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0219918,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M291.959 133.044h.949v2.311h-.949z"
        style={{
          display: "inline",
          fill: mdc["21B"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0165469,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M290.15 133.044h.949v2.311h-.949z"
        style={{
          display: "inline",
          fill: mdc["23A"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0165469,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M271.215 164.074h.88v2.311h-.88z"
        style={{
          display: "inline",
          fill: mdc["23B"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0159307,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M416.772 107.584h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["16A"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M438.71 133.044h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["16B"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M459.133 37.736h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["41B"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274777,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M439.077 61.031h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["41A"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M368.024 61.031h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["14A"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M391.657 107.584h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["14B"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M399.864 107.584h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["15A"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      <path
        d="M423.497 61.031h2.618v2.311h-2.618z"
        style={{
          display: "inline",
          fill: mdc["15B"].ENC?"blue":"#f4e3d7",
          strokeWidth: 0.0274776,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
    </g>
    {/*MDC_SP*/}
    <g
      style={{
        display: "inline",
      }}
    >
      {((!mdc["43"].N && !mdc["43"].R)||(mdc["43"].N && mdc["43"].R)) && (
      <path
        d="M64.836 58.496h9.651v6.191h-9.651z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.08634,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["39B"].N && !mdc["39B"].R)||(mdc["39B"].N && mdc["39B"].R)) && (
      <path
        d="M95.031 59.687h10.722v6.224H95.031z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0912441,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["39A"].N && !mdc["39A"].R)||(mdc["39A"].N && mdc["39A"].R)) && (
      <path
        d="M106.044 81.829h10.126v6.123h-10.126z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0879513,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["40A"].N && !mdc["40A"].R)||(mdc["40A"].N && mdc["40A"].R)) && (
      <path
        d="M174.418 82.952h10.147v5.298h-10.147z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0818957,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["40B"].N && !mdc["40B"].R)||(mdc["40B"].N && mdc["40B"].R)) && (
      <path
        d="M161.821 105.939h10.114v5.301h-10.114z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0817876,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["32"].N && !mdc["32"].R)||(mdc["32"].N && mdc["32"].R)) && (
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M124.038-1.473h5.131v5.124h-5.131z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0572714,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="rotate(58.063) skewX(.171)"
        />
        <path
          d="M65.18 106.466h7.539v5.882H65.18z"
          style={{
            display: "inline",
            fill: "#000",
            strokeWidth: 0.0743864,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="rotate(.075) skewX(.17)"
        />
      </g>
      )}
      {((!mdc["26"].N && !mdc["26"].R)||(mdc["26"].N && mdc["26"].R)) && (
      <path
        d="M108.204 162.73h9.125v6.181h-9.125z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0838877,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["31A"].N && !mdc["31A"].R)||(mdc["31A"].N && mdc["31A"].R)) && (
      <path
        d="M142.185 161.824h10.644v5.905h-10.644z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0885583,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["31B"].N && !mdc["31B"].R)||(mdc["31B"].N && mdc["31B"].R)) && (
      <path
        d="M115.421 131.7h10.642v5.906h-10.642z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0885573,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["47"].N && !mdc["47"].R)||(mdc["47"].N && mdc["47"].R)) && (
      <path
        d="M251.98 162.73h9.114v6.175h-9.114z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0837954,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["49A"].N && !mdc["49A"].R)||(mdc["49A"].N && mdc["49A"].R)) && (
      <path
        d="M260.604 59.344h8.578v5.343h-8.578z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0756224,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["17A"].N && !mdc["17A"].R)||(mdc["17A"].N && mdc["17A"].R)) && (
      <path
        d="M245.499 59.687h10.434v5.344h-10.434z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0834109,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["17B"].N && !mdc["17B"].R)||(mdc["17B"].N && mdc["17B"].R)) && (
      <path
        d="M233.27 82.609h10.098v5.302H233.27z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0817318,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["49B"].N && !mdc["49B"].R)||(mdc["49B"].N && mdc["49B"].R)) && (
      <path
        d="M246.509 36.392h8.573v5.4h-8.573z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0760034,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["54B"].N && !mdc["54B"].R)||(mdc["54B"].N && mdc["54B"].R)) && (
      <path
        d="M249.258 84.084h7.126v4.21h-7.126z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0611838,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["54A"].N && !mdc["54A"].R)||(mdc["54A"].N && mdc["54A"].R)) && (
      <path
        d="M252.812 105.895h7.155v4.196h-7.155z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0612014,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["38B"].N && !mdc["38B"].R)||(mdc["38B"].N && mdc["38B"].R)) && (
      <path
        d="M270.991 107.421h9.154v4.163h-9.154z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0689581,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["38A"].N && !mdc["38A"].R)||(mdc["38A"].N && mdc["38A"].R)) && (
      <path
        d="M276.442 131.355h9.158v4.478h-9.158z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0715288,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["23A"].N && !mdc["23A"].R)||(mdc["23A"].N && mdc["23A"].R)) && (
      <path
        d="M287.193 132.755h3.907v4.293h-3.907z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0457459,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["23B"].N && !mdc["23B"].R)||(mdc["23B"].N && mdc["23B"].R)) && (
      <path
        d="M271.214 162.384h6.783v4.595h-6.783z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0623593,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["21A"].N && !mdc["21A"].R)||(mdc["21A"].N && mdc["21A"].R)) && (
      <path
        d="M296.626 106.658h9.154v4.924h-9.154z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0749886,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["21B"].N && !mdc["21B"].R)||(mdc["21B"].N && mdc["21B"].R)) && (
      <path
        d="M291.226 131.353h9.162v4.32h-9.162z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.070268,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["16A"].N && !mdc["16A"].R)||(mdc["16A"].N && mdc["16A"].R)) && (
      <path
        d="M416.382 106.207h11.984v5.467h-11.984z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0904136,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["16B"].N && !mdc["16B"].R)||(mdc["16B"].N && mdc["16B"].R)) && (
      <path
        d="M430.124 131.26h11.203v5.674h-11.203z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0890546,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["41B"].N && !mdc["41B"].R)||(mdc["41B"].N && mdc["41B"].R)) && (
      <path
        d="M451.435 37.55h10.315v4.282h-10.315z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0742376,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["41A"].N && !mdc["41A"].R)||(mdc["41A"].N && mdc["41A"].R)) && (
      <path
        d="M439.077 59.248h10.843v4.419h-10.843z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0773192,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["14A"].N && !mdc["14A"].R)||(mdc["14A"].N && mdc["14A"].R)) && (
      <path
        d="M368.024 59.977h8.999v5.054h-8.999z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.075328,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["15B"].N && !mdc["15B"].R)||(mdc["15B"].N && mdc["15B"].R)) && (
      <path
        d="M417.116 59.631h8.999v5.401h-8.999z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0778691,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["14B"].N && !mdc["14B"].R)||(mdc["14B"].N && mdc["14B"].R)) && (
      <path
        d="M385.276 106.164h8.999v5.103h-8.999z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0756907,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
      {((!mdc["15A"].N && !mdc["15A"].R)||(mdc["15A"].N && mdc["15A"].R)) && (
      <path
        d="M399.864 106.188h6.282v4.408h-6.282z"
        style={{
          display: "inline",
          fill: "#000",
          strokeWidth: 0.0587808,
          strokeLinecap: "square",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          paintOrder: "markers stroke fill",
        }}
      />
      )}
    </g>
    {/*MDC_MF*/}
    <g
      style={{
        display: "inline",
      }}
    >
     {(mdc["43"].F||mdc["43"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["43"].M)&&(!mdc["43"].F))?"yellow":((!mdc["43"].M)&&(mdc["43"].F))?"red":((mdc["43"].M)&&(mdc["43"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 6.542 6.69)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 6.542 6.69)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["43"].M)&&(!mdc["43"].F))?"black":((!mdc["43"].M)&&(mdc["43"].F))?"white":((mdc["43"].M)&&(mdc["43"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["43"].M)&&(!mdc["43"].F))?"M":((!mdc["43"].M)&&(mdc["43"].F))?"F":((mdc["43"].M)&&(mdc["43"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
     {(mdc["39B"].F||mdc["39B"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["39B"].M)&&(!mdc["39B"].F))?"yellow":((!mdc["39B"].M)&&(mdc["39B"].F))?"red":((mdc["39B"].M)&&(mdc["39B"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 37.196 13.658)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 37.196 13.658)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["39B"].M)&&(!mdc["39B"].F))?"black":((!mdc["39B"].M)&&(mdc["39B"].F))?"white":((mdc["39B"].M)&&(mdc["39B"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["39B"].M)&&(!mdc["39B"].F))?"M":((!mdc["39B"].M)&&(mdc["39B"].F))?"F":((mdc["39B"].M)&&(mdc["39B"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
     {(mdc["39A"].F||mdc["39A"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["39A"].M)&&(!mdc["39A"].F))?"yellow":((!mdc["39A"].M)&&(mdc["39A"].F))?"red":((mdc["39A"].M)&&(mdc["39A"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 35.834 29.964)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 35.834 29.964)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["39A"].M)&&(!mdc["39A"].F))?"black":((!mdc["39A"].M)&&(mdc["39A"].F))?"white":((mdc["39A"].M)&&(mdc["39A"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["39A"].M)&&(!mdc["39A"].F))?"M":((!mdc["39A"].M)&&(mdc["39A"].F))?"F":((mdc["39A"].M)&&(mdc["39A"].F))?"F":""}
            </tspan>
        </text>
      </g>
      )}
     {(mdc["40A"].F||mdc["40A"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["40A"].M)&&(!mdc["40A"].F))?"yellow":((!mdc["40A"].M)&&(mdc["40A"].F))?"red":((mdc["40A"].M)&&(mdc["40A"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 103.965 36.922)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 103.965 36.922)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["40A"].M)&&(!mdc["40A"].F))?"black":((!mdc["40A"].M)&&(mdc["40A"].F))?"white":((mdc["40A"].M)&&(mdc["40A"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["40A"].M)&&(!mdc["40A"].F))?"M":((!mdc["40A"].M)&&(mdc["40A"].F))?"F":((mdc["40A"].M)&&(mdc["40A"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
     {(mdc["17B"].F||mdc["17B"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["17B"].M)&&(!mdc["17B"].F))?"yellow":((!mdc["17B"].M)&&(mdc["17B"].F))?"red":((mdc["17B"].M)&&(mdc["17B"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 175.636 29.994)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 175.636 29.994)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["17B"].M)&&(!mdc["17B"].F))?"black":((!mdc["17B"].M)&&(mdc["17B"].F))?"white":((mdc["17B"].M)&&(mdc["17B"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["17B"].M)&&(!mdc["17B"].F))?"M":((!mdc["17B"].M)&&(mdc["17B"].F))?"F":((mdc["17B"].M)&&(mdc["17B"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
     {(mdc["40B"].F||mdc["40B"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["40B"].M)&&(!mdc["40B"].F))?"yellow":((!mdc["40B"].M)&&(mdc["40B"].F))?"red":((mdc["40B"].M)&&(mdc["40B"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 104.246 53.246)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 104.246 53.246)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["40B"].M)&&(!mdc["40B"].F))?"black":((!mdc["40B"].M)&&(mdc["40B"].F))?"white":((mdc["40B"].M)&&(mdc["40B"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["40B"].M)&&(!mdc["40B"].F))?"M":((!mdc["40B"].M)&&(mdc["40B"].F))?"F":((mdc["40B"].M)&&(mdc["40B"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
     {(mdc["26"].F||mdc["26"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["26"].M)&&(!mdc["26"].F))?"yellow":((!mdc["26"].M)&&(mdc["26"].F))?"red":((mdc["26"].M)&&(mdc["26"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 38.232 116.714)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 38.232 116.714)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["26"].M)&&(!mdc["26"].F))?"black":((!mdc["26"].M)&&(mdc["26"].F))?"white":((mdc["26"].M)&&(mdc["26"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["26"].M)&&(!mdc["26"].F))?"M":((!mdc["26"].M)&&(mdc["26"].F))?"F":((mdc["26"].M)&&(mdc["26"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
     {(mdc["47"].F||mdc["47"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["47"].M)&&(!mdc["47"].F))?"yellow":((!mdc["47"].M)&&(mdc["47"].F))?"red":((mdc["47"].M)&&(mdc["47"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 182 116.697)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 182 116.697)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["47"].M)&&(!mdc["47"].F))?"black":((!mdc["47"].M)&&(mdc["47"].F))?"white":((mdc["47"].M)&&(mdc["47"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["47"].M)&&(!mdc["47"].F))?"M":((!mdc["47"].M)&&(mdc["47"].F))?"F":((mdc["47"].M)&&(mdc["47"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
     {(mdc["32"].F||mdc["32"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["32"].M)&&(!mdc["32"].F))?"yellow":((!mdc["32"].M)&&(mdc["32"].F))?"red":((mdc["32"].M)&&(mdc["32"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 5.473 60.23)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 5.473 60.23)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["32"].M)&&(!mdc["32"].F))?"black":((!mdc["32"].M)&&(mdc["32"].F))?"white":((mdc["32"].M)&&(mdc["32"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["32"].M)&&(!mdc["32"].F))?"M":((!mdc["32"].M)&&(mdc["32"].F))?"F":((mdc["32"].M)&&(mdc["32"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["31B"].F||mdc["31B"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["31B"].M)&&(!mdc["31B"].F))?"yellow":((!mdc["31B"].M)&&(mdc["31B"].F))?"red":((mdc["31B"].M)&&(mdc["31B"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 59.531 85.677)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 59.531 85.677)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["31B"].M)&&(!mdc["31B"].F))?"black":((!mdc["31B"].M)&&(mdc["31B"].F))?"white":((mdc["31B"].M)&&(mdc["31B"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["31B"].M)&&(!mdc["31B"].F))?"M":((!mdc["31B"].M)&&(mdc["31B"].F))?"F":((mdc["31B"].M)&&(mdc["31B"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["31A"].F||mdc["31A"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["31A"].M)&&(!mdc["31A"].F))?"yellow":((!mdc["31A"].M)&&(mdc["31A"].F))?"red":((mdc["31A"].M)&&(mdc["31A"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 70.567 109.75)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 70.567 109.75)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["31A"].M)&&(!mdc["31A"].F))?"black":((!mdc["31A"].M)&&(mdc["31A"].F))?"white":((mdc["31A"].M)&&(mdc["31A"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["31A"].M)&&(!mdc["31A"].F))?"M":((!mdc["31A"].M)&&(mdc["31A"].F))?"F":((mdc["31A"].M)&&(mdc["31A"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["17A"].F||mdc["17A"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["17A"].M)&&(!mdc["17A"].F))?"yellow":((!mdc["17A"].M)&&(mdc["17A"].F))?"red":((mdc["17A"].M)&&(mdc["17A"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 175.403 13.67)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 175.403 13.67)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["17A"].M)&&(!mdc["17A"].F))?"black":((!mdc["17A"].M)&&(mdc["17A"].F))?"white":((mdc["17A"].M)&&(mdc["17A"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["17A"].M)&&(!mdc["17A"].F))?"M":((!mdc["17A"].M)&&(mdc["17A"].F))?"F":((mdc["17A"].M)&&(mdc["17A"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["14A"].F||mdc["14A"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["14A"].M)&&(!mdc["14A"].F))?"yellow":((!mdc["14A"].M)&&(mdc["14A"].F))?"red":((mdc["14A"].M)&&(mdc["14A"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 308.827 13.65)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 308.827 13.65)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["14A"].M)&&(!mdc["14A"].F))?"black":((!mdc["14A"].M)&&(mdc["14A"].F))?"white":((mdc["14A"].M)&&(mdc["14A"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["14A"].M)&&(!mdc["14A"].F))?"M":((!mdc["14A"].M)&&(mdc["14A"].F))?"F":((mdc["14A"].M)&&(mdc["14A"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["14B"].F||mdc["14B"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["14B"].M)&&(!mdc["14B"].F))?"yellow":((!mdc["14B"].M)&&(mdc["14B"].F))?"red":((mdc["14B"].M)&&(mdc["14B"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 315.293 53.25)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 315.293 53.25)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["14B"].M)&&(!mdc["14B"].F))?"black":((!mdc["14B"].M)&&(mdc["14B"].F))?"white":((mdc["14B"].M)&&(mdc["14B"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["14B"].M)&&(!mdc["14B"].F))?"M":((!mdc["14B"].M)&&(mdc["14B"].F))?"F":((mdc["14B"].M)&&(mdc["14B"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["49A"].F||mdc["49A"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["49A"].M)&&(!mdc["49A"].F))?"yellow":((!mdc["49A"].M)&&(mdc["49A"].F))?"red":((mdc["49A"].M)&&(mdc["49A"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 188.562 6.666)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 188.562 6.666)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["49A"].M)&&(!mdc["49A"].F))?"black":((!mdc["49A"].M)&&(mdc["49A"].F))?"white":((mdc["49A"].M)&&(mdc["49A"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["49A"].M)&&(!mdc["49A"].F))?"M":((!mdc["49A"].M)&&(mdc["49A"].F))?"F":((mdc["49A"].M)&&(mdc["49A"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["49B"].F||mdc["49B"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["49B"].M)&&(!mdc["49B"].F))?"yellow":((!mdc["49B"].M)&&(mdc["49B"].F))?"red":((mdc["49B"].M)&&(mdc["49B"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 188.891 -9.618)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 188.891 -9.618)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["49B"].M)&&(!mdc["49B"].F))?"black":((!mdc["49B"].M)&&(mdc["49B"].F))?"white":((mdc["49B"].M)&&(mdc["49B"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["49B"].M)&&(!mdc["49B"].F))?"M":((!mdc["49B"].M)&&(mdc["49B"].F))?"F":((mdc["49B"].M)&&(mdc["49B"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["54B"].F||mdc["54B"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["54B"].M)&&(!mdc["54B"].F))?"yellow":((!mdc["54B"].M)&&(mdc["54B"].F))?"red":((mdc["54B"].M)&&(mdc["54B"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 187.951 36.918)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 187.951 36.918)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["54B"].M)&&(!mdc["54B"].F))?"black":((!mdc["54B"].M)&&(mdc["54B"].F))?"white":((mdc["54B"].M)&&(mdc["54B"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["54B"].M)&&(!mdc["54B"].F))?"M":((!mdc["54B"].M)&&(mdc["54B"].F))?"F":((mdc["54B"].M)&&(mdc["54B"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["54A"].F||mdc["54A"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["54A"].M)&&(!mdc["54A"].F))?"yellow":((!mdc["54A"].M)&&(mdc["54A"].F))?"red":((mdc["54A"].M)&&(mdc["54A"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 182.265 53.23)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 182.265 53.23)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["54A"].M)&&(!mdc["54A"].F))?"black":((!mdc["54A"].M)&&(mdc["54A"].F))?"white":((mdc["54A"].M)&&(mdc["54A"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["54A"].M)&&(!mdc["54A"].F))?"M":((!mdc["54A"].M)&&(mdc["54A"].F))?"F":((mdc["54A"].M)&&(mdc["54A"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["38B"].F||mdc["38B"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["38B"].M)&&(!mdc["38B"].F))?"yellow":((!mdc["38B"].M)&&(mdc["38B"].F))?"red":((mdc["38B"].M)&&(mdc["38B"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 210.618 60.208)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 210.618 60.208)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["38B"].M)&&(!mdc["38B"].F))?"black":((!mdc["38B"].M)&&(mdc["38B"].F))?"white":((mdc["38B"].M)&&(mdc["38B"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["38B"].M)&&(!mdc["38B"].F))?"M":((!mdc["38B"].M)&&(mdc["38B"].F))?"F":((mdc["38B"].M)&&(mdc["38B"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["38A"].F||mdc["38A"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["38A"].M)&&(!mdc["38A"].F))?"yellow":((!mdc["38A"].M)&&(mdc["38A"].F))?"red":((mdc["38A"].M)&&(mdc["38A"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 207.709 78.729)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 207.709 78.729)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["38A"].M)&&(!mdc["38A"].F))?"black":((!mdc["38A"].M)&&(mdc["38A"].F))?"white":((mdc["38A"].M)&&(mdc["38A"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["38A"].M)&&(!mdc["38A"].F))?"M":((!mdc["38A"].M)&&(mdc["38A"].F))?"F":((mdc["38A"].M)&&(mdc["38A"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["21A"].F||mdc["21A"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["21A"].M)&&(!mdc["21A"].F))?"yellow":((!mdc["21A"].M)&&(mdc["21A"].F))?"red":((mdc["21A"].M)&&(mdc["21A"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 227.955 60.176)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 227.955 60.176)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["21A"].M)&&(!mdc["21A"].F))?"black":((!mdc["21A"].M)&&(mdc["21A"].F))?"white":((mdc["21A"].M)&&(mdc["21A"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["21A"].M)&&(!mdc["21A"].F))?"M":((!mdc["21A"].M)&&(mdc["21A"].F))?"F":((mdc["21A"].M)&&(mdc["21A"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["16A"].F||mdc["16A"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["16A"].M)&&(!mdc["16A"].F))?"yellow":((!mdc["16A"].M)&&(mdc["16A"].F))?"red":((mdc["16A"].M)&&(mdc["16A"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 359.544 60.22)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 359.544 60.22)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["16A"].M)&&(!mdc["16A"].F))?"black":((!mdc["16A"].M)&&(mdc["16A"].F))?"white":((mdc["16A"].M)&&(mdc["16A"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["16A"].M)&&(!mdc["16A"].F))?"M":((!mdc["16A"].M)&&(mdc["16A"].F))?"F":((mdc["16A"].M)&&(mdc["16A"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["21B"].F||mdc["21B"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["21B"].M)&&(!mdc["21B"].F))?"yellow":((!mdc["21B"].M)&&(mdc["21B"].F))?"red":((mdc["21B"].M)&&(mdc["21B"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 230.877 78.724)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 230.877 78.724)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["21B"].M)&&(!mdc["21B"].F))?"black":((!mdc["21B"].M)&&(mdc["21B"].F))?"white":((mdc["21B"].M)&&(mdc["21B"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["21B"].M)&&(!mdc["21B"].F))?"M":((!mdc["21B"].M)&&(mdc["21B"].F))?"F":((mdc["21B"].M)&&(mdc["21B"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["23A"].F||mdc["23A"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["23A"].M)&&(!mdc["23A"].F))?"yellow":((!mdc["23A"].M)&&(mdc["23A"].F))?"red":((mdc["23A"].M)&&(mdc["23A"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 213.585 85.691)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 213.585 85.691)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["23A"].M)&&(!mdc["23A"].F))?"black":((!mdc["23A"].M)&&(mdc["23A"].F))?"white":((mdc["23A"].M)&&(mdc["23A"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["23A"].M)&&(!mdc["23A"].F))?"M":((!mdc["23A"].M)&&(mdc["23A"].F))?"F":((mdc["23A"].M)&&(mdc["23A"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["23B"].F||mdc["23B"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["23B"].M)&&(!mdc["23B"].F))?"yellow":((!mdc["23B"].M)&&(mdc["23B"].F))?"red":((mdc["23B"].M)&&(mdc["23B"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 210.466 109.754)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 210.466 109.754)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["23B"].M)&&(!mdc["23B"].F))?"black":((!mdc["23B"].M)&&(mdc["23B"].F))?"white":((mdc["23B"].M)&&(mdc["23B"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["23B"].M)&&(!mdc["23B"].F))?"M":((!mdc["23B"].M)&&(mdc["23B"].F))?"F":((mdc["23B"].M)&&(mdc["23B"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["16B"].F||mdc["16B"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["16B"].M)&&(!mdc["16B"].F))?"yellow":((!mdc["16B"].M)&&(mdc["16B"].F))?"red":((mdc["16B"].M)&&(mdc["16B"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 360.362 78.696)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 360.362 78.696)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["16B"].M)&&(!mdc["16B"].F))?"black":((!mdc["16B"].M)&&(mdc["16B"].F))?"white":((mdc["16B"].M)&&(mdc["16B"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["16B"].M)&&(!mdc["16B"].F))?"M":((!mdc["16B"].M)&&(mdc["16B"].F))?"F":((mdc["16B"].M)&&(mdc["16B"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["41B"].F||mdc["41B"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["41B"].M)&&(!mdc["41B"].F))?"yellow":((!mdc["41B"].M)&&(mdc["41B"].F))?"red":((mdc["41B"].M)&&(mdc["41B"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 381.218 -9.616)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 381.218 -9.616)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["41B"].M)&&(!mdc["41B"].F))?"black":((!mdc["41B"].M)&&(mdc["41B"].F))?"white":((mdc["41B"].M)&&(mdc["41B"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["41B"].M)&&(!mdc["41B"].F))?"M":((!mdc["41B"].M)&&(mdc["41B"].F))?"F":((mdc["41B"].M)&&(mdc["41B"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["41A"].F||mdc["41A"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["41A"].M)&&(!mdc["41A"].F))?"yellow":((!mdc["41A"].M)&&(mdc["41A"].F))?"red":((mdc["41A"].M)&&(mdc["41A"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 381.465 6.672)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 381.465 6.672)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["41A"].M)&&(!mdc["41A"].F))?"black":((!mdc["41A"].M)&&(mdc["41A"].F))?"white":((mdc["41A"].M)&&(mdc["41A"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["41A"].M)&&(!mdc["41A"].F))?"M":((!mdc["41A"].M)&&(mdc["41A"].F))?"F":((mdc["41A"].M)&&(mdc["41A"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["15A"].F||mdc["15A"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["15A"].M)&&(!mdc["15A"].F))?"yellow":((!mdc["15A"].M)&&(mdc["15A"].F))?"red":((mdc["15A"].M)&&(mdc["15A"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 340.601 53.25)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 340.601 53.25)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["15A"].M)&&(!mdc["15A"].F))?"black":((!mdc["15A"].M)&&(mdc["15A"].F))?"white":((mdc["15A"].M)&&(mdc["15A"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["15A"].M)&&(!mdc["15A"].F))?"M":((!mdc["15A"].M)&&(mdc["15A"].F))?"F":((mdc["15A"].M)&&(mdc["15A"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
      {(mdc["15B"].F||mdc["15B"].M)&&(
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M74.877 55.298h5.622v4.432h-5.622z"
          style={{
            display: "inline",
            opacity: 1,
            fill: ((mdc["15B"].M)&&(!mdc["15B"].F))?"yellow":((!mdc["15B"].M)&&(mdc["15B"].F))?"red":((mdc["15B"].M)&&(mdc["15B"].F))?"red":"black",
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 347.133 13.65)"
        />
        <text
          xmlSpace="preserve"
          x={76.675}
          y={58.65}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "Arial",
            InkscapeFontSpecification: "&quot",
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 0,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(.88932 0 0 .90436 347.133 13.65)"
        >
          <tspan
            x={76.675}
            y={58.65}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "3.175px",
              fontFamily: "Arial",
              InkscapeFontSpecification: "&quot",
              fill: ((mdc["15B"].M)&&(!mdc["15B"].F))?"black":((!mdc["15B"].M)&&(mdc["15B"].F))?"white":((mdc["15B"].M)&&(mdc["15B"].F))?"white":"black",
              fillOpacity: 1,
              strokeWidth: 0.7,
            }}
          >
            {((mdc["15B"].M)&&(!mdc["15B"].F))?"M":((!mdc["15B"].M)&&(mdc["15B"].F))?"F":((mdc["15B"].M)&&(mdc["15B"].F))?"F":""}
          </tspan>
        </text>
      </g>
      )}
    </g>
    {/*PAN*/}
    <g
      style={{
        display: "inline",
      }}
    >
      <g
        style={{
          display: "inline",
          fill: "#0f0",
        }}
      >
        <path
          d="M269.6 16.047h.786v183.785h-.786z"
          style={{
            display: "inline",
            opacity: 1,
            fill: "red",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.90366,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
        />
        <g
          style={{
            display: "inline",
            fill: "#0f0",
            stroke: "#0f0",
            strokeWidth: 0.904,
            strokeLinecap: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        >
          <path
            d="m298.125 181.708 2.26 3.457M302.67 181.7l-2.26 3.457"
            style={{
              display: "inline",
              fill: "none",
              fillOpacity: 1,
              stroke: "red",
              strokeWidth: 0.904,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            transform="translate(-30.405 -169.263)"
          />
        </g>
        <g
          style={{
            display: "inline",
            fill: "#0f0",
            stroke: "#0f0",
            strokeWidth: 0.904,
            strokeLinecap: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        >
          <path
            d="m298.125 181.708 2.26 3.457M302.67 181.7l-2.26 3.457"
            style={{
              display: "inline",
              fill: "none",
              fillOpacity: 1,
              stroke: "red",
              strokeWidth: 0.904,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            transform="matrix(1 0 0 -1 -30.405 385.113)"
          />
        </g>
        <g
          style={{
            display: "inline",
            fill: "#00f",
          }}
        >
          <path
            d="M269.148 164.074h1.689v2.311h-1.689zM269.148 133.044h1.689v2.311h-1.689zM269.149 37.742h1.689v2.311h-1.689zM269.148 61.031h1.689v2.311h-1.689zM269.148 107.584h1.689v2.311h-1.689z"
            style={{
              display: "inline",
              fill: "#00f",
              strokeWidth: 0,
              strokeLinecap: "square",
              strokeMiterlimit: 100,
              strokeDasharray: "none",
              paintOrder: "markers stroke fill",
            }}
          />
        </g>
        <text
          xmlSpace="preserve"
          x={265.806}
          y={10.319}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 400,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "sans-serif",
            InkscapeFontSpecification: "sans-serif",
            display: "inline",
            opacity: 1,
            fill: "#fff",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeLinecap: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
        >
          <tspan
            x={265.806}
            y={10.319}
            style={{
              fill: "#fff",
              stroke: "none",
              strokeWidth: 0,
            }}
          >
            {"PAN1"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          fill: "#0f0",
        }}
      >
        <path
          d="M269.6 16.047h.786v183.785h-.786z"
          style={{
            display: "inline",
            opacity: 1,
            fill: "red",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.90366,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
          transform="translate(88.84)"
        />
        <g
          style={{
            display: "inline",
            fill: "#0f0",
            stroke: "#0f0",
            strokeWidth: 0.904,
            strokeLinecap: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        >
          <path
            d="m298.125 181.708 2.26 3.457M302.67 181.7l-2.26 3.457"
            style={{
              display: "inline",
              fill: "none",
              fillOpacity: 1,
              stroke: "red",
              strokeWidth: 0.904,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            transform="translate(58.435 -169.263)"
          />
        </g>
        <g
          style={{
            display: "inline",
            fill: "#0f0",
            stroke: "#0f0",
            strokeWidth: 0.904,
            strokeLinecap: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        >
          <path
            d="m298.125 181.708 2.26 3.457M302.67 181.7l-2.26 3.457"
            style={{
              display: "inline",
              fill: "none",
              fillOpacity: 1,
              stroke: "red",
              strokeWidth: 0.904,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            transform="matrix(1 0 0 -1 58.435 385.113)"
          />
        </g>
        <g
          style={{
            display: "inline",
            fill: "#00f",
          }}
        >
          <path
            d="M269.148 133.044h1.689v2.311h-1.689zM269.149 37.742h1.689v2.311h-1.689zM269.148 61.031h1.689v2.311h-1.689zM269.148 107.584h1.689v2.311h-1.689z"
            style={{
              display: "inline",
              fill: "#00f",
              strokeWidth: 0,
              strokeLinecap: "square",
              strokeMiterlimit: 100,
              strokeDasharray: "none",
              paintOrder: "markers stroke fill",
            }}
            transform="translate(88.84)"
          />
        </g>
        <text
          xmlSpace="preserve"
          x={265.806}
          y={10.319}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 400,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "sans-serif",
            InkscapeFontSpecification: "sans-serif",
            display: "inline",
            opacity: 1,
            fill: "#fff",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeLinecap: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
          transform="translate(88.84)"
        >
          <tspan
            x={265.806}
            y={10.319}
            style={{
              fill: "#fff",
              stroke: "none",
              strokeWidth: 0,
            }}
          >
            {"PAN2"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          fill: "#0f0",
        }}
      >
        <path
          d="M269.6 16.047h.786v183.785h-.786z"
          style={{
            display: "inline",
            opacity: 1,
            fill: "red",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.90366,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
          transform="translate(214.855)"
        />
        <g
          style={{
            display: "inline",
            fill: "#0f0",
            stroke: "#0f0",
            strokeWidth: 0.904,
            strokeLinecap: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        >
          <path
            d="m298.125 181.708 2.26 3.457M302.67 181.7l-2.26 3.457"
            style={{
              display: "inline",
              fill: "none",
              fillOpacity: 1,
              stroke: "red",
              strokeWidth: 0.904,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            transform="translate(184.45 -169.263)"
          />
        </g>
        <g
          style={{
            display: "inline",
            fill: "#0f0",
            stroke: "#0f0",
            strokeWidth: 0.904,
            strokeLinecap: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        >
          <path
            d="m298.125 181.708 2.26 3.457M302.67 181.7l-2.26 3.457"
            style={{
              display: "inline",
              fill: "none",
              fillOpacity: 1,
              stroke: "red",
              strokeWidth: 0.904,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            transform="matrix(1 0 0 -1 184.45 385.113)"
          />
        </g>
        <g
          style={{
            display: "inline",
            fill: "#00f",
          }}
        >
          <path
            d="M269.148 133.044h1.689v2.311h-1.689zM269.149 37.742h1.689v2.311h-1.689zM269.148 61.031h1.689v2.311h-1.689zM269.148 107.584h1.689v2.311h-1.689z"
            style={{
              display: "inline",
              fill: "#00f",
              strokeWidth: 0,
              strokeLinecap: "square",
              strokeMiterlimit: 100,
              strokeDasharray: "none",
              paintOrder: "markers stroke fill",
            }}
            transform="translate(214.855)"
          />
        </g>
        <text
          xmlSpace="preserve"
          x={265.806}
          y={10.319}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 400,
            fontStretch: "normal",
            fontSize: "3.175px",
            fontFamily: "sans-serif",
            InkscapeFontSpecification: "sans-serif",
            display: "inline",
            opacity: 1,
            fill: "#fff",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0,
            strokeLinecap: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
          transform="translate(214.855)"
        >
          <tspan
            x={265.806}
            y={10.319}
            style={{
              fill: "#fff",
              stroke: "none",
              strokeWidth: 0,
            }}
          >
            {"PAN3"}
          </tspan>
        </text>
      </g>
    </g>
    {/*SEÑALES*/}
    <g
      style={{
        display: "inline",
      }}
    >
      {/*LS6A/b*/}
      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.5,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        {/*SEMAFORO A*/}
        <path
          d="M30.51 42.622a2.054 2.054 0 1 0 0-4.107 2.054 2.054 0 0 0 0 4.107"
          style={{
            fill: "red",
            stroke: "white",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1 0 0 1 520.677 63.388)"
        />
        {/*POSTE*/}
        <path
          d="M26.125 38.834v3.665-1.865h2.158"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1 0 0 1 520.677 63.388)"
        />
        {/*SEMAFORO B*/}
        <path
          d="M29.451 38.124a2.054 2.054 0 1 0 0-4.107 2.054 2.054 0 0 0 0 4.107"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1 0 0 1 520.677 63.388)"
        />
        {/*POSTE B*/}
        <path
          d="M26.866 36.446v3.806M27.322 36.125h-.457"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1 0 0 1 520.677 63.388)"
        />
      </g>
      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.333333,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 353.406 12.657)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 353.406 12.657)"
        />
      </g>
      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.5,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        {/*PRINCIPAL LS3A*/}        
        <path
          d="M30.51 40.506a2.054 2.054 0 1 0 0-4.108 2.054 2.054 0 0 0 0 4.108"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(-5.238 16.647)"
        />
        <path
          d="M30.51 40.506a2.054 2.054 0 1 0 0-4.108 2.054 2.054 0 0 0 0 4.108"
          style={{
            fill: "YELLOW",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(-0.738 16.647)"
        />
        <path
          d="M26.125 36.717v3.665-1.865h2.158"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(-5.238 16.647)"
        />
        {/*PRINCIPAL LS3B*/}        
        <path
          d="M29.451 35.478a2.054 2.054 0 1 0 0-4.107 2.054 2.054 0 0 0 0 4.107"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(-5.238 16.647)"
        />
        <path
          d="M29.451 35.478a2.054 2.054 0 1 0 0-4.107 2.054 2.054 0 0 0 0 4.107"
          style={{
            fill: "YELLOW",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(-0.738 16.647)"
        />
        <path
          d="M26.866 33.83v4.246"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.528164,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(-5.238 16.647)"
        />
        <path
          d="M27.319 33.48h-.464"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.503744,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(-5.238 16.647)"
        />
        <path
          d="m-12.561 10.39 2.093-.955-2.093-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 39.498 32.162)"
        />
        <path
          d="M-12.561 18.822l2.093-.955-2.093-1.027v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 39.498 32.162)"
        />
      </g>
      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.333333,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 353.406 36.472)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 353.406 36.472)"
        />
      </g>
      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.5,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M466.415 158.907a2.054 2.054 0 1 1 0-4.108 2.054 2.054 0 0 1 0 4.108"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(23.757 -8.975)"
        />
        <path
          d="M470.8 155.118v3.665-1.864h-2.158"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(23.757 -8.975)"
        />
        <path
          d="M467.474 154.409a2.054 2.054 0 1 1 0-4.108 2.054 2.054 0 0 1 0 4.108"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(23.757 -8.975)"
        />
        <path
          d="M470.06 152.73v3.806M469.603 152.41h.457"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(23.757 -8.975)"
        />
        <path
          d="M467.47 149.819a2.054 2.054 0 1 1 0-4.108 2.054 2.054 0 0 1 0 4.108"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(23.757 -8.975)"
        />
        <path
          d="M470.057 148.144v3.874M469.6 147.82h.457"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(23.757 -8.975)"
        />
      </g>
      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 309.688 97.17)"
        />
        <path
          d="m88.13 17.478 2.094-.956-2.094-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264935,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 309.688 97.17)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 309.688 97.17)"
        />
      </g>
      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.333333,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 86.803 32.162)"
        />
        <path
          d="m219.305 49.703 3.14-1.433-3.14-1.539v2.972"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.039739,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(-.306 .9)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 86.803 32.162)"
        />
      </g>
      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 369.481 122.696)"
        />
        <path
          d="m88.13 17.478 2.094-.956-2.094-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264935,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 369.481 122.696)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 369.481 122.696)"
        />
      </g>
      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 370.424 97.17)"
        />
        <path
          d="m88.13 17.478 2.094-.956-2.094-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264935,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 370.424 97.17)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 370.424 97.17)"
        />
      </g>
      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.333333,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 39.498 32.162)"
        />
        <path
          d="m88.158 12.294 2.094-.955-2.094-1.027v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 39.498 32.162)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 39.498 32.162)"
        />
      </g>
      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.333333,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.5 0 0 1.5 215.023 122.696)"
        />
        <path
          d="m88.13 17.478 2.094-.956-2.094-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264948,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.5 0 0 1.5 215.023 122.696)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.5 0 0 1.5 215.023 122.696)"
        />
      </g>
      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.333333,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.5 0 0 1.5 295.29 122.696)"
        />
        <path
          d="m88.13 17.478 2.094-.956-2.094-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264926,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.5 0 0 1.5 295.29 122.696)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.5 0 0 1.5 295.29 122.696)"
        />
      </g>
      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 214.747 78.715)"
        />
        <path
          d="m82.56 96.945-3.14-1.433 3.14-1.539v2.972"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.039739,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 214.747 78.715)"
        />
      </g>
      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 322.757 55.427)"
        />
        <path
          d="m88.13 12.154 2.094-.956-2.094-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264935,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 322.757 55.427)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 322.757 55.427)"
        />
      </g>
      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.333333,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.5 0 0 1.5 295.29 135.205)"
        />
        <path
          d="m88.13 12.154 2.094-.956-2.094-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264926,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.5 0 0 1.5 295.29 135.205)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.5 0 0 1.5 295.29 135.205)"
        />
      </g>
      {/*MANIOBRA LS53*/}
      <path
        d="M99.921 199.465v1.863h.06a3.718 3.718 0 0 0 1.517-.418 3.63 3.63 0 0 0 1.013-.757 3.83 3.83 0 0 0 .77-1.144c.184-.425.28-.817.323-1.324l.007-.084h-3.69z"
        style={{
          fill: getColorSenMan(sen_man["LS53"]),
          fillOpacity: 1,
          stroke: getColorStrokeSenMan(sen_man["LS53"]),
          strokeWidth: 0.774,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
        transform="translate(-3.486 -13.362)"
      />
      <path
        d="M99.253 199.465a1.469 1.469 0 1 1-2.938 0 1.469 1.469 0 0 1 2.938 0"
        style={{
          display: "inline",
          fill: getColorSenManUsoComp(sen_man["LS53"]),
          fillOpacity: 1,
          stroke: getColorStrokeSenManUsoCom(sen_man["LS53"]),
          strokeWidth: 0.562044,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(-3.486 -13.362)"
      />
      <path
        d="M94.222 201.214v-3.699 1.882h1.676"
        style={{
          display: "inline",
          fill: "none",
          stroke: getColorStrokeSenMan(sen_man["LS53"]),
          strokeWidth: 0.5,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(-3.486 -13.362)"
      />
      {/*MANIOBRA LS53*/}
      <g
        style={{
          display: "inline",
        }}
      >
        <text
          xmlSpace="preserve"
          x={97.113}
          y={-194.853}
          style={{
            fontSize: "3.175px",
            display: "inline",
            fill: "#ff0",
            stroke: "#000",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="translate(58.95 373.901)"
        >
          <tspan
            x={97.113}
            y={-194.853}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontFamily: "sans-serif",
              InkscapeFontSpecification: "sans-serif",
              fill: "#ff0",
              strokeWidth: 0.5,
              strokeDasharray: "none",
            }}
          >
            {sen_man["LS50"].RUTA}
          </tspan>
        </text>
        <path
          d="M101.468 199.465v-1.863h-.06c-.1 0-.358.033-.534.07a3.718 3.718 0 0 0-.983.348 3.63 3.63 0 0 0-1.013.756 3.83 3.83 0 0 0-.77 1.145c-.184.425-.28.817-.323 1.324l-.007.083h3.69z"
          style={{
            fill: getColorSenMan(sen_man["LS50"]),
            fillOpacity: 1,
            stroke: getColorStrokeSenMan(sen_man["LS50"]),
            strokeWidth: 0.774,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(1 0 0 -1 58.95 373.901)"
        />
        <path
          d="M103.782 197.715v3.699-1.882h-1.677"
          style={{
            display: "inline",
            fill: "none",
            stroke: getColorStrokeSenMan(sen_man["LS50"]),
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1 0 0 -1 58.95 373.901)"
        />
      </g>
      {/*MANIOBRA LS51*/}
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M99.921 199.465v1.863h.06a3.718 3.718 0 0 0 1.517-.418 3.63 3.63 0 0 0 1.013-.757 3.83 3.83 0 0 0 .77-1.144c.184-.425.28-.817.323-1.324l.007-.084h-3.69z"
          style={{
            fill: getColorSenMan(sen_man["LS51"]),
            fillOpacity: 1,
            stroke: getColorStrokeSenMan(sen_man["LS51"]),
            strokeWidth: 0.774,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
          transform="translate(-3.486 -43.442)"
        />
        <path
          d="M99.253 199.465a1.469 1.469 0 1 1-2.938 0 1.469 1.469 0 0 1 2.938 0"
          style={{
            display: "inline",
            fill: getColorSenManUsoComp(sen_man["LS51"]),
            fillOpacity: 1,
            stroke: getColorStrokeSenManUsoCom(sen_man["LS51"]),
            strokeWidth: 0.562044,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(-3.486 -43.442)"
        />
        <path
          d="M94.222 201.214v-3.699 1.882h1.676"
          style={{
            display: "inline",
            fill: "none",
            stroke: getColorStrokeSenMan(sen_man["LS51"]),
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(-3.486 -43.442)"
        />
      </g>
      {/*MANIOBRA LS59*/}
      <g
        style={{
          display: "inline",
        }}
      >
        <text
          xmlSpace="preserve"
          x={104.032}
          y={201.465}
          style={{
            fontSize: "3.175px",
            display: "inline",
            fill: "#ff0",
            stroke: "#000",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="translate(140.21 -13.362)"
        >
          <tspan
            x={104.032}
            y={201.465}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontFamily: "sans-serif",
              InkscapeFontSpecification: "sans-serif",
              fill: "#ff0",
              strokeWidth: 0.5,
              strokeDasharray: "none",
            }}
          >
            {sen_man["LS59"].RUTA}
          </tspan>
        </text>
        <path
          d="M99.921 199.465v1.863h.06a3.718 3.718 0 0 0 1.517-.418 3.63 3.63 0 0 0 1.013-.757 3.83 3.83 0 0 0 .77-1.144c.184-.425.28-.817.323-1.324l.007-.084h-3.69z"
          style={{
            fill: getColorSenMan(sen_man["LS59"]),
            fillOpacity: 1,
            stroke: getColorStrokeSenMan(sen_man["LS59"]),
            strokeWidth: 0.774,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
          transform="translate(140.21 -13.362)"
        />
        <path
          d="M99.253 199.465a1.469 1.469 0 1 1-2.938 0 1.469 1.469 0 0 1 2.938 0"
          style={{
            display: "inline",
            fill: getColorSenManUsoComp(sen_man["LS59"]),
            fillOpacity: 1,
            stroke: getColorStrokeSenManUsoCom(sen_man["LS59"]),
            strokeWidth: 0.562044,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(140.21 -13.362)"
        />
        <path
          d="M94.222 201.214v-3.699 1.882h1.676"
          style={{
            display: "inline",
            fill: "none",
            stroke: getColorStrokeSenMan(sen_man["LS59"]),
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(140.21 -13.362)"
        />
      </g>
      {/*MANIOBRA LS57*/}
      <g
        style={{
          display: "inline",
        }}
      >
        <text
          xmlSpace="preserve"
          x={245.83}
          y={157.969}
          style={{
            fontSize: "3.175px",
            display: "inline",
            fill: "#ff0",
            stroke: "#000",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
        >
          <tspan
            x={245.83}
            y={157.969}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontFamily: "sans-serif",
              InkscapeFontSpecification: "sans-serif",
              fill: "#ff0",
              strokeWidth: 0.5,
              strokeDasharray: "none",
            }}
          >
            {sen_man["LS57"].RUTA}
          </tspan>
        </text>
        <path
          d="M99.921 199.465v1.863h.06a3.718 3.718 0 0 0 1.517-.418 3.63 3.63 0 0 0 1.013-.757 3.83 3.83 0 0 0 .77-1.144c.184-.425.28-.817.323-1.324l.007-.084h-3.69z"
          style={{
            fill: getColorSenMan(sen_man["LS57"]),
            fillOpacity: 1,
            stroke: getColorStrokeSenMan(sen_man["LS57"]),
            strokeWidth: 0.774,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
          transform="translate(141.798 -43.496)"
        />
        <path
          d="M99.253 199.465a1.469 1.469 0 1 1-2.938 0 1.469 1.469 0 0 1 2.938 0"
          style={{
            display: "inline",
            fill: getColorSenManUsoComp(sen_man["LS57"]),
            fillOpacity: 1,
            stroke: getColorStrokeSenManUsoCom(sen_man["LS57"]),
            strokeWidth: 0.562044,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(141.798 -43.496)"
        />
        <path
          d="M94.222 201.214v-3.699 1.882h1.676"
          style={{
            display: "inline",
            fill: "none",
            stroke: getColorStrokeSenMan(sen_man["LS57"]),
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(141.798 -43.496)"
        />
      </g>
      {/*MANIOBRA LS54*/}
      <g
        style={{
          display: "inline",
        }}
      >
        <text
          xmlSpace="preserve"
          x={-106.094}
          y={205.909}
          style={{
            fontSize: "3.175px",
            display: "inline",
            fill: "#ff0",
            stroke: "#000",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="translate(405.825 -46.402)"
        >
          <tspan
            x={-106.094}
            y={205.909}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontFamily: "sans-serif",
              InkscapeFontSpecification: "sans-serif",
              fill: "#ff0",
              strokeWidth: 0.5,
              strokeDasharray: "none",
            }}
          >
            {sen_man["LS54"].RUTA}
          </tspan>
        </text>
        <path
          d="M99.921 201.052v1.863h.06a3.718 3.718 0 0 0 1.517-.418 3.63 3.63 0 0 0 1.013-.757 3.83 3.83 0 0 0 .77-1.144c.184-.425.28-.817.323-1.324l.007-.083h-3.69z"
          style={{
            fill: getColorSenMan(sen_man["LS54"]),
            fillOpacity: 1,
            stroke: getColorStrokeSenMan(sen_man["LS54"]),
            strokeWidth: 0.774,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(-1 0 0 1 405.825 -46.402)"
        />
        <path
          d="M99.253 201.052a1.469 1.469 0 1 1-2.938 0 1.469 1.469 0 0 1 2.938 0"
          style={{
            display: "inline",
            fill: getColorSenManUsoComp(sen_man["LS54"]),
            fillOpacity: 1,
            stroke: getColorStrokeSenManUsoCom(sen_man["LS54"]),
            strokeWidth: 0.562044,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1 0 0 1 405.825 -46.402)"
        />
        <path
          d="M94.222 202.801v-3.698 1.882h1.676"
          style={{
            display: "inline",
            fill: "none",
            stroke: getColorStrokeSenMan(sen_man["LS54"]),
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1 0 0 1 405.825 -46.402)"
        />
      </g>
      {/*SEÑAL TOPERA PUNTA PLATAFORMA VIA MERCADO*/}
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333333,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="m79.845 15.758 3.033-1.462-3.033-1.57v3.032"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.266667,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.5 0 0 1.5 214.332 64.09)"
        />
        <path
          d="M78.106 13.104v2.443-1.243h1.446"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.334083,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.5 0 0 1.5 214.332 64.09)"
        />
      </g>
      {/*PRINCIPAL LS7*/}
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333333,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "RED",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 -40.03 8.867)"
        />
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "YELLOW",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 -35.53 8.867)"
        />
        <path
          d="m88.158 12.294 2.094-.955-2.094-1.027v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 -40.03 8.867)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 -40.03 8.867)"
        />
      </g>
      {/*PRINCIPAL LS11*/}
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333333,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 39.497 8.867)"
        />
        <path
          d="m88.158 12.294 2.094-.955-2.094-1.027v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 39.497 8.867)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 39.497 8.867)"
        />
      </g>
      {/*PRINCIPAL LS21*/}
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333333,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 218.078 8.867)"
        />
        <path
          d="m88.158 12.294 2.094-.955-2.094-1.027v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 218.078 8.867)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333333,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 218.078 8.867)"
        />
      </g>
      {/*PRINCIPAL LS10*/}
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 538.072 122.696)"
        />
        <path
          d="m88.13 17.478 2.094-.956-2.094-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264935,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 538.072 122.696)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 538.072 122.696)"
        />
      </g>
      {/*PRINCIPAL LS5A*/}
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.5,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M30.51 40.506a2.054 2.054 0 1 0 0-4.108 2.054 2.054 0 0 0 0 4.108"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1 0 0 -1 66.27 88.523)"
        />
        <path
          d="M26.125 36.717v3.665-1.865h2.158"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1 0 0 -1 66.27 88.523)"
        />
      {/*PRINCIPAL LS5B*/}
        <path
          d="M29.451 35.478a2.054 2.054 0 1 0 0-4.107 2.054 2.054 0 0 0 0 4.107"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1 0 0 -1 66.27 88.523)"
        />
        <path
          d="M26.866 33.83v4.246"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.528164,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1 0 0 -1 66.27 88.523)"
        />
        <path
          d="M27.319 33.48h-.464"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.503744,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1 0 0 -1 66.27 88.523)"
        />
        <path
          d="m-12.561 10.39 2.093-.955-2.093-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 -1.5 111.007 73.009)"
        />
        <path
          d="M-12.561 18.822l2.093-.955-2.093-1.027v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 -1.5 111.007 73.009)"
        />
      </g>
      {/*PRINCIPAL LS17*/}
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <text
          xmlSpace="preserve"
          x={92.74}
          y={17.117}
          style={{
            fontSize: "2.11674px",
            display: "inline",
            fill: "#ff0",
            stroke: "#000",
            strokeWidth: 0.333344,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="translate(87.35 57.46) scale(1.49995)"
        >
          <tspan
            x={92.74}
            y={17.117}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontFamily: "sans-serif",
              InkscapeFontSpecification: "sans-serif",
              fill: "#ff0",
              strokeWidth: 0.333344,
              strokeDasharray: "none",
            }}
          >
            {"2"}
          </tspan>
        </text>
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.4999 0 0 1.5 87.35 57.46)"
        />
        <path
          d="m88.13 17.478 2.094-.956-2.094-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264935,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.4999 0 0 1.5 87.35 57.46)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.4999 0 0 1.5 87.35 57.46)"
        />
      </g>
      {/*MANIOBRA LS55*/}
      <g
        style={{
          display: "inline",
        }}
      >
        <text
          xmlSpace="preserve"
          x={104.032}
          y={196.964}
          style={{
            fontSize: "3.175px",
            display: "inline",
            fill: "#ff0",
            stroke: "#000",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="translate(125.546 -126.306)"
        >
          <tspan
            x={104.032}
            y={196.964}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontFamily: "sans-serif",
              InkscapeFontSpecification: "sans-serif",
              fill: "#ff0",
              strokeWidth: 0.5,
              strokeDasharray: "none",
            }}
          >
            {sen_man["LS55"].RUTA}
          </tspan>
        </text>
        <path
          d="M99.921 199.465v1.863h.06a3.718 3.718 0 0 0 1.517-.418 3.63 3.63 0 0 0 1.013-.757 3.83 3.83 0 0 0 .77-1.144c.184-.425.28-.817.323-1.324l.007-.084h-3.69z"
          style={{
            fill: getColorSenMan(sen_man["LS55"]),
            fillOpacity: 1,
            stroke: getColorStrokeSenMan(sen_man["LS55"]),
            strokeWidth: 0.774,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
          transform="translate(125.546 -126.306)"
        />
        <path
          d="M99.253 199.465a1.469 1.469 0 1 1-2.938 0 1.469 1.469 0 0 1 2.938 0"
          style={{
            display: "inline",
            fill: getColorSenManUsoComp(sen_man["LS55"]),
            fillOpacity: 1,
            stroke: getColorStrokeSenManUsoCom(sen_man["LS55"]),
            strokeWidth: 0.562044,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(125.546 -126.306)"
        />
        <path
          d="M94.222 201.214v-3.699 1.882h1.676"
          style={{
            display: "inline",
            fill: "none",
            stroke: getColorStrokeSenMan(sen_man["LS55"]),
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(125.546 -126.306)"
        />
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.5,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
      {/*PRINCIPAL LS15A*/}
        <path
          d="M30.51 40.506a2.054 2.054 0 1 0 0-4.108 2.054 2.054 0 0 0 0 4.108"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1 0 0 -1 193.106 65.316)"
        />
        <path
          d="M26.125 36.717v3.665-1.865h2.158"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1 0 0 -1 193.106 65.316)"
        />
      {/*PRINCIPAL LS15B*/}
        <path
          d="M29.451 35.478a2.054 2.054 0 1 0 0-4.107 2.054 2.054 0 0 0 0 4.107"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1 0 0 -1 193.106 65.316)"
        />
        <path
          d="M26.866 33.83v4.246"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.528164,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1 0 0 -1 193.106 65.316)"
        />
        <path
          d="M27.319 33.48h-.464"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.503744,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1 0 0 -1 193.106 65.316)"
        />
        <path
          d="m-12.561 10.39 2.093-.955-2.093-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 -1.5 237.843 49.801)"
        />
        <path
          d="M-12.561 18.822l2.093-.955-2.093-1.027v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 -1.5 237.843 49.801)"
        />
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.5,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
      {/*PRINCIPAL LS19A*/}
        <path
          d="M30.51 40.506a2.054 2.054 0 1 0 0-4.108 2.054 2.054 0 0 0 0 4.108"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(326.251 16.87)"
        />
        <path
          d="M26.125 36.717v3.665-1.865h2.158"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(326.251 16.87)"
        />
      {/*PRINCIPAL LS19B*/}
        <path
          d="M29.451 35.478a2.054 2.054 0 1 0 0-4.107 2.054 2.054 0 0 0 0 4.107"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(326.251 16.87)"
        />
        <path
          d="M26.866 33.83v4.246"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.528164,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(326.251 16.87)"
        />
        <path
          d="M27.319 33.48h-.464"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.503744,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(326.251 16.87)"
        />
        <path
          d="m-12.561 10.39 2.093-.955-2.093-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 370.988 32.385)"
        />
        <path
          d="M-12.561 18.822l2.093-.955-2.093-1.027v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 370.988 32.385)"
        />
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.5,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
      {/*PRINCIPAL LS14A*/}
        <path
          d="M30.51 40.506a2.054 2.054 0 1 0 0-4.108 2.054 2.054 0 0 0 0 4.108"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1 0 0 1 337.728 108.152)"
        />
        <path
          d="M26.125 36.717v3.665-1.865h2.158"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1 0 0 1 337.728 108.152)"
        />
      {/*PRINCIPAL LS14B*/}
        <path
          d="M29.451 35.478a2.054 2.054 0 1 0 0-4.107 2.054 2.054 0 0 0 0 4.107"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1 0 0 1 337.728 108.152)"
        />
        <path
          d="M26.866 33.83v4.246"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.528164,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1 0 0 1 337.728 108.152)"
        />
        <path
          d="M27.319 33.48h-.464"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.503744,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1 0 0 1 337.728 108.152)"
        />
        <path
          d="m-12.561 10.39 2.093-.955-2.093-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.5 0 0 1.5 292.991 123.666)"
        />
        <path
          d="M-12.561 18.822l2.093-.955-2.093-1.027v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.5 0 0 1.5 292.991 123.666)"
        />
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.5,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
      {/*PRINCIPAL LS23A*/}
        <path
          d="M30.51 40.506a2.054 2.054 0 1 0 0-4.108 2.054 2.054 0 0 0 0 4.108"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(326.251 63.437)"
        />
        <path
          d="M26.125 36.717v3.665-1.865h2.158"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(326.251 63.437)"
        />
      {/*PRINCIPAL LS23B*/}
        <path
          d="M29.451 35.478a2.054 2.054 0 1 0 0-4.107 2.054 2.054 0 0 0 0 4.107"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(326.251 63.437)"
        />
        <path
          d="M26.866 33.83v4.246"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.528164,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(326.251 63.437)"
        />
        <path
          d="M27.319 33.48h-.464"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.503744,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(326.251 63.437)"
        />
        <path
          d="m-12.561 10.39 2.093-.955-2.093-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 370.988 78.952)"
        />
        <path
          d="M-12.561 18.822l2.093-.955-2.093-1.027v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 370.988 78.952)"
        />
      </g>
      {/*MANIOBRA LS56*/}
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M99.921 199.465v1.863h.06a3.718 3.718 0 0 0 1.517-.418 3.63 3.63 0 0 0 1.013-.757 3.83 3.83 0 0 0 .77-1.144c.184-.425.28-.817.323-1.324l.007-.084h-3.69z"
          style={{
            fill: getColorSenMan(sen_man["LS56"]),
            fillOpacity: 1,
            stroke: getColorStrokeSenMan(sen_man["LS56"]),
            strokeWidth: 0.774,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(-1 0 0 1 405.825 -141.423)"
        />
        <path
          d="M99.253 199.465a1.469 1.469 0 1 1-2.938 0 1.469 1.469 0 0 1 2.938 0"
          style={{
            display: "inline",
            fill: getColorSenManUsoComp(sen_man["LS56"]),
            fillOpacity: 1,
            stroke: getColorStrokeSenManUsoCom(sen_man["LS56"]),
            strokeWidth: 0.562044,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1 0 0 1 405.825 -141.423)"
        />
        <path
          d="M94.222 201.214v-3.699 1.882h1.676"
          style={{
            display: "inline",
            fill: "none",
            stroke: getColorStrokeSenMan(sen_man["LS56"]),
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1 0 0 1 405.825 -141.423)"
        />
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
      {/*PRINCIPAL LS16*/}
        <path
          d="M91.207 15.212a1.37 1.37 0 1 0 0-2.738 1.37 1.37 0 0 0 0 2.738"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 444.02 31.566)"
        />
        <path
          d="m88.13 12.154 2.094-.956-2.094-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264935,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 444.02 31.566)"
        />
        <path
          d="M88.284 12.686v2.444-1.243h1.439"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.333344,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1.4999 0 0 1.5 444.02 31.566)"
        />
      </g>
      {/*SEÑAL TOPERA LADO CIDADELA*/}
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333333,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="m79.845 15.758 3.033-1.462-3.033-1.57v3.032"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.266667,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 152.038 64.128)"
        />
        <path
          d="M78.106 13.104v2.443-1.243h1.446"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.334083,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(1.5 0 0 1.5 152.038 64.128)"
        />
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.5,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
      {/*PRINCIPAL LS12A*/}
        <path
          d="M30.51 40.506a2.054 2.054 0 1 0 0-4.108 2.054 2.054 0 0 0 0 4.108"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="rotate(180 168.864 67.591)"
        />
        <path
          d="M26.125 36.717v3.665-1.865h2.158"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="rotate(180 168.864 67.591)"
        />
      {/*PRINCIPAL LS12B*/}
        <path
          d="M29.451 35.478a2.054 2.054 0 1 0 0-4.107 2.054 2.054 0 0 0 0 4.107"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="rotate(180 168.864 67.591)"
        />
        <path
          d="M26.866 33.83v4.246"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.528164,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="rotate(180 168.864 67.591)"
        />
        <path
          d="M27.319 33.48h-.464"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 0.503744,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="rotate(180 168.864 67.591)"
        />
        <path
          d="m-12.561 10.39 2.093-.955-2.093-1.026v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="rotate(180 146.496 59.834) scale(1.5)"
        />
        <path
          d="M-12.561 18.822l2.093-.955-2.093-1.027v1.982"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.0264927,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="rotate(180 146.496 59.834) scale(1.5)"
        />
      </g>
      {/*MANIOBRA LS52*/}
      <g
        style={{
          display: "inline",
        }}
      >
        <text
          xmlSpace="preserve"
          x={-109.163}
          y={191.44}
          style={{
            fontSize: "3.175px",
            display: "inline",
            fill: "#ff0",
            stroke: "#000",
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            paintOrder: "markers stroke fill",
          }}
          transform="translate(408.894 -104.664)"
        >
          <tspan
            x={-109.163}
            y={191.44}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 400,
              fontStretch: "normal",
              fontFamily: "sans-serif",
              InkscapeFontSpecification: "sans-serif",
              fill: "#ff0",
              strokeWidth: 0.5,
              strokeDasharray: "none",
            }}
          >
            {sen_man["LS52"].RUTA}
          </tspan>
        </text>
        <path
          d="M102.99 193.94v1.864h.06a3.718 3.718 0 0 0 1.517-.418 3.63 3.63 0 0 0 1.013-.757 3.83 3.83 0 0 0 .77-1.144c.184-.426.28-.817.323-1.324l.007-.084h-3.69z"
          style={{
            fill: getColorSenMan(sen_man["LS52"]),
            fillOpacity: 1,
            stroke: getColorStrokeSenMan(sen_man["LS52"]),
            strokeWidth: 0.774,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: "markers stroke fill",
          }}
          transform="matrix(-1 0 0 1 408.894 -104.664)"
        />
        <path
          d="M102.322 193.94a1.469 1.469 0 1 1-2.938 0 1.469 1.469 0 0 1 2.938 0"
          style={{
            display: "inline",
            fill: getColorSenManUsoComp(sen_man["LS52"]),
            fillOpacity: 1,
            stroke: getColorStrokeSenManUsoCom(sen_man["LS52"]),
            strokeWidth: 0.562044,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1 0 0 1 408.894 -104.664)"
        />
        <path
          d="M97.29 195.69v-3.699 1.882h1.677"
          style={{
            display: "inline",
            fill: "none",
            stroke: getColorStrokeSenMan(sen_man["LS52"]),
            strokeWidth: 0.5,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="matrix(-1 0 0 1 408.894 -104.664)"
        />
      </g>
    </g>
    {/*NOM_CDV_SEC*/}
    <g
      style={{
        display: "inline",
        fill: "#fff",
      }}
    >
      <text
        xmlSpace="preserve"
        x={6.467}
        y={60.119}
        style={{
          fontSize: ".428625px",
          display: "inline",
          fill: "#fff",
          strokeWidth: 0.0357188,
        }}
      >
        <tspan
          x="6.4666638 8.8470297 10.831264 12.815497"
          y={60.119}
          style={{
            fontVariant: "normal",
            fontWeight: 400,
            fontSize: "3.56877px",
            fontFamily: "Arial",
            writingMode: "lr-tb",
            fill: "#fff",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 0.0357188,
          }}
        >
          {"A49T"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={1.053}
        y={83.267}
        style={{
          fontSize: ".428625px",
          display: "inline",
          fill: "#fff",
          strokeWidth: 0.0357188,
        }}
      >
        <tspan
          x="1.0525621 3.4329283 5.4171619 7.4013963"
          y={83.267}
          style={{
            fontVariant: "normal",
            fontWeight: 400,
            fontSize: "3.56877px",
            fontFamily: "Arial",
            writingMode: "lr-tb",
            fill: "#fff",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 0.0357188,
          }}
        >
          {"A50T"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={488.645}
        y={132.345}
        style={{
          fontSize: ".428625px",
          display: "inline",
          fill: "#fff",
          strokeWidth: 0.0357188,
        }}
      >
        <tspan
          x="488.64532 490.62958 492.61377 494.99417"
          y={132.345}
          style={{
            fontVariant: "normal",
            fontWeight: 400,
            fontSize: "3.56877px",
            fontFamily: "Arial",
            writingMode: "lr-tb",
            fill: "#fff",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 0.0357188,
          }}
        >
          {"78AT"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={488.645}
        y={113.03}
        style={{
          fontSize: ".428625px",
          display: "inline",
          fill: "#fff",
          strokeWidth: 0.0357188,
        }}
      >
        <tspan
          x="488.64532 490.62958 492.61377 494.99417"
          y={113.03}
          style={{
            fontVariant: "normal",
            fontWeight: 400,
            fontSize: "3.56877px",
            fontFamily: "Arial",
            writingMode: "lr-tb",
            fill: "#fff",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 0.0357188,
          }}
        >
          {"76AT"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={473.754}
        y={60.385}
        style={{
          fontSize: ".428625px",
          display: "inline",
          fill: "#fff",
          strokeWidth: 0.0357188,
        }}
      >
        <tspan
          x="473.75446 475.73862 477.7229"
          y={60.385}
          style={{
            fontVariant: "normal",
            fontWeight: 400,
            fontSize: "3.56877px",
            fontFamily: "Arial",
            writingMode: "lr-tb",
            fill: "#fff",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 0.0357188,
          }}
        >
          {"69T"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={472.352}
        y={37.095}
        style={{
          fontSize: ".428625px",
          display: "inline",
          fill: "#fff",
          strokeWidth: 0.0357188,
        }}
      >
        <tspan
          x="472.35165 474.33588 476.32013 478.70047"
          y={37.095}
          style={{
            fontVariant: "normal",
            fontWeight: 400,
            fontSize: "3.56877px",
            fontFamily: "Arial",
            writingMode: "lr-tb",
            fill: "#fff",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 0.0357188,
          }}
        >
          {"61AT"}
        </tspan>
      </text>
      {/*NOM_CDV*/}
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.076 121.608h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["20T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(2.533 7.32)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#a)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 196.772 132.247)"
        >
          <tspan
            x="0 55.551628 111.10326"
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"20T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.076 121.608h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["V6T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(5.285 38.1)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#b)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 199.525 163.027)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"V6T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.076 121.608h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["28AT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-85.729 38.1)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#c)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 107.453 163.027)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"28AT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.208 121.608h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["24BT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-99.856 7.154)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#d)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 93.325 132.08)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"24BT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.208 121.608h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["24AT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-70.318 7.154)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#e)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 122.863 132.08)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"24AT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.076 121.608h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["28T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-61.245 44.98)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#f)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 132.994 169.906)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"28T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.505 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["14DT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(57.02 38.122)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#g)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 251.26 163.049)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"14DT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.505 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["14CT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(80.138 45.002)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#h)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 274.377 169.928)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"14CT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.505 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["14AT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(75.795 13.79)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#i)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 270.035 138.717)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"14AT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.505 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["14BT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(53.962 7.176)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#j)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 248.201 132.102)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"14BT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.003 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["14T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(110.163 7.154)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#k)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 304.402 132.08)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"14T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.505 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["10AT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(135.059 7.176)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#l)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 329.529 132.08)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"10AT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.505 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["P2T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(135.06 -18.208)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#m)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 330.446 106.718)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"P2T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.003 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["18T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(9.812 -18.208)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#n)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 204.051 106.696)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"18T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.076 121.608h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["24T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-45.163 7.154)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#o)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 149.076 132.08)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"24T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.505 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["12AT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(78.447 -18.208)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#p)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 272.686 106.718)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"12AT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.003 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["12T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(92.295 -18.208)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#q)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 286.534 106.696)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"12T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.003 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["17T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(37.06 -34.888)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#r)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 231.3 90.016)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"17T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.505 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["12BT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(54.097 -11.59)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#s)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 248.337 113.337)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"12BT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.505 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["13AT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(66.353 -58.212)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#t)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 260.592 66.714)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"13AT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.505 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["13BT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(93.477 -58.212)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#u)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 287.716 66.714)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"13BT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.208 121.608h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["22AT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-85.555 -11.543)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#v)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 107.626 113.383)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"22AT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.208 121.608h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["30AT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-165.154 -41.66)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#w)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 28.028 83.267)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"30AT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.076 121.608h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["22T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-43.783 -18.23)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#x)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 150.457 106.696)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"22T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.003 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["13T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(44.685 -64.786)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#y)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 238.924 60.119)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"13T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.003 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["26T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-21.747 -41.81)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#z)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 172.492 83.094)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"26T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.003 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["15T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(48.476 -88.035)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#A)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 242.716 36.87)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"15T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.003 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["11T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-1.798 -88.035)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#B)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 192.574 36.891)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"11T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.023 121.608h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["9T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-.817 -64.808)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#C)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 193.555 60.119)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"9T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.023 121.608h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["7T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-64.235 -88.084)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#D)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 130.136 36.842)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"7T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.023 121.608h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["5T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-83.725 -64.808)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#E)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 110.647 60.119)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"5T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.003 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["5AT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-51.816 -64.786)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#F)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 142.555 60.14)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"5AT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.003 121.586h7.63v4.116h-7.63z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["VMT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.349232,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(7.236 -41.81)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#G)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 201.315 83.11)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"VMT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.003 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["5BT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-54.204 -41.81)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#H)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 140.168 83.116)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"5BT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.023 121.608h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["3T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-154.934 -64.808)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#I)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 39.438 60.119)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"3T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.003 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["3AT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="rotate(-60.05 69.424 193.742)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#J)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.01783 -.03095 .03095 .01783 72.177 51.123)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"3AT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.208 121.608h6.594v4.116h-6.594z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["30T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.324675,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="rotate(61.986 137.719 25.997)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#K)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="rotate(61.987 -62.855 124.337) scale(.03572)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"30T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.505 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["P1T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(135.1 -64.786)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#L)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 330.487 60.14)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"P1T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.505 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["15AT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(115.791 -88.035)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#M)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 310.03 36.891)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"15AT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.134 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["21AT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(200.788 -88.035)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#N)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 395.028 36.891)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"21AT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.003 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["10T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(183.374 7.176)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#O)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 377.613 132.102)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"10T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.505 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["19CT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(198.867 -64.786)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#P)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 393.106 60.14)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"19CT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.003 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["21T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(161.76 -81.438)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#Q)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 355.999 43.466)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"21T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.003 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["19T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(161.763 -58.212)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#R)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 356.002 66.692)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"19T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.172 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["6CT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(161.587 -11.59)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#S)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 355.826 113.315)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"6CT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.172 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["6BT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(186.937 -11.59)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#T)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 381.177 113.315)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"6BT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.023 121.608h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["6T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(244.197 -18.402)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#U)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 438.57 106.524)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"6T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M193.023 121.608h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["8T"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(243.555 13.769)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#V)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 437.926 138.695)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"8T"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.134 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["21BT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(252.816 -88.035)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#W)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 446.923 36.891)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"21BT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.134 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["19ET"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(252.94 -58.212)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#X)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 446.906 66.714)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"19ET"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.134 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["19DT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(221.855 -64.786)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#Y)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 415.723 60.14)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"19DT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.505 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["19BT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="rotate(67.203 316.498 250.436)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#Z)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.01384 .03293 -.03293 .01384 384.87 89.188)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"19BT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.172 121.586h6.939v4.116h-6.939z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["6AT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.333054,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="rotate(-67.176 278.721 -48.885)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#aa)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="rotate(-67.177 275.538 -257.751) scale(.03572)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"6AT"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M194.505 121.586h8.513v4.116h-8.513z"
          style={{
            display: "inline",
            opacity: 1,
            fill: cdv_prin["19AT"].X?"red":"black",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.368883,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(176.51 -64.786)"
        />
        <text
          xmlSpace="preserve"
          clipPath="url(#ab)"
          style={{
            display: "inline",
            fill: "#fff",
          }}
          transform="matrix(.03572 0 0 .03572 370.98 60.14)"
        >
          <tspan
            x={0}
            y={0}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "99.913px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          >
            {"19AT"}
          </tspan>
        </text>
      </g>
    </g>
    {/*NOMBRE MDC*/}
    <g
      style={{
        display: "inline",
      }}
    >
      <text
        xmlSpace="preserve"
        x={64.000}
        y={60.059}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#f9f9f9",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={64.000}
          y={60.059}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"43"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={93.000}
        y={66.013}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={93.000}
          y={66.013}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"39B"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={112.726}
        y={83.363}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={112.726}
          y={83.363}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"39A"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={123.608}
        y={12.806}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
        transform="rotate(54.366)"
      >
        <tspan
          x={123.608}
          y={12.806}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"32"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={114.65}
        y={168.839}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={114.65}
          y={168.839}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"26"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={149.363}
        y={162.92}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={149.363}
          y={162.92}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"31A"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={114.614}
        y={138.481}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={114.614}
          y={138.481}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"31B"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={181.143}
        y={89.262}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={181.143}
          y={89.262}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"40A"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={161.074}
        y={106.627}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={161.074}
          y={106.627}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"40B"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={258.465}
        y={168.839}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={258.465}
          y={168.839}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"47"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={268.678}
        y={163.057}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={268.678}
          y={163.057}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"23B"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={289.435}
        y={138.481}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={289.435}
          y={138.481}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"23A"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={245.851}
        y={89.247}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={245.851}
          y={89.247}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"54B"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={232.406}
        y={83.365}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={232.406}
          y={83.365}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"17B"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={252.422}
        y={66.016}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={252.422}
          y={66.016}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"17A"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={245.749}
        y={42.546}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={245.749}
          y={42.546}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"49B"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={265.776}
        y={60.059}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={265.776}
          y={60.059}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"49A"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={304.271}
        y={112.281}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={304.271}
          y={112.281}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"21A"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={288.899}
        y={132.329}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={288.899}
          y={132.329}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"21B"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={283.891}
        y={132.321}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={283.891}
          y={132.321}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"38A"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={268.318}
        y={112.196}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={268.318}
          y={112.196}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"38B"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={391.851}
        y={106.63}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={391.851}
          y={106.63}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"14B"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={397.915}
        y={106.614}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={397.915}
          y={106.614}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"15A"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={415.686}
        y={112.263}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={415.686}
          y={112.263}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"16A"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={438.375}
        y={132.319}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={438.375}
          y={132.319}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"16B"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={423.692}
        y={66}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={423.692}
          y={66}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"15B"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={371.277}
        y={69.519}
        style={{
          fontSize: "2.11667px",
          whiteSpace: "pre",
          inlineSize: 0,
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
        transform="translate(-4.672 -3.504)"
      >
        <tspan
          x={371.277}
          y={69.519}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"14A"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={437.761}
        y={60.061}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={437.761}
          y={60.061}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"41A"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={458.371}
        y={42.548}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={458.371}
          y={42.548}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"41B"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={258.223}
        y={106.612}
        style={{
          fontSize: "2.11667px",
          display: "inline",
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.1,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          paintOrder: "markers stroke fill",
        }}
      >
        <tspan
          x={258.223}
          y={106.612}
          style={{
            fontSize: "3px",
            fontFamily: "Arial",
            stroke: "#fff",
            strokeWidth: 0.1,
          }}
        >
          {"54A"}
        </tspan>
      </text>
    </g>
    {/*FIN NOMBRE MDC*/}
    <g
      style={{
        display: "inline",
      }}
    >
      <text
        xmlSpace="preserve"
        x={478.299}
        y={149.042}
        style={{
          fontSize: ".428625px",
          display: "inline",
          fill: "#ff0",
          strokeWidth: 0.0357188,
        }}
      >
        <tspan
          x="478.29904 480.28326 482.66364 484.64786"
          y={149.042}
          style={{
            fontVariant: "normal",
            fontWeight: 400,
            fontSize: "3.56877px",
            fontFamily: "Arial",
            writingMode: "lr-tb",
            fill: "#ff0",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 0.0357188,
          }}
        >
          {"LS8A"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={479.691}
        y={144.279}
        style={{
          fontSize: ".428625px",
          display: "inline",
          fill: "#ff0",
          strokeWidth: 0.0357188,
        }}
      >
        <tspan
          x="479.69067 481.6749 484.05527 486.03949"
          y={144.279}
          style={{
            fontVariant: "normal",
            fontWeight: 400,
            fontSize: "3.56877px",
            fontFamily: "Arial",
            writingMode: "lr-tb",
            fill: "#ff0",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 0.0357188,
          }}
        >
          {"LS8B"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={479.568}
        y={140.046}
        style={{
          fontSize: ".428625px",
          display: "inline",
          fill: "#ff0",
          strokeWidth: 0.0357188,
        }}
      >
        <tspan
          x="479.56781 481.55206 483.9324 485.91666"
          y={140.046}
          style={{
            fontVariant: "normal",
            fontWeight: 400,
            fontSize: "3.56877px",
            fontFamily: "Arial",
            writingMode: "lr-tb",
            fill: "#ff0",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 0.0357188,
          }}
        >
          {"LS8C"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={478.63}
        y={105.121}
        style={{
          fontSize: ".428625px",
          display: "inline",
          fill: "#ff0",
          strokeWidth: 0.0357188,
        }}
      >
        <tspan
          x="478.62973 480.61395 482.99432 484.97855"
          y={105.121}
          style={{
            fontVariant: "normal",
            fontWeight: 400,
            fontSize: "3.56877px",
            fontFamily: "Arial",
            writingMode: "lr-tb",
            fill: "#ff0",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 0.0357188,
          }}
        >
          {"LS6A"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={479.724}
        y={100.623}
        style={{
          fontSize: ".428625px",
          display: "inline",
          fill: "#ff0",
          strokeWidth: 0.0357188,
        }}
      >
        <tspan
          x="479.72363 481.70792 484.08838 486.07254"
          y={100.623}
          style={{
            fontVariant: "normal",
            fontWeight: 400,
            fontSize: "3.56877px",
            fontFamily: "Arial",
            writingMode: "lr-tb",
            fill: "#ff0",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 0.0357188,
          }}
        >
          {"LS6B"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={486.091}
        y={30.364}
        style={{
          fontSize: ".428625px",
          display: "inline",
          fill: "#ff0",
          strokeWidth: 0.0357188,
        }}
      >
        <tspan
          x="486.09109 488.4715 490.45569"
          y={30.364}
          style={{
            fontVariant: "normal",
            fontWeight: 400,
            fontSize: "3.56877px",
            fontFamily: "Arial",
            writingMode: "lr-tb",
            fill: "#ff0",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 0.0357188,
          }}
        >
          {"A71"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        x={485.953}
        y={54.265}
        style={{
          fontSize: ".428625px",
          display: "inline",
          fill: "#ff0",
          strokeWidth: 0.0357188,
        }}
      >
        <tspan
          x="485.95303 488.3334 490.31763"
          y={54.265}
          style={{
            fontVariant: "normal",
            fontWeight: 400,
            fontSize: "3.56877px",
            fontFamily: "Arial",
            writingMode: "lr-tb",
            fill: "#ff0",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 0.0357188,
          }}
        >
          {"A73"}
        </tspan>
      </text>
      <path
        d="M108.744 202.935h8.07v3.969h-8.07z"
        style={{
          display: "inline",
          fill: sen_man["LS53"].X?"red":"black",
          fillOpacity: 1,
          strokeWidth: 0.773999,
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          strokeMiterlimit: 100,
          strokeDasharray: "none",
          strokeOpacity: 1,
          paintOrder: "fill markers stroke",
        }}
        transform="translate(-17.263 -13.816)"
      />
      <text
        xmlSpace="preserve"
        x={108.562}
        y={206.196}
        style={{
          fontSize: ".428625px",
          display: "inline",
          fill: "#ff0",
          strokeWidth: 0.0357188,
        }}
        transform="translate(-17.263 -13.816)"
      >
        <tspan
          x="108.56216 110.5464 112.92674 114.91102"
          y={206.196}
          style={{
            fontVariant: "normal",
            fontWeight: 400,
            fontSize: "3.56877px",
            fontFamily: "Arial",
            writingMode: "lr-tb",
            fill: "#ff0",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 0.0357188,
          }}
        >
          {"LS53"}
        </tspan>
      </text>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: sen_man["LS59"].X?"red":"black",
            fillOpacity: 1,
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(126.433 -13.816)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(126.433 -13.816)"
        >
          <tspan
            x="108.56216 110.5464 112.92674"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS59"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: sen_man["LS51"].X?"red":"black",
            fillOpacity: 1,
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-17.263 -43.746)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(-17.263 -43.746)"
        >
          <tspan
            x="108.56216 110.5464 112.92674"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS51"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: sen_man["LS50"].X?"red":"black",
            fillOpacity: 1,
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(46.866 -35.634)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(46.866 -35.634)"
        >
          <tspan
            x="108.56216 110.5464 112.92674"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS50"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(46.866 -43.746)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(46.866 -43.746)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS28"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: sen_man["LS57"].X?"red":"black",
            fillOpacity: 1,
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(128.02 -43.746)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(128.02 -43.746)"
        >
          <tspan
            x="108.56216 110.5464 112.92674"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS57"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-33.4 -66.664)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(-33.4 -66.664)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS32"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(46.866 -66.664)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(46.866 -66.664)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS24"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-33.668 -100.236)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(-33.668 -100.236)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS30"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(61.274 -92.145)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(61.274 -92.145)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS22"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(122.01 -92.145)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(122.01 -92.145)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS18"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(74.342 -123.524)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(74.342 -123.524)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS26"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(121.067 -66.664)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(121.067 -66.664)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS20"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.737 202.889h6.105v4.062h-6.105z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.681039,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(63.354 -146.79)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(63.354 -146.79)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS9"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(109.67 -146.79)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(109.67 -146.79)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS13"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(62.363 -170.084)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(62.363 -170.084)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS11"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.737 202.889h6.105v4.062h-6.105z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.681039,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-16.175 -170.084)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(-16.175 -170.084)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS7"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(240.945 -170.084)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(240.945 -170.084)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS21"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(289.657 -66.664)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(289.657 -66.664)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS10"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.4h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-84.576 -158.7)"
        />
        <text
          xmlSpace="preserve"
          x={108.378}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(-84.576 -158.7)"
        >
          <tspan
            x={109}
            y={205.7}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS3B"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.4h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-84.576 -145.5)"
        />
        <text
          xmlSpace="preserve"
          x={108.28}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(-84.576 -145.5)"
        >
          <tspan
            x={109}
            y={205.8}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS3A"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-10.134 -150.289)"
        />
        <text
          xmlSpace="preserve"
          x={108.378}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(-10.134 -150.289)"
        >
          <tspan
            x="108.37807 110.36231"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS5B"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(-8.939 -155.117)"
        />
        <text
          xmlSpace="preserve"
          x={108.28}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(-8.939 -155.117)"
        >
          <tspan
            x="108.28049 110.26473"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS5A"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(118.37 -126.67)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(118.37 -126.67)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS17"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.744 202.935h8.07v3.969h-8.07z"
          style={{
            display: "inline",
            fill: sen_man["LS55"].X?"red":"black",
            fillOpacity: 1,
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(121.55 -131.547)"
        />
        <text
          xmlSpace="preserve"
          x={108.562}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(121.55 -131.547)"
        >
          <tspan
            x="108.56216 110.5464"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS55"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.783 202.975h9.998v3.89h-9.998z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.85292,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(116.804 -172.849)"
        />
        <text
          xmlSpace="preserve"
          x={108.378}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(116.804 -172.849)"
        >
          <tspan
            x="108.37807 110.36231"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS15B"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.782 202.974h9.946v3.892h-9.946z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.850908,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(117.998 -177.678)"
        />
        <text
          xmlSpace="preserve"
          x={108.28}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(117.998 -177.678)"
        >
          <tspan
            x="108.28049 110.26473"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS15A"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.781 202.973h9.894v3.894h-9.894z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.848891,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(250.154 -154.923)"
        />
        <text
          xmlSpace="preserve"
          x={108.378}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(250.154 -154.923)"
        >
          <tspan
            x="108.37807 110.36231"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS19B"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.782 202.974h9.946v3.892h-9.946z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.850908,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(251.192 -150.095)"
        />
        <text
          xmlSpace="preserve"
          x={108.28}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(251.192 -150.095)"
        >
          <tspan
            x="108.28049 110.26473"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS19A"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.781 202.973h9.894v3.894h-9.894z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.848891,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(249.89 -108.092)"
        />
        <text
          xmlSpace="preserve"
          x={108.378}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(249.89 -108.092)"
        >
          <tspan
            x="108.37807 110.36231"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS23B"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.782 202.974h9.946v3.892h-9.946z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.850908,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(250.927 -103.263)"
        />
        <text
          xmlSpace="preserve"
          x={108.28}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(250.927 -103.263)"
        >
          <tspan
            x="108.28049 110.26473"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS23A"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.737 202.929h7.758v3.983h-7.758z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.760219,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(187.64 -152.828)"
        />
        <text
          xmlSpace="preserve"
          x={108.378}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(187.64 -152.828)"
        >
          <tspan
            x="108.37807 110.36231"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS16"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.735 202.926h7.654v3.987h-7.654z"
          style={{
            display: "inline",
            fill: sen_man["LS56"].X?"red":"black",
            fillOpacity: 1,
            strokeWidth: 0.755555,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(184.554 -147.023)"
        />
        <text
          xmlSpace="preserve"
          x={108.28}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(184.554 -147.023)"
        >
          <tspan
            x="108.28049 110.26473"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS56"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.735 202.926h7.654v3.987h-7.654z"
          style={{
            display: "inline",
            fill: sen_man["LS52"].X?"red":"black",
            fillOpacity: 1,
            strokeWidth: 0.755555,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(184.42 -115.232)"
        />
        <text
          xmlSpace="preserve"
          x={108.28}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(184.42 -115.232)"
        >
          <tspan
            x="108.28049 110.26473"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS52"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          d="M108.735 202.926h7.654v3.987h-7.654z"
          style={{
            display: "inline",
            fill: sen_man["LS54"].X?"red":"black",
            fillOpacity: 1,
            strokeWidth: 0.773999,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(184.687 -50.635)"
        />
        <text
          xmlSpace="preserve"
          x={108.28}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}          
          transform="translate(184.687 -50.635)"
        >
          <tspan
            x="108.28049 110.26473"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS54"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.781 202.973h9.894v3.894h-9.894z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.848891,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(186.597 -102.965)"
        />
        <text
          xmlSpace="preserve"
          x={108.378}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(186.597 -102.965)"
        >
          <tspan
            x="108.37807 110.36231"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS12B"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.782 202.974h9.946v3.892h-9.946z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.850908,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(185.564 -108.187)"
        />
        <text
          xmlSpace="preserve"
          x={108.28}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(185.564 -108.187)"
        >
          <tspan
            x="108.28049 110.26473"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS12A"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.782 202.974h9.946v3.892h-9.946z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.850908,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(185.341 -58.332)"
        />
        <text
          xmlSpace="preserve"
          x={108.28}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(185.341 -58.332)"
        >
          <tspan
            x="108.28049 110.26473"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS14A"}
          </tspan>
        </text>
      </g>
      <g
        style={{
          display: "inline",
          stroke: "#fff",
          strokeWidth: 0.333344,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M108.782 202.974h9.946v3.892h-9.946z"
          style={{
            display: "inline",
            fill: "red",
            fillOpacity: 1,
            stroke: "red",
            strokeWidth: 0.850908,
            strokeLinecap: "square",
            strokeLinejoin: "miter",
            strokeMiterlimit: 100,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "fill markers stroke",
          }}
          transform="translate(186.365 -63.489)"
        />
        <text
          xmlSpace="preserve"
          x={108.28}
          y={206.196}
          style={{
            fontSize: ".428625px",
            display: "inline",
            fill: "#ff0",
            strokeWidth: 0.0357188,
          }}
          transform="translate(186.365 -63.489)"
        >
          <tspan
            x="108.28049 110.26473"
            y={206.196}
            style={{
              fontVariant: "normal",
              fontWeight: 400,
              fontSize: "3.56877px",
              fontFamily: "Arial",
              writingMode: "lr-tb",
              fill: "#ff0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.0357188,
            }}
          >
            {"LS14B"}
          </tspan>
        </text>
      </g>
    </g>
    <text
      xmlSpace="preserve"
      x={53.096}
      y={166.384}
      style={{
        fontSize: "3.175px",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
    >
      <tspan
        x={53.096}
        y={166.384}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          fill: "#fff",
          strokeWidth: 0.1,
        }}
      >
        {"ENTRADA ESTE"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      x={50.386}
      y={196.314}
      style={{
        fontSize: "3.175px",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
    >
      <tspan
        x={50.386}
        y={196.314}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"ENTRADA OESTE"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      x={199.496}
      y={196.314}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
    >
      <tspan
        x={199.496}
        y={196.314}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          fill: "#fff",
          strokeWidth: 0.1,
        }}
      >
        {"A TALLERES"}
      </tspan>
    </text>
    <path
      d="m452.814 131.384-6.108-1.447 6.108-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(0 7.408)"
    />
    <text
      xmlSpace="preserve"
      x={454.205}
      y={131.119}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
      transform="translate(0 7.408)"
    >
      <tspan
        x={454.205}
        y={131.119}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"V\xCDA GRAL. 2"}
      </tspan>
    </text>
    <path
      d="m327.34 131.383-6.108-1.446 6.108-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(-.089 7.618)"
    />
    <text
      xmlSpace="preserve"
      x={328.73}
      y={131.119}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
      transform="translate(-.089 7.618)"
    >
      <tspan
        x={328.73}
        y={131.119}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"V\xCDA GRAL. 2"}
      </tspan>
    </text>
    <path
      d="m192.138 131.383-6.108-1.446 6.108-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(8.96 7.618)"
    />
    <text
      xmlSpace="preserve"
      x={193.529}
      y={131.119}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
      transform="translate(8.96 7.618)"
    >
      <tspan
        x={193.529}
        y={131.119}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"V\xCDA GRAL. 2"}
      </tspan>
    </text>
    <path
      d="m452.752 106.414-6.107-1.446 6.107-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(0 7.408)"
    />
    <text
      xmlSpace="preserve"
      x={454.144}
      y={106.149}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
      transform="translate(0 7.408)"
    >
      <tspan
        x={454.144}
        y={106.149}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"V\xCDA LOCAL 2"}
      </tspan>
    </text>
    <path
      d="m326.81 106.414-6.107-1.446 6.108-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(-.326 6.922)"
    />
    <text
      xmlSpace="preserve"
      x={328.202}
      y={106.15}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
      transform="translate(-.326 6.922)"
    >
      <tspan
        x={328.202}
        y={106.15}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"V\xCDA LOCAL 2"}
      </tspan>
    </text>
    <path
      d="m192.667 106.414-6.108-1.446 6.108-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(7.665 6.922)"
    />
    <text
      xmlSpace="preserve"
      x={194.058}
      y={106.15}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
      transform="translate(7.665 6.922)"
    >
      <tspan
        x={194.058}
        y={106.15}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"V\xCDA LOCAL 2"}
      </tspan>
    </text>
    <path
      d="m131.284 82.602-6.108-1.447 6.108-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(6.361 7.72)"
    />
    <text
      xmlSpace="preserve"
      x={133.143}
      y={82.337}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
      transform="translate(6.361 7.72)"
    >
      <tspan
        x={133.143}
        y={82.337}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"V\xCDA MERCADO"}
      </tspan>
    </text>
    <path
      d="m156.926 82.602 6.108-1.447-6.108-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(6.361 7.72)"
    />
    <text
      xmlSpace="preserve"
      x={189.716}
      y={36.564}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
      transform="translate(-6.835 6.656)"
    >
      <tspan
        x={189.716}
        y={36.564}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"V\xCDA GRAL 1"}
      </tspan>
    </text>
    <path
      d="m210.792 36.829 6.108-1.447-6.108-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(-9.816 6.656)"
    />
    <text
      xmlSpace="preserve"
      x={191.07}
      y={59.583}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
      transform="translate(-8.189 7.15)"
    >
      <tspan
        x={191.07}
        y={59.583}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"V\xCDA LOCAL 1"}
      </tspan>
    </text>
    <path
      d="m210.559 59.847 6.108-1.446-6.108-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(-8.189 7.15)"
    />
    <text
      xmlSpace="preserve"
      x={189.716}
      y={36.564}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
      transform="translate(112.475 6.656)"
    >
      <tspan
        x={189.716}
        y={36.564}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"V\xCDA GRAL. 1"}
      </tspan>
    </text>
    <path
      d="m337.72 36.83 6.109-1.447-6.108-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(-16.906 6.655)"
    />
    <text
      xmlSpace="preserve"
      x={189.716}
      y={36.564}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
      transform="translate(277.452 6.656)"
    >
      <tspan
        x={189.716}
        y={36.564}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"V\xCDA GRAL 1"}
      </tspan>
    </text>
    <path
      d="m478.215 36.83 6.107-1.447-6.107-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(7.047 6.655)"
    />
    <text
      xmlSpace="preserve"
      x={319.891}
      y={59.583}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
      transform="translate(1.387 7.15)"
    >
      <tspan
        x={319.891}
        y={59.583}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"V\xCDA LOCAL 1"}
      </tspan>
    </text>
    <path
      d="m338.85 59.847 6.108-1.446-6.108-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(1.387 7.15)"
    />
    <text
      xmlSpace="preserve"
      x={458.797}
      y={59.583}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
      transform="translate(8.37 7.15)"
    >
      <tspan
        x={458.797}
        y={59.583}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"V\xCDA LOCAL 1"}
      </tspan>
    </text>
    <path
      d="m478.286 59.847 6.108-1.446-6.108-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(8.37 7.15)"
    />
    <path
      d="m19.894 15.397-6.108-1.446 6.108-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(-4.233 -6.35)"
    />
    <text
      xmlSpace="preserve"
      x={21.285}
      y={15.133}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
      transform="translate(-4.233 -6.35)"
    >
      <tspan
        x={21.285}
        y={15.133}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"A FLORES SENTIDO DESCENDENTE"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      x={382.97}
      y={13.016}
      style={{
        fontSize: "3.175px",
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.1,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 100,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "markers stroke fill",
      }}
      transform="translate(30.692 185.738)"
    >
      <tspan
        x={382.97}
        y={13.016}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Arial",
          InkscapeFontSpecification: "Arial",
          strokeWidth: 0.1,
        }}
      >
        {"A CIUDADELA SENTIDO ASCENDENTE"}
      </tspan>
    </text>
    <path
      d="m446.91 13.28 6.107-1.446-6.108-1.554v3"
      style={{
        display: "inline",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.0556875,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(30.692 185.738)"
    />
  </svg>
  );
};

export default Mimico;