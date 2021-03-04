import React, { useMemo } from 'react'
import { Marker, Popup, Polygon } from 'react-leaflet'


export default function TesisComponent({ tesis, selectedTesis }) {

    const tesisi = tesis
    const eventHandlers = useMemo(
        () => ({
            click() {
                console.log("a", tesisi);
                selectedTesis(tesisi);
            },
        }),
        [],
    )



    return (
        <div style={{ zIndex: -999 }}>
            <Polygon pathOptions={ tesis.tesisTipi===1 ? {color: 'blue'} : {color: 'red'} } positions={tesis.koordinatlari} eventHandlers={eventHandlers} />
            <Marker position={tesis.koordinatlari[0]} >
                <Popup>
                    <div onClick={() => console.log('asd')}>
                        <h5>{tesis.tesisAdi}</h5>
                        <b>Yasak Alan Adı: </b> {tesis.yasakAlanAdi}
                        <br /> <b>Tesisin Adı:</b> {tesis.tesisAdi}
                        <br /> <b>Tesisin Nokta Koordinatları:</b> <br /> {tesis.koordinatlari.join(' ')},
                        <br /> <b>Üretilen Balık Türü:</b> {tesis.balikTuru}
                        <br /> <b>Tesisin Kapasitesi:</b> {tesis.kapasite}
                        <br /> <b>Tesis İletişim Bilgileri :</b> {tesis.iletisimBilgileri}
                    </div>
                </Popup>
            </Marker>
        </div>
    )
}