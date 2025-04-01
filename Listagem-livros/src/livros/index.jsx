
import EstruturaPagina from '../componentes/EstruturaPagina';
import Secao from '../componentes/Secao';
import Cadastro from './cadastro';
import Listagem from './listagem';
import { useEffect, useState } from "react";
import { buscarLivros } from "../services/livro";

const PaginaLivros = () => {

  const [ livros, setLivros ] = useState([]);

  const carregarLivros = async () => {
      const livros = await buscarLivros();
      setLivros(livros.data);
      
  }

  useEffect(() => {
      carregarLivros();
  }, []);


  return <EstruturaPagina titulo="Livros">

    <Secao titulo="Cadastro de Livros">
      <Cadastro/>
    </Secao>

    <Secao titulo="Listagem de Livros">
      <Listagem livros={livros}/>
    </Secao>

  </EstruturaPagina>
}

export default PaginaLivros
