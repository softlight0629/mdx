package im.mdx;

import im.mdx.model.Account;
import im.mdx.repository.AccountRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MdxApplication {

	public static void main(String[] args) {
		SpringApplication.run(MdxApplication.class, args);
	}

	@Bean
	public CommandLineRunner run(AccountRepository accountRepository) {
		return args -> {
			accountRepository.save(new Account("test"));
		};
	}

}

