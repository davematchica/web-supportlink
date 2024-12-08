import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export const formActionDefault = {
  formProcess: false,
  formStatus: 200,
  formErrorMesage: '',
  formSucessMesage: ''
}

export const isAuthenticated = async () => {
  const { data, error } = await supabase.auth.setSession()

  if (error) {
    console.error('Error getting session:', error.message)
  }

  return !!data.session
}