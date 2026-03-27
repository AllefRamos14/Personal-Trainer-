export default function Beneficios() {
    const beneficios = [
        { title: "Treinos personalizados", desc: "Planos feitos sob medida para seu objetivo." },
        { title: "Acompanhamento próximo", desc: "Suporte e ajustes constantes na sua evolução." },
        { title: "Resultados reais", desc: "Foco total em transformação e constância." },
    ];

    return (
        <section id="beneficios">
            <div className="container">
                <h2>Por que treinar comigo?</h2>

                {beneficios.map((b, i) => (
                    <article key={i}>
                        <h3>{b.title}</h3>
                        <p>{b.desc}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
