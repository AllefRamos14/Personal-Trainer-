


export default function Problemas() {



    const itens = [
        "Quer emagrecer e não consegue",
        "Não tem motivação para treinar sozinho",
        "Já tentou de tudo e não teve resultados",
        "Quer acompanhamento de verdade",
    ];

    return (
        <section id="problemas">
            <div className="container">
                <h2>Isso é pra você que:</h2>
                <ul>
                    {itens.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>


    );
}
