package im.mdx.repository;

import im.mdx.model.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author xuebin.gxb
 * @version AccountRepository, v0.1 18/12/19 下午10:52 xuebin.gxb Exp $
 */
@Repository
public interface AccountRepository extends CrudRepository<Account, Long> {
}