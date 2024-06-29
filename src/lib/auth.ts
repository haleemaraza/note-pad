import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";


export const getUser = async () => {
    const auth = getSupabaseAuth();
    const user = (await auth.getUser()).data.user;
    if (!user) redirect("/login");
  
    return user;
  };

export const getSupabaseAuth = () => {


    const cookieStore = cookies()

    const supabaseClient = createServerClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_ANON_KEY!,

        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                // setAll(cookiesToSet) {
                //     cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
                // },
            },
        }
    )

    console.log('Supabase URL:', process.env.SUPABASE_URL);
console.log('Supabase Anon Key:', process.env.SUPABASE_ANON_KEY);

    return supabaseClient.auth

}