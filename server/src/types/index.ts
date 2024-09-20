declare module "express-session" {
    interface SessionData {
        passKey?: string,
        loggedIn?: boolean
    }
}