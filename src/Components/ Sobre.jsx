import useRevealOnScroll from "../Hooks/useRevealOnScroll";

import FotoDani from "../assets/Foto-dani.png";

export default function Sobre() {
    const revealRef = useRevealOnScroll();


    return (
        // <section id="sobre" className="reveal" ref={revealRef}>
        //     <div className="container">
        //         <h2>Sobre mim</h2>
        //         <p>
        //             Sou <span>Daniele Santos,</span> Personal Trainer formada em Educação Física e especialista em
        //             treinos personalizados de alta performance. Tenho foco em ajudar pessoas que querem
        //             emagrecer, ganhar massa muscular e melhorar a saúde de forma segura e eficiente.
        //         </p>
        //     </div>
        // </section>

        <section id="sobre" className="reveal" ref={revealRef}>
            <div className="container sobre-container">

                <div className="sobre-texto">
                    <h2>Quem vai te ajudar a conquistar seus resultados</h2>
                    <h4>
                        <span>Daniele Santos</span> • Personal Trainer • Educação Física
                    </h4>

                    <p>
                        Olá, sou <span>Daniele Santos</span>, Personal Trainer formada em Educação Física e especialista em
                        treinos personalizados de alta performance. Ajudo pessoas a emagrecer, ganhar massa muscular e
                        melhorar a saúde com métodos seguros, eficientes e adaptados à sua rotina.
                    </p>

                    <ul>
                        <li>✅ Emagrecimento saudável</li>
                        <li>✅ Ganho de massa muscular</li>
                        <li>✅ Mais disposição e qualidade de vida</li>
                    </ul>

                    <p>
                        Meu foco é transformar objetivos em resultados reais, com acompanhamento profissional
                        e treinos feitos sob medida para você — sem fórmulas mágicas.
                    </p>

                    <button>Quero começar agora</button>
                </div>

                <div className="sobre-imagem">
                    <img src={FotoDani} alt="Daniele Santos Personal Trainer" />
                </div>

            </div>
        </section>

    );
}
