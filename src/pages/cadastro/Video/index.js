import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Do you want to contribute to Polyflix?</h1>

      <Link to="/cadastro/categoria">
        Add video category
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo; 