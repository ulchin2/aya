import React from 'react';
import '../styles/CaseCard.css';

const CaseCard = ({ caseData }) => {
  return (
    <article className="case-card">
      <div className="case-card-header">
        <h3 className="case-card-title">{caseData.title}</h3>
      </div>
      
      <div className="case-card-content">
        <p className="case-card-ementa">{caseData.ementa}</p>
        <p className="case-card-date">Jurisprudência_{caseData.date}</p>
      </div>
    </article>
  );
};

export default CaseCard;
