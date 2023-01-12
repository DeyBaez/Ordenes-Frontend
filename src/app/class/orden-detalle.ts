import { Articulo } from "./articulo";
import { Orden } from "./orden";

export class OrdenDetalle {
    id: number;
    cantidad: number;
    nombre: string;
    precioUnitario: number;
    total: number;
    idProduct: number;
}
