export class User {
    private id: number;
    private nome: string;
    private grupo: string;
    private regiao: string;
    private ordem: string;
    private acao: number;

    public setNome(nome: string) { this.nome = nome; }
    public getNome() { return this.nome; }
    public setGrupo(grupo: string) { this.grupo = grupo; }
    public getGrupo() { return this.grupo; }
    public setRegiao(regiao: string) { this.regiao = regiao; }
    public getRegiao() { return this.regiao; }
    public setOrdem(ordem: string) { this.ordem = ordem; }
    public getOrdem() { return this.ordem; }
    public setAcao(acao: number) { this.acao = acao; }
    public getAcao() { return this.acao; }
}