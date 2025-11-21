import { useState, useEffect } from 'react';
import { cursosAPI } from '../services/api';

function CursosList() {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCursos();
  }, []);

  const loadCursos = async () => {
    try {
      setLoading(true);
      const data = await cursosAPI.getAll();
      setCursos(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja deletar este curso?')) return;
    
    try {
      await cursosAPI.delete(id);
      loadCursos();
    } catch (err) {
      alert('Erro ao deletar curso: ' + err.message);
    }
  };

  if (loading) return <div className="loading">Carregando cursos...</div>;
  if (error) return <div className="error">Erro: {error}</div>;

  return (
    <div className="list-container">
      <h3>Lista de Cursos ({cursos.length})</h3>
      {cursos.length === 0 ? (
        <p>Nenhum curso cadastrado.</p>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Carga Horária</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((curso) => (
              <tr key={curso.id}>
                <td>{curso.id}</td>
                <td>{curso.nome}</td>
                <td>{curso.cargaHoraria}h</td>
                <td>
                  <button 
                    className="btn-delete"
                    onClick={() => handleDelete(curso.id)}
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

export default CursosList;
