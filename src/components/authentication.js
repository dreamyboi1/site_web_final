
async function signUpwithEmail(email, pwd, user_info){
    const { user, session, error } = await supabase.auth.signUp(
        {
        email: email,
        password: pwd,
        },
        {
        data: user_info
        }
    )
}
    


async function signInWithEmail(email, pwd) {
    const { user, error } = await supabase.auth.signIn({
        email: email,
        password: pwd,
    })
    if (error) throw new Error(error.message)
}

async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw new Error(error.message)
}
