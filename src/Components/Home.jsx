
import Banner from "../assets/fi-woman-home-workout-emea.jpg";
import Banner2 from "../assets/backgroud.jpeg";



export default function Home() {
    return (

        <section id="inicio">


            <div className="container">
                <div className="hero-text">
                    <h1>Transforme seu corpo com treinos personalizados</h1>
                    <p>
                        Treinos feitos pra você, com acompanhamento profissional e foco em resultados reais.
                    </p>
                    <a href="#contato" className="btn-cta">Quero começar agora</a>
                </div>

                <div className="hero-image">

                    <img src={Banner2} alt="Personal Trainer treinando aluno" loading="lazy" />
                </div >
            </div >
        </section >
    )
}