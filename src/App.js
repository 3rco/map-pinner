import React, { Component } from 'react'
import { MapContainer, TileLayer, Circle } from 'react-leaflet'
import LocationMarker from './LocationMarker'
import { Button, Modal } from 'react-bootstrap';

export default class App extends Component {
  state = {

  }

  render() {
    const ankara = [39.891499, 32.785427]
    const antalya = [36.391311, 32.486390]
    const nazilli = [37.922097, 28.278020]
    const adiyaman = [37.786415, 38.103969]
    /* {
          data={
              id: '',
              areaName: '',
              ownerName: '',
              phone:'',
              position: {  
               lat: 39.891499,
               lng: 32.785427,
            }
              areaEvent: {

              }
              areaCity : '',
              createdAt: '',
              info: '',              
              address: '',
              areaPoints: '',
              area: ''
              photos: '',
              documents: '',
          }
    } */

    /* {
              sidebar={

              } 
    } */
    const fillBlueOptions = { color: 'blue' }
    const redOptions = { color: 'red' }
    return (
      <div>
        <div style={{zIndex:999, position:'absolute', left: 200, top:200}}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
        <MapContainer
          center={{ lat: 39.518608, lng: 35.564017 }}
          zoom={7}
          scrollWheelZoom={true}
          style={{ height: '985px' }}>
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