import React from "react"
import { useParams, useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const params = useParams()
    const { currentVan } = useOutletContext()

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <img src={currentVan.imageUrl} alt={currentVan.name} className="host-van-detail-image" />
        </>
    )
}