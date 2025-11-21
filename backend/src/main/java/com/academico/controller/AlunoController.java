package com.academico.controller;

import com.academico.model.Aluno;
import com.academico.model.Curso;
import com.academico.repository.AlunoRepository;
import com.academico.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/alunos")
public class AlunoController {

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private CursoRepository cursoRepository;

    // GET /alunos
    @GetMapping
    public List<Aluno> getAllAlunos() {
        return alunoRepository.findAll();
    }

    // GET /alunos/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Aluno> getAlunoById(@PathVariable Long id) {
        return alunoRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST /alunos
    @PostMapping
    public ResponseEntity<Aluno> createAluno(@RequestBody Aluno aluno) {
        Aluno savedAluno = alunoRepository.save(aluno);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedAluno);
    }

    // PUT /alunos/{id}
    @PutMapping("/{id}")
    public ResponseEntity<Aluno> updateAluno(@PathVariable Long id,
                                             @RequestBody Aluno alunoDetails) {
        Optional<Aluno> alunoOpt = alunoRepository.findById(id);

        if (alunoOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Aluno aluno = alunoOpt.get();
        aluno.setNome(alunoDetails.getNome());
        aluno.setEmail(alunoDetails.getEmail());
        aluno.setMatricula(alunoDetails.getMatricula());

        Aluno updatedAluno = alunoRepository.save(aluno);
        return ResponseEntity.ok(updatedAluno);
    }

    // DELETE /alunos/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAluno(@PathVariable Long id) {
        if (!alunoRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        alunoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // POST /alunos/{alunoId}/cursos/{cursoId} - Matricular aluno
    @PostMapping("/{alunoId}/cursos/{cursoId}")
    public ResponseEntity<Aluno> matricularAluno(
            @PathVariable Long alunoId,
            @PathVariable Long cursoId) {

        Optional<Aluno> alunoOpt = alunoRepository.findById(alunoId);
        Optional<Curso> cursoOpt = cursoRepository.findById(cursoId);

        if (alunoOpt.isEmpty() || cursoOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Aluno aluno = alunoOpt.get();
        Curso curso = cursoOpt.get();

        // Evita duplicações
        if (!aluno.getCursos().contains(curso)) {
            aluno.getCursos().add(curso);
        }
        if (!curso.getAlunos().contains(aluno)) {
            curso.getAlunos().add(aluno);
        }

        alunoRepository.save(aluno);
        cursoRepository.save(curso);

        return ResponseEntity.ok(aluno);
    }

    // DELETE /alunos/{alunoId}/cursos/{cursoId} - Desmatricular aluno
    @DeleteMapping("/{alunoId}/cursos/{cursoId}")
    public ResponseEntity<Aluno> removerMatricula(
            @PathVariable Long alunoId,
            @PathVariable Long cursoId) {

        Optional<Aluno> alunoOpt = alunoRepository.findById(alunoId);
        Optional<Curso> cursoOpt = cursoRepository.findById(cursoId);

        if (alunoOpt.isEmpty() || cursoOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Aluno aluno = alunoOpt.get();
        Curso curso = cursoOpt.get();

        aluno.getCursos().remove(curso);
        curso.getAlunos().remove(aluno);

        alunoRepository.save(aluno);
        cursoRepository.save(curso);

        return ResponseEntity.ok(aluno);
    }
}
