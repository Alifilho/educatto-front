const Home = () => {
  return (
    <main>
      <section className="hero-section">
        <div className="container row-reverse">
          <img src="img/browser-3614768_1280-removebg-preview.png" alt="Banda de jazz tocando" />
          <div>
            <h1 className="mt-2">Tenha os <span className="text-primary decoration">melhores</span> insights</h1>
            <p className="mt-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.</p>
            <a href="#" className="button">Comece agora</a>
          </div>
        </div>
      </section>
      <section className="courses-section">
        <div className="cards">
          <article className="card">
            <img src="img/Graficos.png" alt="ícone de teclas de piano" height="48" width="48"/>
            <strong>Gráficos e Análises</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.</p>
            <a href="#">
              <img src="img/arrow-right.svg" alt="Ir para página do curso" height="48" width="48"/>
            </a>
          </article>
          <article className="card">
            <img src="img/Duvida.png" alt="ícone da clave de sol" height="48" width="48"/>
            <strong>Identificação de dúvidas</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.</p>
            <a href="#">
              <img src="img/arrow-right.svg" alt="Ir para página do curso" height="48" width="48"/>
            </a>
          </article>
          <article className="card">
            <img src="img/Insights.png" alt="ícone de saxofone" height="48" width="48"/>
            <strong>Insights</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.</p>
            <a href="#">
              <img src="img/arrow-right.svg" alt="Ir para página do curso" height="48" width="48"/>
            </a>
          </article>
          <article className="card">
            <img src="img/Recomendacao.png" alt="ícone de bateria" height="48" width="48"/>
            <strong>Recomendações</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.</p>
            <a href="#">
              <img src="img/arrow-right.svg" alt="Ir para página do curso" height="48" width="48"/>
            </a>
          </article>
        </div>

        <h2 className="text-center">E <span className="text-primary">varios</span> outros!</h2>
        <a href="#" className="button mt-2 mx-auto">Conhecer a plataforma</a>
      </section>
    </main>
  )
}

export default Home