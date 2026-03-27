
// export default function Resultados() {
//     const depoimentos = [
//         { texto: "Em 3 meses perdi 8kg e mudei minha rotina!", autor: "João, aluno" },
//         { texto: "Hoje tenho disciplina e constância nos treinos.", autor: "Maria, aluna" },
//         { texto: "Nunca consegui manter uma rotina antes. Agora é automático.", autor: "Carlos, aluno" },
//     ];

//     return (
//         <section id="resultados">
//             <div className="container">
//                 <h2>Resultados reais de alunos</h2>
//                 <p className="subtitulo">
//                     Pessoas comuns, resultados de verdade com acompanhamento profissional.
//                 </p>

//                 {/* <div className="depoimentos-grid">
//                     {depoimentos.map((d, i) => (
//                         <figure key={i} className="depoimento-card">
//                             <blockquote>“{d.texto}”</blockquote>
//                             <figcaption>— {d.autor}</figcaption>
//                         </figure>
//                     ))}
//                 </div> */}

//                 <div className="depoimentos-grid">
//                     {depoimentos.map((d, i) => (
//                         <figure key={i} className="depoimento-card">
//                             <div className="depoimento-topo">
//                                 <div className="avatar" aria-hidden="true">{initials(d.autor)}</div>
//                                 <div className="meta">
//                                     <strong>{d.autor}</strong>
//                                     <span className="cargo">{d.cargo}</span>
//                                 </div>
//                                 <span className="badge">{d.destaque}</span>
//                             </div>

//                             <blockquote cite="#contato">
//                                 <p>“{d.texto}”</p>
//                             </blockquote>

//                             <div className="rodape">
//                                 <span className="stars" aria-label={`${d.nota} de 5 estrelas`}>
//                                     {renderStars(d.nota)}
//                                 </span>
//                                 <a className="link" href="#contato">Quero resultados também</a>
//                             </div>
//                         </figure>
//                     ))}
//                 </div>

//                 <div className="cta-resultados">
//                     <a className="btn" href="#contato">Agendar avaliação</a>
//                     <span className="cta-texto">Respostas rápidas no WhatsApp.</span>
//                 </div>

//             </div>
//         </section>
//     );
// }

export default function Resultados() {
    const depoimentos = [
        { texto: "Em 3 meses perdi 8kg e mudei minha rotina!", autor: "João", cargo: "Aluno", destaque: "-8kg • 3 meses", nota: 5 },
        { texto: "Hoje tenho disciplina e constância nos treinos.", autor: "Maria", cargo: "Aluna", destaque: "Mais constância", nota: 5 },
        { texto: "Nunca consegui manter uma rotina antes. Agora é automático.", autor: "Carlos", cargo: "Aluno", destaque: "Rotina sólida", nota: 5 },
    ];

    const renderStars = (n) => "★★★★★☆☆☆☆☆".slice(5 - n, 10 - n);

    const initials = (name) =>
        name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((p) => p[0].toUpperCase())
            .join("");

    return (
        <section id="resultados" aria-label="Resultados e depoimentos de alunos">
            <div className="container">
                <header className="resultados-header">
                    <h2>Resultados reais de alunos</h2>
                    <p className="subtitulo">
                        Pessoas comuns, resultados de verdade com acompanhamento profissional.
                    </p>
                </header>

                <div className="depoimentos-grid">
                    {depoimentos.map((d, i) => (
                        <figure key={i} className="depoimento-card">
                            <div className="depoimento-topo">
                                <div className="avatar" aria-hidden="true">{initials(d.autor)}</div>
                                <div className="meta">
                                    <strong>{d.autor}</strong>
                                    <span className="cargo">{d.cargo}</span>
                                </div>
                                <span className="badge">{d.destaque}</span>
                            </div>

                            <blockquote cite="#contato">
                                <p>“{d.texto}”</p>
                            </blockquote>

                            <div className="rodape">
                                <span className="stars" aria-label={`${d.nota} de 5 estrelas`}>
                                    {renderStars(d.nota)}
                                </span>
                                <a className="link" href="#contato">Quero resultados também</a>
                            </div>
                        </figure>
                    ))}
                </div>

                <div className="cta-resultados">
                    <a className="btn" href="#contato">Agendar avaliação</a>
                    <span className="cta-texto">Respostas rápidas no WhatsApp.</span>
                </div>
            </div>
        </section>
    );
}

