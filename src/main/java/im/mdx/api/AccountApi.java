package im.mdx.api;

import im.mdx.exception.AccountNotFoundException;
import im.mdx.model.Account;
import im.mdx.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author xuebin.gxb
 * @version AcctounApi, v0.1 18/12/19 下午10:52 xuebin.gxb Exp $
 */
@RestController
public class AccountApi {

    @Autowired
    private AccountRepository accountRepository;

    @PostMapping("/api/v1/accounts")
    public ResponseEntity create(@RequestBody Account account) {
        accountRepository.save(account);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/api/v1/accounts/{id}")
    public Account getAccount(@PathVariable Long id) {
        return accountRepository.findById(id)
                .orElseThrow(() -> new AccountNotFoundException("account not found"));
    }

    @GetMapping("/api/v1/accounts")
    public Iterable<Account> list() {
        return accountRepository.findAll();
    }
}