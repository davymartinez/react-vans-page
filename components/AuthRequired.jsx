import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export default function AuthRequired() {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const location = useLocation()

    if (!isLoggedIn) {
        return (
            <Navigate 
                to="/login" 
                state={{
                    message: "You need to login first!", 
                    from: location.pathname
                }}
                replace
            />
        )
    }
    return (
        <Outlet />
    )
}