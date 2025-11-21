import { useState, useEffect } from 'react';
import { alunosAPI } from '../services/api';

function AlunosList() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAlunos();
  }, []);

  const loadAlunos = async () => {
    try {
      setLoading(true);
      const data = await alunosAPI.getAll();
      setAlunos(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja deletar este aluno?')) return;
    
    try {
      await alunosAPI.delete(id);
      loadAlunos();
    } catch (err) {
      alert('Erro ao deletar aluno: ' + err.message);
    }
  };

  if (loading) return <div className="loading">Carregando alunos...</div>;
  if (error) return <div className="error">Erro: {error}</div>;

  return (
    <div className="list-container">
      <h3>Lista de Alunos ({alunos.length})</h3>
      {alunos.length === 0 ? (
        <p>Nenhum aluno cadastrado.</p>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Matrícula</th>
              <th>Cursos</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr key={aluno.id}>
                <td>{aluno.id}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.email}</td>
                <td>{aluno.matricula}</td>
                <td>
                  {aluno.cursos && aluno.cursos.length > 0
                    ? aluno.cursos.map(c => c.nome).join(', ')
                    : 'Nenhum'}
                </td>
                <td>
                  <button 
                    className="btn-delete"
                    onClick={() => handleDelete(aluno.id)}
                  >
                    🗑️ Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AlunosList;
