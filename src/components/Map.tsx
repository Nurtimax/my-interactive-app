"use client"

import React, {useRef, useEffect, useState} from "react"
import * as maptilersdk from "@maptiler/sdk"
import "@maptiler/sdk/dist/maptiler-sdk.css"

export default function Map() {
   const mapContainer = useRef<HTMLDivElement | null>(null)
   const map = useRef<maptilersdk.Map | null>(null)
   const tokyo = {lng: 139.753, lat: 35.6844}
   const [zoom] = useState(14)
   maptilersdk.config.apiKey = "cT5oX6D2PP9OblZCwWdZ"

   useEffect(() => {
      if (!mapContainer.current) return

      if (map.current) return

      map.current = new maptilersdk.Map({
         container: mapContainer.current,
         style: maptilersdk.MapStyle.STREETS,
         center: [tokyo.lng, tokyo.lat],
         zoom: zoom
      })

      new maptilersdk.Marker({color: "#FF0000"})
         .setLngLat([139.7525, 35.6846])
         .addTo(map.current)
   }, [tokyo.lng, tokyo.lat, zoom])

   return (
      <div className="relative w-full h-[100vh]" style={{height: "100vh"}}>
         <div
            ref={mapContainer}
            className="absolute inset-0 w-full h-[100%]"
            style={{height: "100%"}}
         ></div>
      </div>
   )
}
