import React from 'react';
import '../assets/styles/About.css'

const About = () => {
    return (
        <React.Fragment>
            <div className="About">
                <div className="row text-center">
                    <div className="col">
                        <h2>Sobre mi</h2>
                        <p>Lorem ipsum dolor <span> sit amet</span> consectetur adipisicing elit. Ab, totam nesciunt! Expedita vitae officiis maxime cum, est, at optio ad debitis quos atque, dignissimos <span> ex facere tenetur</span> iste id corporis.</p>
                    </div>
                </div>
            </div>
            <div className="Cv text-center">
                <h2>Hoja de vida</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Eduacación</h4>
                       <div className="Cv__card">
                            <h2>University of Missouri - Kansas City</h2>
                            <p><span>Kansas city, MO, USA</span></p>
                            <p>Administración de empresas/emprendimiento</p>
                            <p><i>Agosto 2014 - Diciembre 2015</i></p> 
                       </div>
                       <div className="Cv__card">
                       <h2>Florida International University</h2>
                            <p><span>Miami, FL, USA</span></p>
                            <p>Negocios internaconales/marketing</p>
                            <p> <i>Enero 2016 -  Diciembre 2018</i> </p>
                       </div>
                       <div className="Cv__card">
                       <h2>Platzi</h2>
                            <p>Desarrollo front-end</p>
                            <p><span>Bogotá, Colombia</span></p>
                            <p><i>Enero 2019 - presente</i></p>
                       </div>
                    </div>
                    <div className="col-md-6">
                        <h4>Experiencia</h4>
                        <div className="Cv__card">
                            <h2>Freelance</h2>
                            <p><span>Bogotá, Colombia</span></p>
                            <p>Freelance</p>
                            <p><i>Marzo 2019 - Presente</i> </p>
                            
                       </div>
                       <div className="Cv__card">
                       <h2>Cuoco</h2>
                            <p><span>Bogotá, Colombia</span></p>
                            <p>Co-fundador, CSO</p>
                            <p> <i>Mayo 2020 -  presente</i> </p>
                       </div>
                       <div className="Cv__card">
                       <h2>Bake and take Pizzeria</h2>
                            <p><span>Bogotá, Colombia</span></p>
                            <p>Socio y gerente de ventas</p>
                            <p><i>Enero 2017 - Octubre 2019</i></p>
                       </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default About