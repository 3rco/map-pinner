import React, { Component } from 'react'
import { MapContainer, TileLayer, Circle,  } from 'react-leaflet'
import LocationMarker from './LocationMarker'

export default class App extends Component {


  render() {
    const ankara = [39.891499, 32.785427]
    const antalya = [36.391311, 32.486390]
    const nazilli = [37.922097, 28.278020]
    const adiyaman = [37.786415, 38.103969]

    const fillBlueOptions = { color: 'blue' }
    const redOptions = { color: 'red'}
    return (
      <div>
        <MapContainer
          center={{ lat: 39.518608, lng: 35.564017 }} 
          zoom={7}
          scrollWheelZoom={true}
          style={{height:'985px'}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Circle center={ankara} pathOptions={fillBlueOptions} radius={200} />
          <Circle center={antalya} pathOptions={redOptions} radius={200} />
          <Circle center={nazilli} pathOptions={redOptions} radius={200} />
          <Circle center={adiyaman} pathOptions={fillBlueOptions} radius={200} />
        </MapContainer>
      </div>
    )
  }
}