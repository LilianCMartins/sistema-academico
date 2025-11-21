const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8082';

// Funções para Alunos
export const alunosAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/alunos`);
    if (!response.ok) throw new Error('Erro ao buscar alunos');
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/alunos/${id}`);
    if (!response.ok) throw new Error('Erro ao buscar aluno');
    return response.json();
  },

  create: async (aluno) => {
    const response = await fetch(`${API_BASE_URL}/alunos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(aluno),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao criar aluno');
    }
    return response.json();
  },

  update: async (id, aluno) => {
    const response = await fetch(`${API_BASE_URL}/alunos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(aluno),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao atualizar aluno');
    }
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/alunos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Erro ao deletar aluno');
  },

  getCursos: async (alunoId) => {
    const response = await fetch(`${API_BASE_URL}/alunos/${alunoId}/cursos`);
    if (!response.ok) throw new Error('Erro ao buscar cursos do aluno');
    return response.json();
  },

  matricularEmCurso: async (alunoId, cursoId) => {
    const response = await fetch(`${API_BASE_URL}/alunos/${alunoId}/cursos/${cursoId}`, {
      method: 'POST',
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao matricular aluno');
    }
    return response.json();
  },

  removerMatricula: async (alunoId, cursoId) => {
    const response = await fetch(`${API_BASE_URL}/alunos/${alunoId}/cursos/${cursoId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao remover matrícula');
    }
    return response.json();
  },
};

// Funções para Cursos
export const cursosAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/cursos`);
    if (!response.ok) throw new Error('Erro ao buscar cursos');
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/cursos/${id}`);
    if (!response.ok) throw new Error('Erro ao buscar curso');
    return response.json();
  },

  create: async (curso) => {
    const response = await fetch(`${API_BASE_URL}/cursos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(curso),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao criar curso');
    }
    return response.json();
  },

  update: async (id, curso) => {
    const response = await fetch(`${API_BASE_URL}/cursos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(curso),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao atualizar curso');
    }
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/cursos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao deletar curso');
    }
  },

  getAlunos: async (cursoId) => {
    const response = await fetch(`${API_BASE_URL}/cursos/${cursoId}/alunos`);
    if (!response.ok) throw new Error('Erro ao buscar alunos do curso');
    return response.json();
  },
};
