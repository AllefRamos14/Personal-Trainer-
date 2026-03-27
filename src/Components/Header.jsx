import logo from "../assets/daniele santos (1).png";

export default function Header() {
    return (
        <header>
            <div className="container">
                <img src={logo} alt="logo" loading="lazy" />

                <nav aria-label="Menu principal">

                    <ul>
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#beneficios">Benefícios</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#resultados">Resultados</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>

                <a href="#contato" className="btn-cta">Agendar Avaliação</a>
            </div>
        </header>
    )
}
