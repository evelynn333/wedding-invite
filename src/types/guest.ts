export interface Guest {
    id: string;
    name: string;
    surname: string;
    attending: boolean;
    has_companion: boolean;
    has_allergies: boolean;
    dietary_restrictions: string;
    created_at: string;
}
