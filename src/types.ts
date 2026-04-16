export interface Invitado {
    id?: string;
    nombre: string;
    asistencia: "si" | "no";
    intolerancias: string;
    created_at?: string;
}
