import { useState } from 'react';
import { cursosAPI } from '../services/api';

function CursoForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    nome: '',
    cargaHoraria: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const curso = {
        ...formData,
        cargaHoraria: parseInt(formData.cargaHoraria),
      };
      await cursosAPI.create(curso);
      setFormData({ nome: '', cargaHoraria: '' });
      if (onSuccess) onSuccess();
      alert('Curso criado com sucesso!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h3>Cadastrar Novo Curso</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome do Curso:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            minLength={3}
            maxLength={100}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cargaHoraria">Carga Horária (horas):</label>
          <input
            type="number"
            id="cargaHoraria"
            name="cargaHoraria"
            value={formData.cargaHoraria}
            onChange={handleChange}
            required
            min={1}
          />
        </div>

        {error && <div className="error">{error}</div>}

        <button type="submit" disabled={loading} className="btn-submit">
          {loading ? 'Salvando...' : '✅ Cadastrar Curso'}
        </button>
      </form>
    </div>
  );
}

export default CursoForm;
