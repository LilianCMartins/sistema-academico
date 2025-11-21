import { useState } from 'react';
import './App.css';
import AlunosList from './components/AlunosList';
import CursosList from './components/CursosList';
import AlunoForm from './components/AlunoForm';
import CursoForm from './components/CursoForm';

function App() {
  const [activeTab, setActiveTab] = useState('alunos');
  const [refreshAlunos, setRefreshAlunos] = useState(0);
  const [refreshCursos, setRefreshCursos] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎓 Sistema Acadêmico</h1>
        <p>Gerenciamento de Alunos e Cursos</p>
      </header>

      <nav className="tabs">
        <button 
          className={activeTab === 'alunos' ? 'active' : ''}
          onClick={() => setActiveTab('alunos')}
        >
          👨‍🎓 Alunos
        </button>
        <button 
          className={activeTab === 'cursos' ? 'active' : ''}
          onClick={() => setActiveTab('cursos')}
        >
          📚 Cursos
        </button>
      </nav>

      <main className="content">
        {activeTab === 'alunos' && (
          <div>
            <h2>Gerenciar Alunos</h2>
            <AlunoForm onSuccess={() => setRefreshAlunos(prev => prev + 1)} />
            <AlunosList key={refreshAlunos} />
          </div>
        )}

        {activeTab === 'cursos' && (
          <div>
            <h2>Gerenciar Cursos</h2>
            <CursoForm onSuccess={() => setRefreshCursos(prev => prev + 1)} />
            <CursosList key={refreshCursos} />
          </div>
        )}
      </main>

      <footer className="App-footer">
        <p>Sistema Acadêmico - Spring Boot 3 + React + Vite</p>
      </footer>
    </div>
  );
}

export default App;
