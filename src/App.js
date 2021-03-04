import React, { Component } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import TesisComponent from './components/TesisComponent';

export default class App extends Component {
  state = {
    tesis: null,
    radioType: 'all',
    count: 0,
    data: {
      tesisler: [
        {
          tesisAdi: "Tesis A",
          koordinatlari: [
            [36.795667, 30.831083],
            [36.774109, 30.824536],
            [36.777023, 30.844905],
            [36.791589, 30.833993],
            [36.810229, 30.836175],
            [36.816635, 30.815079],
            [36.820130, 30.808895],
            [36.811205, 30.810386]
          ],
          yasakAlanAdi: "Tesis A Yasak Alan Adı",
          iletisimBilgileri: "5551234567",
          kapasite: "10000",
          balikTuru: "Çipura",
          tesisTipi: 1
        },
        {
          tesisAdi: "Tesis B",
          koordinatlari: [
            [38.873972, 26.791563],
            [38.859570, 26.814685],
            [38.834359, 26.788480],
            [38.813943, 26.740694],
            [38.819948, 26.685202],
            [38.846365, 26.654372],
            [38.887172, 26.663621],
            [38.907566, 26.691367]
          ],
          yasakAlanAdi: "Tesis B Yasak Alan Adı",
          iletisimBilgileri: "5051231111",
          kapasite: "15000",
          balikTuru: "Barbun",
          tesisTipi: 1
        },
        {
          tesisAdi: "Tesis C",
          koordinatlari: [
            [40.440975, 28.303690],
            [40.491124, 28.320169],
            [40.514097, 28.364115],
            [40.491124, 28.408060],
            [40.459785, 28.449259],
            [40.426340, 28.391581],
            [40.436794, 28.320169],
            [40.453515, 28.262491]
          ],
          yasakAlanAdi: "Tesis C Yasak Alan Adı",
          iletisimBilgileri: "5072551111",
          kapasite: "8000",
          balikTuru: "Alabalık",
          tesisTipi: 2
        },
        {
          tesisAdi: "Tesis D",
          koordinatlari: [
            [36.918368, 27.907399],
            [36.938856, 27.853546],
            [36.966729, 27.888425],
            [36.917944, 27.916765],
          ],
          yasakAlanAdi: "Tesis D Yasak Alan Adı",
          iletisimBilgileri: "5551234567",
          kapasite: "10000",
          balikTuru: "Hamsi",
          tesisTipi: 2
        },
      ]
    }
  }

  selectedTesis = (tesis) => {
    this.setState({ tesis });
  }

  handleRadio = (e) => {
    console.log(e.target.value)
    this.setState({ radioType: e.target.value });
  }

  render() {
    return (
      <div>
        <div style={{ zIndex: 999, position: 'absolute', border: 'solid', borderWidth: 1, height: '90%', width: '20%', margin: 15, marginTop: 80, backgroundColor: 'white', borderRadius: 10, padding: 10,wordWrap:'break-word' }}>
          <div style={{ padding: 5, margin: 5, border: 'solid', borderWidth: 1, borderRadius: 10, paddingLeft: 65 }}>
            <h5 style={{ textAlign: 'center', paddingRight: 65 }}>Filtre</h5>
            <input type={'radio'} name={'b'} value="2" style={{ margin: 5 }} onChange={(e) => this.handleRadio(e)} /> Kırmızı
          <input type={'radio'} name={'b'} value="1" style={{ margin: 5 }} onChange={(e) => this.handleRadio(e)} /> Mavi
          <input type={'radio'} name={'b'} value="all" style={{ margin: 5 }} onChange={(e) => this.handleRadio(e)} /> Hepsi
          </div>
          {
            this.state.tesis ?
            <div style={{ padding: 5, margin: 5 }}>
              <h4>{this.state.tesis.tesisAdi}</h4>
              <p><b>Yasak Alan Adı: </b> {this.state.tesis.yasakAlanAdi}</p>
              <p><b>Tesisin Nokta Koordinatları:</b> <br /> <small> {this.state.tesis.koordinatlari.join(' ')}</small></p>
              <p><b>Üretilen Balık Türü:</b> {this.state.tesis.balikTuru}</p>
              <p><b>Tesisin Kapasitesi:</b> {this.state.tesis.kapasite}</p>
              <p> <b>Tesis İletişim Bilgileri :</b> {this.state.tesis.iletisimBilgileri}</p>
            </div> : null
          }
        </div>

        <MapContainer
          center={{ lat: 38.961983, lng: 30.768232 }}
          zoom={6.5}
          scrollWheelZoom={true}
          style={{ height: '985px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {
            this.state.data.tesisler.map((tesis, i) => (
              this.state.radioType == tesis.tesisTipi ?
                <TesisComponent tesis={tesis} key={i} selectedTesis={this.selectedTesis} />
                : this.state.radioType === "all" ? <TesisComponent tesis={tesis} key={i} selectedTesis={this.selectedTesis} /> : null
            ))
          }

        </MapContainer>
      </div>
    )
  }
}