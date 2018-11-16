package br.com.ustore.gerenciamentoposse.controller;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import br.com.ustore.gerenciamentoposse.entity.User;
import br.com.ustore.gerenciamentoposse.repository.IUserRepository;

@RestController
public class UserRestController {
	@Autowired
	IUserRepository repository;
	
	private FirebaseOptions options;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(value="/api/users/postusers")
	public User postCliente(@RequestBody User user) {
		this.initFirebase();
		this.repository.save(new User(user.getNome(), user.getGrupo(),
				user.getRegiao(), user.getOrdem(), user.getAcao()));
		return user;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value="/api/users/getallusers",  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAll() {
		List<User> lista = new ArrayList<User>();
		Iterable<User> dados = repository.findAll();
		
		dados.forEach(lista::add);
		
		return lista;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(value="/api/users/findbynome/{nome}")
	public List<User> findByNome(@PathVariable String nome) {
		List<User> user = repository.findByNome(nome);
		return user;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(value="/api/users/deleteusers/{id}")
	public void deleteCliente(@PathVariable long id) {
		repository.delete(id);
	}
	
	private void initFirebase() {
		try {
			FileInputStream serviceAccount = new FileInputStream("desafioustore-fee7f-firebase-adminsdk-funq3-4ba54e477b.json");

			FirebaseOptions options = new FirebaseOptions.Builder()
					  .setServiceAccount(serviceAccount)
					  .setDatabaseUrl("https://desafioustore-fee7f.firebaseio.com")
					  .build();

		    FirebaseApp.initializeApp(options);

		}catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
	}
}


/*



*/