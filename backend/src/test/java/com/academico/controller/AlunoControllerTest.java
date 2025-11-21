package com.academico.controller;

import com.academico.model.Aluno;
import com.academico.repository.AlunoRepository;
import com.academico.repository.CursoRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Optional;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = AlunoController.class)
@AutoConfigureMockMvc(addFilters = false) // ⛔ Desativa filtros de segurança
public class AlunoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AlunoRepository alunoRepository;

    @MockBean
    private CursoRepository cursoRepository;

    @Test
    void getAllAlunos_DeveRetornarLista() throws Exception {
        Aluno a1 = new Aluno();
        a1.setId(1L);
        a1.setNome("João");

        Aluno a2 = new Aluno();
        a2.setId(2L);
        a2.setNome("Maria");

        when(alunoRepository.findAll()).thenReturn(Arrays.asList(a1, a2));

        mockMvc.perform(get("/alunos")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(2));
    }

    @Test
    void getAlunoById_DeveRetornarAluno() throws Exception {
        Aluno aluno = new Aluno();
        aluno.setId(1L);
        aluno.setNome("João");

        when(alunoRepository.findById(1L)).thenReturn(Optional.of(aluno));

        mockMvc.perform(get("/alunos/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.nome").value("João"));
    }
}
