import React from 'react'

import FacebookImg from "../assets/imgs/network/icon-facebook.svg"
import InstagramImg from "../assets/imgs/network/icon-instagram.svg"
import PinterestImg from "../assets/imgs/network/icon-pinterest.svg"
import TwitterImg from "../assets/imgs/network/icon-twitter.svg"
import YoutubeImg from "../assets/imgs/network/icon-youtube.svg"

export const Footer = () => {
    return (
        <footer>
            <div className="max">
                <div className="socials">
                    <h3>Visivia</h3>
                    <div className="network">
                        <a href="#"><img src={FacebookImg} alt="facebook" /></a>
                        <a href="#"><img src={InstagramImg} alt="instagram" /></a>
                        <a href="#"><img src={PinterestImg} alt="pinterest" /></a>
                        <a href="#"><img src={TwitterImg} alt="twitter" /></a>
                        <a href="#"><img src={YoutubeImg} alt="youtube" /></a>
                    </div>
                </div>
                <div className="utilities">
                    <a href="#">Nosotros</a>
                    <a href="#">Servicios</a>
                    <a href="#">Clientes</a>
                    <a href="#">Contacto</a>
                </div>
            </div>
        </footer>
    )
}
