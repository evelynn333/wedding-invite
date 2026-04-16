import { supabase } from "../lib/supabase";

export const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.error("LOGIN ERROR:", error.message);
        throw error;
    }
};

export const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
};

export const getUser = async () => {
    const { data } = await supabase.auth.getUser();
    return data.user;
};
