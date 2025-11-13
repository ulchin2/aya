import React from 'react';
import '../styles/HomePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div className="page-container">
      <Header />
      
      <main className="home-main">
        <section className="search-section">
          <h1 className="search-title">FAÇA SUA PESQUISA AQUI. RÁPIDO. GRATUITO</h1>
          <SearchBar />
        </section>

        <section className="features-section">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c83a46d47103bd7d2bae1abc14b5aa9b02c2d84a?width=130" 
                alt="Balance scale icon" 
                className="feature-icon"
              />
            </div>
            <p className="feature-text">
              Pesquisa rápida  e fácil. Com acesso a mais de 500 mil processos
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/0ee43de225c774b0e01f96848379fa9a3c3f1dd7?width=124" 
                alt="Contract icon" 
                className="feature-icon"
              />
            </div>
            <p className="feature-text">
              Processos na integra. Acesse seus processos sem burocracia
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/3a00994d404ad170cd27a3d08573678b82a564f2?width=128" 
                alt="Social justice icon" 
                className="feature-icon"
              />
            </div>
            <p className="feature-text">
              Com acesso gratuito, todos têm o direito ao processo!
            </p>
          </div>
        </section>

        <section className="how-it-works-section">
          <div className="how-it-works-content">
            <h2 className="section-title">COMO FUNCIONA A NOSSA PESQUISA?</h2>
            <div className="description-text">
              <p>
                A pesquisa utiliza agentes de inteligência artificial para compreender o contexto e o significado das consultas dos usuários, indo além das palavras-chave.
Quando uma busca é feita, o sistema interpreta a intenção da pergunta, localiza as informações mais relevantes em suas fontes de dados e gera uma resposta clara e contextualizada.
              </p>
              <p>
                Os agentes trabalham de forma colaborativa  alguns são responsáveis por entender o pedido, outros por buscar e filtrar informações, e um agente final por organizar e apresentar o resultado.
Isso permite que o usuário obtenha respostas precisas, resumidas e personalizadas, em vez de apenas uma lista de links ou documentos.
              </p>
            </div>
          </div>

          <div className="how-it-works-visual">
            <div className="visual-card">
              <h3 className="visual-title">PESQUISE</h3>
              <div className="visual-search-bar">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0e59734c4addbb52764fd2c872fe510a5ed17722?width=34" 
                  alt="Search icon" 
                  className="search-icon-small"
                />
              </div>
              
              <h3 className="visual-title">DESCUBRA</h3>
              <div className="discovery-steps">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/53673d3cad9097dddeae97b2d8d2caf6ea0dc7ee?width=72" 
                  alt="Scale icon" 
                  className="step-icon"
                />
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0372e4760e61949b9f408883cb02b106e9fc53e5?width=64" 
                  alt="Arrow icon" 
                  className="arrow-icon"
                />
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/941202cedf603cfa869b3d5c1cc29fb47e1e8242?width=80" 
                  alt="Gavel icon" 
                  className="step-icon"
                />
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0372e4760e61949b9f408883cb02b106e9fc53e5?width=64" 
                  alt="Arrow icon" 
                  className="arrow-icon"
                />
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2018d19d1c18473c67ea91d0ec0db55d3edd7e24?width=66" 
                  alt="Darts icon" 
                  className="step-icon"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <p className="cta-text">
              Crie uma conta e tenha acesso aos seus processos. <strong>É gratuito</strong>
            </p>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f4192d902c8cf8128a3e3d1c602ccd01a5e239fc?width=250" 
              alt="Auction gavel icon" 
              className="cta-icon"
            />
          </div>
          <button className="cta-button">CRIAR CONTA</button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
