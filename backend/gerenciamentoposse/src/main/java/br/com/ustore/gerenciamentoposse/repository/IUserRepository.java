package br.com.ustore.gerenciamentoposse.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.ustore.gerenciamentoposse.entity.User;


public interface IUserRepository extends CrudRepository<User, Long> {
	List<User> findByNome(String nome);
}
