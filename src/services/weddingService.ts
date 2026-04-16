import { supabase } from "../lib/supabase";
import { Wedding } from "../types/wedding";

export const getWedding = async (): Promise<Wedding | null> => {
    const { data } = await supabase.from("wedding_info").select("*").single();

    return data;
};
