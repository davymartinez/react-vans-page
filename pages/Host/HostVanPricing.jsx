import React from "react"
import { useParams, useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const params = useParams()
    const { currentVan } = useOutletContext()
    
    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <h3 className="host-van-price">{USDollar.format(currentVan.price)}<span>/day</span></h3>
    )
}