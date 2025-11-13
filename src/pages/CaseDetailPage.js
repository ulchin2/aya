import React from 'react';
import '../styles/CaseDetailPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

const CaseDetailPage = () => {
  return (
    <div className="page-container">
      <Header />
      
      <main className="detail-main">
        <section className="search-section">
          <h1 className="search-title">FAÇA SUA PESQUISA AQUI. RÁPIDO. GRATUITO</h1>
          <SearchBar defaultValue="pesquise sobre processos" />
        </section>

        <div className="filters-section">
          <button className="filter-button filter-active">JURISPUDENCIA</button>
          <button className="filter-button">
            TIPO DE PROCESSO
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/0c99383e891e45bd75b45df9b29c8d3c92ed2457?width=34" 
              alt="Dropdown" 
              className="dropdown-icon"
            />
          </button>
          <button className="filter-button">
            TRIBUNAL
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/0c99383e891e45bd75b45df9b29c8d3c92ed2457?width=34" 
              alt="Dropdown" 
              className="dropdown-icon"
            />
          </button>
          <button className="filter-button">
            DATA
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/0c99383e891e45bd75b45df9b29c8d3c92ed2457?width=34" 
              alt="Dropdown" 
              className="dropdown-icon"
            />
          </button>
        </div>

        <div className="results-header">
          <p className="results-count">Resultados para: <strong>Direito Penal</strong></p>
        </div>

        <div className="case-detail-container">
          <div className="case-detail-card">
            <div className="case-header">
              <h2 className="case-title">
                TJBA - AGRAVO REGIMENTAL NO AGRAVO EM RECURSO ESPECIAL: AgRg no AREsp XXXXX TO XXXX/XXXXX-9
              </h2>
            </div>
            
            <div className="case-content">
              <div className="fraud-watermark">Fraude</div>
              
              <p className="case-ementa">
                Tribunal de Justiça do Estado da Bahia PODER JUDICIÁRIO QUARTA TURMA RECURSAL - PROJUDI PADRE CASIMIRO QUIROGA, LT. RIO DAS PEDRAS, QD 01, SALVADOR - BA ssa-turmasrecursais@tjba.jus.br - Tel.: 71 3372-7460 Ação: Procedimento do Juizado Especial Cível Recurso nº 0001231-07.2025.8.05.0120 Processo nº 0001231-07.2025.8.05.0120 Recorrente(s): BANCO BRADESCO CARTOES S.A. BANCO BRADESCO S A BRADESCOR CORRETORA DE SEGUROS LTDA Recorrido(s): EUNICE SILVA DE ASSIS EMENTA   RECURSOS INOMINADOS. JUIZADOS ESPECIAIS. DECISÃO MONOCRÁTICA (ART. 15, XI, DO REGIMENTO INTERNO DAS TURMAS RECURSAIS E ART. 932 DO CPC). DIREITO DO CONSUMIDOR. AÇÃO DE INDENIZAÇÃO POR DANOS MATERIAIS E MORAIS COM TUTELA DE URGÊNCIA. PARTE AUTORA VÍTIMA DE ROUBO DO SEU CELULAR. INVASÃO DE CONTA BANCÁRIA POR TERCEIROS. TRANSAÇÕES NÃO RECONHECIDAS. TENTATIVAS DE RESOLUÇÃO ADMINISTRATIVA SEM ÊXITO. FALHA NA PRESTAÇÃO DE SERVIÇOS EVIDENCIADA. IMBRÓGLIO VIVENCIADO NA ESFERA ADMINISTRATIVA. SENTENÇA DE PARCIAL PROCEDÊNCIA. ACIONADA NÃO SE DESINCUMBIU DO ÔNUS DA PROVA. RESPONSABILIDADE OBJETIVA DA INSTITUIÇÃO FINANCEIRA RÉ. FRAUDE DE TERCEIRO. SÚMULA 479 DO STJ. CANCELAMENTO DAS TRANSAÇÕES. DEVER DE RESTITUIÇÃO SIMPLES DOS VALORES. DANOS MORAIS NÃO CONFIGURADOS. RECURSOS DOS ACIONADOS. SENTENÇA MANTIDA PELOS SEUS PRÓPRIOS FUNDAMENTOS (ART. 46 DA LEI Nº 9.099/95). RECURSOS CONHECIDOS E DESPROVIDOS.
              </p>

              <div className="case-metadata">
                <div className="metadata-item">
                  <span className="metadata-label">Classe: Recurso Inominado</span>
                </div>
                <div className="metadata-item">
                  <span className="metadata-label">Data da Publicação: 10/10/2025</span>
                </div>
                <div className="metadata-item">
                  <span className="metadata-label">Tema: Direito Penal</span>
                </div>
                <div className="metadata-item">
                  <span className="metadata-label">Orgão Julgador: 4ª Turma Recursal</span>
                </div>
              </div>

              <button className="compare-button">COMPARAR PROCESSO</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseDetailPage;
