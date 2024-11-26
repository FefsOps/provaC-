
{
    public class Tarefa
    {
        public int Id { get; set; }
        public string Titulo { get; set; } = string.Empty;
        public string Descricao { get; set; } = string.Empty;
        public string Status { get; set; } = "Não iniciada"; // "Não iniciada", "Em andamento", "Concluída"
        public int CategoriaId { get; set; }
        public Categoria Categoria { get; set; }

        public Tarefa() {}

        public Tarefa(int id, string titulo, string descricao, int categoriaId)
        {
            this.Id = id;
            this.Titulo = titulo;
            this.Descricao = descricao;
            this.CategoriaId = categoriaId;
            this.Status = "Não iniciada";
        }
    }
}
