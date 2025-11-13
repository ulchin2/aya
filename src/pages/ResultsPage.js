import React from 'react';
import '../styles/ResultsPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CaseCard from '../components/CaseCard';

const ResultsPage = () => {
  const mockCases = [
    {
      id: 1,
      title: 'STJ-AGRAVO REGIMENTAL NO AGRAVO EM RECURSO ESPECIAL: AgRg no AREsp XXXXX TO XXXX/XXXXX-9',
      ementa: 'Ementa: PENAL E PROCESSUAL PENAL AGRAVO REGIMENTAL NO AGRAVO EM RECURSO ESPECIAL. ROUBO. CAUSA DE AUMENTO. EMPREGO DE ARMA DE FOGO, DESNECESSIDADE DE APREENSÃO E REALIZAÇÃO DE PERÍCIA, DEPOIMENTO DA VÍTIMA COMPROVANDO O EMPREGO DO ARTEFATO. REVERSÃO DO JULGADO PELO TRIBUNAL DE ORIGEM. IMPOSSIBILIDADE REVISÃO DO CONTEÚDO FÁTICO-PROBATÓRIO, ÓBICE DA SÚMULA N. 7/STJ. 1. A Terceira Seção do Superior Tribunal de Justiça, no julgamento dos Embargos de Divergência n. 961.863/RS, firmou o entendimento de que é dispensável a apreensão e a pericia da arma de fogo, para a incidència da majorante do § 2º-A, I, do art. 157 do CP, quando existirem, nos autos, outros elementos de prova que evidenciem a sua utilização no roubo, como no caso concreto, em que ha declaração da vítima atestando o seu emprego. 2. A Corte originária reconheceu a existència de elementos de prova suficientes para embasar a aplicação da majorante do art. 157, § 2º-A, I, do CP. Assim, a mudança da conclusão alcançada no acórdão impugnado, de modo a afastar a referida majorante, exigiria o reexame das provas, o que é vedado nesta instância extraordinária, uma vez que o Tribunal a quo é soberano na análise do acervo fático-probatório dos autos (Súmula n. 7 /STJ e Súmula n. 279 /STF). 3. Agravo regimental a que se nega provimento.',
      date: '22/10/2025'
    },
    {
      id: 2,
      title: 'STJ-AGRAVO REGIMENTAL NO AGRAVO EM RECURSO ESPECIAL: AgRg no AREsp XXXXX TO XXXX/XXXXX-9',
      ementa: 'Ementa: PENAL E PROCESSUAL PENAL AGRAVO REGIMENTAL NO AGRAVO EM RECURSO ESPECIAL. ROUBO. CAUSA DE AUMENTO. EMPREGO DE ARMA DE FOGO, DESNECESSIDADE DE APREENSÃO E REALIZAÇÃO DE PERÍCIA, DEPOIMENTO DA VÍTIMA COMPROVANDO O EMPREGO DO ARTEFATO. REVERSÃO DO JULGADO PELO TRIBUNAL DE ORIGEM. IMPOSSIBILIDADE REVISÃO DO CONTEÚDO FÁTICO-PROBATÓRIO, ÓBICE DA SÚMULA N. 7/STJ. 1. A Terceira Seção do Superior Tribunal de Justiça, no julgamento dos Embargos de Divergência n. 961.863/RS, firmou o entendimento de que é dispensável a apreensão e a pericia da arma de fogo, para a incidència da majorante do § 2º-A, I, do art. 157 do CP, quando existirem, nos autos, outros elementos de prova que evidenciem a sua utilização no roubo, como no caso concreto, em que ha declaração da vítima atestando o seu emprego. 2. A Corte originária reconheceu a existència de elementos de prova suficientes para embasar a aplicação da majorante do art. 157, § 2º-A, I, do CP. Assim, a mudança da conclusão alcançada no acórdão impugnado, de modo a afastar a referida majorante, exigiria o reexame das provas, o que é vedado nesta instância extraordinária, uma vez que o Tribunal a quo é soberano na análise do acervo fático-probatório dos autos (Súmula n. 7 /STJ e Súmula n. 279 /STF). 3. Agravo regimental a que se nega provimento.',
      date: '22/10/2025'
    },
    {
      id: 3,
      title: 'STJ-AGRAVO REGIMENTAL NO AGRAVO EM RECURSO ESPECIAL: AgRg no AREsp XXXXX TO XXXX/XXXXX-9',
      ementa: 'Ementa: PENAL E PROCESSUAL PENAL AGRAVO REGIMENTAL NO AGRAVO EM RECURSO ESPECIAL. ROUBO. CAUSA DE AUMENTO. EMPREGO DE ARMA DE FOGO, DESNECESSIDADE DE APREENSÃO E REALIZAÇÃO DE PERÍCIA, DEPOIMENTO DA VÍTIMA COMPROVANDO O EMPREGO DO ARTEFATO. REVERSÃO DO JULGADO PELO TRIBUNAL DE ORIGEM. IMPOSSIBILIDADE REVISÃO DO CONTEÚDO FÁTICO-PROBATÓRIO, ÓBICE DA SÚMULA N. 7/STJ. 1. A Terceira Seção do Superior Tribunal de Justiça, no julgamento dos Embargos de Divergência n. 961.863/RS, firmou o entendimento de que é dispensável a apreensão e a pericia da arma de fogo, para a incidència da majorante do § 2º-A, I, do art. 157 do CP, quando existirem, nos autos, outros elementos de prova que evidenciem a sua utilização no roubo, como no caso concreto, em que ha declaração da vítima atestando o seu emprego. 2. A Corte originária reconheceu a existència de elementos de prova suficientes para embasar a aplicação da majorante do art. 157, § 2º-A, I, do CP. Assim, a mudança da conclusão alcançada no acórdão impugnado, de modo a afastar a referida majorante, exigiria o reexame das provas, o que é vedado nesta instância extraordinária, uma vez que o Tribunal a quo é soberano na análise do acervo fático-probatório dos autos (Súmula n. 7 /STJ e Súmula n. 279 /STF). 3. Agravo regimental a que se nega provimento.',
      date: '22/10/2025'
    }
  ];

  return (
    <div className="page-container">
      <Header />
      
      <main className="results-main">
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
          <p className="results-count">Resultados para: <strong>ROUBO</strong></p>
        </div>

        <div className="results-list">
          {mockCases.map(caseData => (
            <CaseCard key={caseData.id} caseData={caseData} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResultsPage;
