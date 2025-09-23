import React from 'react';
import Slider from 'react-slick';
//import '../style/carousel.css';
//import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        appendDots: (dots: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => (
            <div>
                <ul style={{
                    margin: "0px", padding: "0px"
                }}> {dots} </ul>
            </div>
        ),

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    {/*images are to be uploaded on IGEM servers, that's why those point to local files that are not in the git*/}
    return (
        <>
            <div className="full-width-carousel">
                <Slider {...settings}>
                    <div className="full-width-slide">
                        <a className="text" href="https://www.genopole.fr/">
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-genopole.webp"
                                alt="Genopole" 
                                className="slide-image" />
                         </a>     
                    </div>
                    <div className="full-width-slide">
                        <a className="text" href="https://www.univ-evry.fr/accueil.html">
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-univevry.webp"
                                alt="UnivEvry" 
                                className="slide-image" />
                         </a>     
                    </div>
                    <div className="full-width-slide">
                        <a className="text" href="https://www.graduate-school-life-sciences-and-health-paris-saclay.fr/">
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-gs-lsh.webp"
                                alt="GS-LSH" 
                                className="slide-image" />
                         </a>     
                    </div>
                    <div className="full-width-slide">
                        <a className="text" href="https://www.universite-paris-saclay.fr/objets-interdisciplinaires/microbes">
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-oi-microbes-h.webp"
                                alt="OI-MICROBES-h" 
                                className="slide-image" />
                         </a>     
                    </div>
                    <div className="full-width-slide">
                        <a className="text" href="https://bioconvs.org/">
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-bioconvs.webp"
                                alt="bioconvs" 
                                className="slide-image" />
                         </a>     
                    </div>
                    <div className="full-width-slide">
                        <a className="text" href="https://www.cea.fr/">
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-cea.webp"
                                alt="cea" 
                                className="slide-image" />
                         </a>     
                    </div>
                    <div className="full-width-slide">
                        <a className="text" href="https://jacob.cea.fr/drf/ifrancoisjacob/english/Pages/Departments/Genoscope.aspx">
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-genoscope.webp"
                                alt="Genoscope" 
                                className="slide-image" />
                         </a>     
                    </div>
                    <div className="full-width-slide">
                        <a className="text" href="https://jacob.cea.fr/drf/ifrancoisjacob/english/Pages/Departments/Genoscope/Laboratories/UMR-8030-Genomics-Metabolics.aspx">
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-umr8030.webp"
                                alt="UMR8030" 
                                className="slide-image" />
                         </a>     
                    </div>






                    <div className="full-width-slide">
                        <a className="text" href="https://ansabio.com/">
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-ansa.webp"
                                alt="Ansa" 
                                className="slide-image" />
                        </a>
                    </div>

                    <div className="full-width-slide">
                        <a className="text" href="https://eu.idtdna.com/page">
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-idt.webp"
                                alt="IDT" 
                                className="slide-image" />
                         </a>     
                    </div>
                    
                    <div className="full-width-slide">
                        <a className="text" href="https://www.twistbioscience.com/">
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-twist.webp"
                                alt="Twist" 
                                className="slide-image" />
                         </a>     
                    </div>

                    <div className="full-width-slide">
                        <a className="text" href="https://www.genscript.com/">
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-genscript.webp"
                                alt="GenScript" 
                                className="slide-image" />
                         </a>     
                    </div>

                    <div className="full-width-slide">
                        <a className="text" href="https://www.snapgene.com/">
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-snapgene.webp"
                                alt="SnapGene" 
                                className="slide-image" />
                         </a>     
                    </div>

                    
                    <div className="full-width-slide">
                        <a className="text" href="https://www.geneious.com/">
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-geneious.webp"
                                alt="Geneious" 
                                className="slide-image" />
                         </a>     
                    </div>
                    
                    
                    
                    
                    
                    <div className="full-width-slide">
                        <a className="text" href="https://www.neb-online.fr/"> 
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-neb.webp"
                                alt="NEB" 
                                className="slide-image" />
                        </a>     
                    </div>
                    
                    <div className="full-width-slide">
                        <a className="text" href="https://opentrons.com/">
                            <img src="https://static.igem.wiki/teams/5617/sponsors/logo-opentrons.webp"
                                alt="Opentrons" 
                                className="slide-image" />
                         </a>     
                    </div>
                    
                    
                    
                    
                </Slider>
            </div>
        </>
    );
};

export default Carousel;