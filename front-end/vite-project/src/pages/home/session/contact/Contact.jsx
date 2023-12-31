import { Fragment } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'


const Contact = () => {

    return (
        <Fragment>
            <div className="contact-container">
                <div className="content-left">
                    <div className="wrapper">
                        <div className="map">
                            <MapContainer className="mapStyle" center={[-6.979309, 107.628314]} zoom={15}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                <Marker position={[-6.979309, 107.628314]}>
                                    <Popup>
                                        My Adress
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                        <div className='address-box'>
                            <h5>Map Street</h5>
                            <p>Sahabat Laundry Gg.H Atmawigena No.88 Citereup, KAB. Bandung, Dayeuhkolot, Jawa Barat, ID 40257</p>
                        </div>
                    </div>
                </div>
                <div className="content-right">
                    <div className="text-content">
                        <h1>Contact</h1>
                        <div className="address">
                            <h3>Address</h3>
                            <p>Sahabat Laundry Gg.Haji Atmawigena No.88, Desa Citereup, Kecamatan Dayeuhkolot, Kabupaten Bandung, 40257</p>
                        </div>
                        <div className="email">
                            <h3>Email</h3>
                            <p>ahlilfikri49@gmail.com</p>
                        </div>
                        <div className="telephone">
                            <h3>telephone</h3>
                            <p>+62 882-1033-5073</p>
                        </div>
                        <div className="social-media">
                            <FontAwesomeIcon className="instagram" icon={faInstagram} size="xl" color="grey" />
                            <FontAwesomeIcon className="linkedin" icon={faLinkedin} size="xl" color="grey" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Contact
