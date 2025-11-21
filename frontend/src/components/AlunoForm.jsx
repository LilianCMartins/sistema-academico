import { useState } from 'react';
import { alunosAPI } from '../services/api';

function AlunoForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    matricula: '',
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
      await alunosAPI.create(formData);
      setFormData({ nome: '', email: '', matricula: '' });
      if (onSuccess) onSuccess();
      alert('Aluno criado com sucesso!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h3>Cadastrar Novo Aluno</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="matricula">Matrícula:</label>
          <input
            type="text"
            id="matricula"
            name="matricula"
            value={formData.matricula}
            onChange={handleChange}
            required
            minLength={5}
            maxLength={20}
          />
        </div>

        {error && <div className="error">{error}</div>}

        <button type="submit" disabled={loading} className="btn-submit">
          {loading ? 'Salvando...' : '✅ Cadastrar Aluno'}
        </button>
      </form>
    </div>
  );
}

export default AlunoForm;
