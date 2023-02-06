export const useAuth = () => {
    const token: string | null = localStorage.getItem('token')
    const isLoggedIn: boolean = token ? true: false
    console.log(isLoggedIn, token)
    return {token, isLoggedIn}
}