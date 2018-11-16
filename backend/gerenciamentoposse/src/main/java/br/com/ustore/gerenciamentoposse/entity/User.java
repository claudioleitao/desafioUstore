package br.com.ustore.gerenciamentoposse.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "User")
public class User implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -340635479893267726L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name="nome")
	private String nome;
	
	@Column(name="grupo")
    private String grupo;
	
	@Column(name="regiao")
    private String regiao;
	
	@Column(name="ordem")
    private String ordem;
	
	@Column(name="acao")
    private byte acao;

	public User() {}
	
	public User(String nome, String grupo, String regiao, String ordem, byte acao) {
		super();
		this.nome = nome;
		this.grupo = grupo;
		this.regiao = regiao;
		this.ordem = ordem;
		this.acao = acao;
	}

	public long getId() { return id; }

	public String getNome() { return nome; }
	public void setNome(String nome) { this.nome = nome; }

	public String getGrupo() { return grupo; }
	public void setGrupo(String grupo) { this.grupo = grupo; }

	public String getRegiao() { return regiao; }
	public void setRegiao(String regiao) { this.regiao = regiao; }

	public String getOrdem() { return ordem; }
	public void setOrdem(String ordem) { this.ordem = ordem; }
	
	public byte getAcao() { return acao; }
	public void setAcao(byte acao) { this.acao = acao; }
}
