"use client"

import { useEffect, useMemo, useState } from "react"
import { ExternalLink, MapPin } from "lucide-react"
import { CircleMarker, MapContainer, Popup, TileLayer, ZoomControl, useMap } from "react-leaflet"

import { partnerMapLocations, type PartnerMapLocation } from "@/lib/site-content"

const franceCenter: [number, number] = [46.603354, 1.888334]
const franceBounds: [[number, number], [number, number]] = [
  [41.0, -5.7],
  [51.8, 9.8],
]

function MapViewportController({ location }: { location: PartnerMapLocation | undefined }) {
  const map = useMap()

  useEffect(() => {
    if (!location) {
      map.flyTo(franceCenter, 5.7, { duration: 0.9 })
      return
    }

    map.flyTo(location.position, location.zoom ?? 7, {
      duration: 0.9,
    })
  }, [location, map])

  return null
}

export default function PartnersMap() {
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null)

  const activeLocation = useMemo(
    () => partnerMapLocations.find((location) => location.id === activeLocationId),
    [activeLocationId],
  )

  return (
    <div className="rounded-[1.9rem] border border-[#1A1A1A]/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.92),rgba(245,225,199,0.78))] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.07)] sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[#761218]">Carte France</p>
          <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] md:text-3xl">Points de presence</h2>
          <p className="max-w-xl font-sans text-sm font-light leading-relaxed text-[#1A1A1A]/62">
            Une vue compacte du reseau en France, avec les ateliers, distributeurs et grossistes dans les zones cles.
          </p>
        </div>

        <span className="rounded-full border border-[#761218]/12 bg-[#761218]/8 px-3 py-2 font-sans text-[10px] uppercase tracking-[0.22em] text-[#761218]">
          {partnerMapLocations.length} points
        </span>
      </div>

      <div className="overflow-hidden rounded-[1.6rem] border border-[#1A1A1A]/8">
        <div className="h-[260px] w-full sm:h-[300px] lg:h-[340px]">
          <MapContainer
            center={franceCenter}
            zoom={5.7}
            maxBounds={franceBounds}
            maxBoundsViscosity={0.9}
            className="h-full w-full"
            preferCanvas
            scrollWheelZoom={false}
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position="bottomright" />
            <MapViewportController location={activeLocation} />

            {partnerMapLocations.map((location) => {
              const isActive = location.id === activeLocation?.id
              const isDtox = location.id === "dtox-lille"

              return (
                <CircleMarker
                  key={location.id}
                  center={location.position}
                  eventHandlers={{
                    click: () => setActiveLocationId(location.id),
                  }}
                  pathOptions={{
                    color: isActive ? "#F9D9B9" : isDtox ? "#1A1A1A" : "#761218",
                    fillColor: isActive || isDtox ? "#761218" : "#1A1A1A",
                    fillOpacity: 0.95,
                    weight: isActive ? 3 : 2,
                  }}
                  radius={isActive ? 9 : isDtox ? 8 : 7}
                >
                  <Popup>
                    <div className="space-y-2">
                      <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#761218]">{location.role}</p>
                      <h3 className="font-serif text-lg font-semibold text-[#1A1A1A]">{location.name}</h3>
                      <p className="font-sans text-sm text-[#1A1A1A]/72">
                        {location.city}, {location.country}
                      </p>
                      <p className="font-sans text-sm text-[#1A1A1A]/62">{location.note}</p>
                      {location.href ? (
                        <a
                          href={location.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] text-[#761218]"
                        >
                          Voir le site
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : null}
                    </div>
                  </Popup>
                </CircleMarker>
              )
            })}
          </MapContainer>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveLocationId(null)}
          className={`rounded-full px-4 py-2 font-sans text-[11px] uppercase tracking-[0.18em] transition-colors ${
            activeLocationId === null
              ? "bg-[#1A1A1A] text-[#F9D9B9]"
              : "border border-[#1A1A1A]/12 bg-white/72 text-[#1A1A1A] hover:border-[#761218] hover:text-[#761218]"
          }`}
        >
          Vue France
        </button>

        {partnerMapLocations.map((location) => {
          const isActive = location.id === activeLocation?.id

          return (
            <button
              key={location.id}
              type="button"
              onClick={() => setActiveLocationId(location.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-sans text-[11px] uppercase tracking-[0.18em] transition-colors ${
                isActive
                  ? "bg-[#761218] text-white"
                  : "border border-[#1A1A1A]/12 bg-white/72 text-[#1A1A1A] hover:border-[#761218] hover:text-[#761218]"
              }`}
            >
              <MapPin className="h-3.5 w-3.5" />
              {location.city}
            </button>
          )
        })}
      </div>
    </div>
  )
}
