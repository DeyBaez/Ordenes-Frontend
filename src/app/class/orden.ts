import { Cliente } from "./cliente"
import { OrdenDetalle } from "./orden-detalle";

export class Orden {
    id: number;
    fecha: Date;
    nombreCliente: string;
    ordenDetalles:OrdenDetalle[]=[]
}
