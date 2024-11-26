//api.ts

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});

const listarTarefas = () => api.get('/tarefa/listar');
const cadastrarTarefa = (tarefa: any) => api.post('/tarefa/cadastrar', tarefa);
const alterarTarefa = (id: number) => api.patch(`/tarefa/alterar/${id}`);
const listarTarefasConcluidas = () => api.get('/tarefa/concluidas');
const listarTarefasNaoConcluidas = () => api.get('/tarefa/naoconcluidas');

export const tarefaService = {
    listar: listarTarefas,
    cadastrar: cadastrarTarefa,
    alterar: alterarTarefa,
    listarConcluidas: listarTarefasConcluidas,
    listarNaoConcluidas: listarTarefasNaoConcluidas
};
