import AvatarOne from "../assets/imgs/avatar-anisha.png";
import AvatarTwo from "../assets/imgs/avatar-ali.png";
import AvatarThree from "../assets/imgs/avatar-richard.png";
import AvatarFour from "../assets/imgs/avatar-shanai.png";


export const Testimonios = () => {
    return (
        <div id="container">
            <article className="testimonials">
                <div className="wrapper -testimonials">
                    <h2 className="title _testimonials">
                        Nuestros Socios
                    </h2>
        
                    <div className="group _testimonials -text ">
                        <div className="card _testimonials">
                            <img src={AvatarOne} alt="portrait Anisha" className="img _testimonials" />
                            <h3 className="title _testimonials -card">
                                Ella Balinska
                            </h3>
                            <p className="copy _testimonials -card">
                                “Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam id facere suscipit quae dicta recusandae voluptas minima cumque, pariatur animi velit omnis quasi quas enim asperiores hic, sunt nisi consequatur!”
                            </p>
                        </div>
                        <div className="card _testimonials">
                        <img src={AvatarTwo} alt="portrait Ali" className="img _testimonials" />
                        <h3 className="title _testimonials -card">
                            Naomi Scott 
                        </h3>
                        <p className="copy _testimonials -card">
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem commodi, nemo repudiandae voluptatibus a dolores reiciendis quibusdam ab laboriosam magni explicabo nam eaque sed amet harum, odio, maxime repellendus consectetur.”
                        </p>
                        </div>
                        <div className="card _testimonials">
                        <img src={AvatarThree} alt="portrait Richard" className="img _testimonials" />
                        <h3 className="title _testimonials -card">
                            Johnny Cage
                        </h3>
                        <p className="copy _testimonials -card">
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iste saepe consequuntur quo, quae iusto enim voluptatem. Incidunt repellendus ipsa laudantium? In numquam provident harum fuga laboriosam ex quo at.”
                        </p>
                        </div>
                        <div className="card _testimonials">
                        <img src={AvatarFour} alt="portrait Shanai" className="img _testimonials" />
                        <h3 className="title _testimonials -card">
                            Kristen Stewart
                        </h3>
                        <p className="copy _testimonials -card">
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore nulla, explicabo itaque illum veniam placeat provident impedit animi atque aspernatur dicta velit voluptatem et. Quod, asperiores aliquid? Nisi, cumque!”
                        </p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
