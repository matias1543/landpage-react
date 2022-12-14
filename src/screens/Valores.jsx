import { forwardRef } from 'react'
import RectangleImg from "../assets/imgs/rectangle.png";
import BulbImg from "../assets/imgs/bulb.png";
import CreativityImg from "../assets/imgs/values/creativity.png";
import ConfidentialityImg from "../assets/imgs/values/confidentiality.png";
import ExperienceImg from "../assets/imgs/values/experience.png";
import IntegrityImg from "../assets/imgs/values/integrity.png";
import ProfessionalImg from "../assets/imgs/values/professional.png";
import BalanceImg from "../assets/imgs/values/balance.png";

export const Valores = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="parentContainer" style={{ backgroundImage: `url(${RectangleImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '60px'}}>
            <section className='container'  id="values">
                <div className="max">
                    <div className="descrip">
                        <div className='box'>
                            <h1>Valores</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, similique repudiandae! Expedita placeat doloribus sit voluptates aliquam veritatis cumque totam molestiae. Culpa, unde tempore nihil asperiores quisquam maiores cum dolores?</p>
                        </div>
                        <div className='box-image'>
                            <img src={BulbImg} alt="bulb" />
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src={CreativityImg} alt="creativity" />
                            <h4>CREATIVIDAD</h4>
                        </div>
                        <div className="icon">
                            <img src={ConfidentialityImg} alt="confidentiality" />
                            <h4>CONFIDENCIALIDAD</h4>
                        </div>
                        <div className="icon">
                            <img src={ExperienceImg} alt="experience" />
                            <h4>EXPERIENCIA</h4>
                        </div>
                        <div className="icon">
                            <img src={IntegrityImg} alt="integrity.png" />
                            <h4>INTEGRIDAD</h4>
                        </div>
                        <div className="icon">
                            <img src={ProfessionalImg} alt="professional.png" />
                            <h4>PROFESIONALISMO</h4>
                        </div>
                        <div className="icon">
                            <img src={BalanceImg} alt="balance.png" />
                            <h4>ETICA</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
})