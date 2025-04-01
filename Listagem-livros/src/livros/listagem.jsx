import '../assets/css/listagem.css';
import '../assets/css/tabela.css'

const Listagem = props => {
    const { livros } = props;

    return (
        <>
            {(livros.length === 0) && <span>Não existem livros cadastrados.</span>}
            {livros.length > 0 && 
                <div className='listagem'>
                    <table className='tabela-livros'>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>ISBN</th>
                                <th>Gênero</th>
                                <th className='acoes' colSpan={2}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livros.map(livro => (
                                <tr key={livro.id}>
                                    <td>{livro.title}</td>
                                    <td>{livro.author}</td>
                                    <td>{livro.isbn}</td>
                                    <td>{livro.genre}</td>
                                    <td className='acoes'><button className='btn'>Editar</button></td>
                                    <td className='acoes'><button className='btn'>Excluir</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}

export default Listagem;