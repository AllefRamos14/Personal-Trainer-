export default function Servicos() {
    const servicos = [
        { title: "Treino Online", desc: "Treine de onde estiver com acompanhamento." },
        { title: "Treino Presencial", desc: "Acompanhamento direto e personalizado." },
        { title: "Avaliação Física", desc: "Análise completa para montar seu plano ideal." },
    ];

    return (
        <section id="servicos">
            <div className="container">
                <h2>Serviços</h2>

                {servicos.map((s, i) => (
                    <article key={i}>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
