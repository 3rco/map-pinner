import React, { Component } from 'react'
import { MapContainer, TileLayer, Circle, Marker, Popup, Polygon, Tooltip } from 'react-leaflet'
import LocationMarker from './LocationMarker'
import { Button, Modal } from 'react-bootstrap';

export default class App extends Component {
  state = {
    count:0
  }
  
  render() {
    const ankara = [41.924772, 32.763607]
    const antalya = [36.836948, 30.999471]
    const nazilli = [37.877516, 27.218473]
    const adiyaman = [36.546833, 28.750648]
    const akdeniz = [

      [36.795667, 30.831083],
      [36.774109, 30.824536],
      [36.777023, 30.844905],
      [36.791589, 30.833993],
      [36.810229, 30.836175],
      [36.816635, 30.815079],
      [36.820130, 30.808895],
      [36.811205, 30.810386]

    ]
    
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
        <div style={{ zIndex: 999, position: 'absolute', border: 'solid', borderWidth: 1, height: '90%', width: '20%', margin: 15, marginTop: 80, backgroundColor: 'white', borderRadius: 10 }}>
          {/* <div style={{height:500}}>
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
          </div> */}

        </div>
        <MapContainer
          center={{ lat: 39.518608, lng: 35.564017 }}
          zoom={6}
          scrollWheelZoom={true}
          style={{ height: '985px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Circle center={ankara} pathOptions={fillBlueOptions} radius={200} />
          <Marker position={ankara}>
            <Popup>
              <div>

                A pretty CSS3 popup. <br /> Easily customizable.
              </div>

            </Popup>
          </Marker>
          <Circle center={antalya} pathOptions={redOptions} radius={200} />
          <Marker position={antalya}>
            <Popup>
              <div>

                A pretty CSS3 popup. <br /> Easily customizable.
              </div>

            </Popup>
          </Marker>
          <Circle center={nazilli} pathOptions={redOptions} radius={200} />
          <Marker position={nazilli}>
            <Popup>
              <div>

                A pretty CSS3 popup. <br /> Easily customizable.
              </div>

            </Popup>
          </Marker>
          <Circle center={adiyaman} pathOptions={fillBlueOptions} radius={200} />
          <Marker position={adiyaman}>
            <Popup>
              <div>

                A pretty CSS3 popup. <br /> Easily customizable.
              </div>

            </Popup>
          </Marker>
          <Polygon pathOptions={redOptions} positions={akdeniz}>
          
          </Polygon>
          <Marker position={akdeniz[0]}>
            <Popup>
              <div>
                <h5>Tesis 5</h5>
                     <b>Yasak Alan Adı: </b> Yasak Alan Adı
              <br /> <b>Tesisin Adı:</b> Tesis 5
              <br /> <b>Tesisin Nokta Koordinatları:</b>  36.795667, 30.831083,
      
              <br /> <b>Üretilen Balık Türü:</b> Çipura
              <br /> <b>Tesisin Kapasitesi:</b> 15000
              <br /> <b>Tesis İletişim Bilgileri :</b> 5551234545
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  }
}