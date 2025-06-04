class GerenciadorTarefas {
  constructor() {
    this.tarefas = [];
    this.filtroAtual = 'todas';
    this.intervaloProcessamento = null;
    this.velocidadeProcessamento = 1000; // 1 segundo
  }

  adicionarTarefa(texto, prioridade) {
    if (!texto.trim()) return false;

    const novaTarefa = {
      id: Date.now(),
      texto: texto.trim(),
      prioridade: prioridade,
      status: 'pending',
      progresso: 0,
      dataAdicao: new Date()
    };

    this.tarefas.push(novaTarefa);
    return true;
   
    if (!this.intervaloProcessamento) {
      this.iniciarProcessamento();
    }
   
    return true;
  }

  processarTarefas() {
    const tarefasPendentes = this.tarefas.filter(t => t.status === 'pending');
   
    if (tarefasPendentes.length === 0) {
      this.pararProcessamento();
      return;
    }

    // Ordena por prioridade (alta -> média -> baixa) e depois por tempo de adição
    tarefasPendentes.sort((a, b) => {
      const ordemPrioridade = { high: 3, medium: 2, low: 1 };
      if (ordemPrioridade[b.prioridade] !== ordemPrioridade[a.prioridade]) {
        return ordemPrioridade[b.prioridade] - ordemPrioridade[a.prioridade];
      }
      return a.dataAdicao - b.dataAdicao;
    });

    // Processa a primeira tarefa na fila
    const tarefaProcessar = tarefasPendentes[0];
    tarefaProcessar.progresso += 10;
   
    if (tarefaProcessar.progresso >= 100) {
      tarefaProcessar.status = 'completed';
      tarefaProcessar.progresso = 100;
      tarefaProcessar.dataConclusao = new Date();
    }
  }

  iniciarProcessamento() {
    if (!this.intervaloProcessamento) {
      this.intervaloProcessamento = setInterval(
        () => this.processarTarefas(),
        this.velocidadeProcessamento
      );
    }
  }

  pararProcessamento() {
    if (this.intervaloProcessamento) {
      clearInterval(this.intervaloProcessamento);
      this.intervaloProcessamento = null;
    }
  }

  filtrarTarefas(filtro) {
    this.filtroAtual = filtro;
  }

  obterTarefasVisiveis() {
    return this.tarefas.filter(tarefa => {
      if (this.filtroAtual === 'all') return true;
      if (this.filtroAtual === 'completed') return tarefa.status === 'completed';
      return tarefa.prioridade === this.filtroAtual;
    });
  }

  obterEstatisticas() {
    const total = this.tarefas.length;
    const concluidas = this.tarefas.filter(t => t.status === 'completed').length;
    const pendentes = total - concluidas;
   
    return { total, concluidas, pendentes };
  }

  limparTarefasConcluidas() {
    this.tarefas = this.tarefas.filter(t => t.status !== 'completed');
  }
}