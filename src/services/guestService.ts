import { supabase } from "../lib/supabase";

export const createGuest = async (data: {
    name: string;
    surname: string;
    attending: boolean;
    has_companion: boolean;
    has_allergies: boolean;
    dietary_restrictions: string;
}) => {
    const { error } = await supabase.from("guests").insert([data]);

    if (error) throw error;
};
