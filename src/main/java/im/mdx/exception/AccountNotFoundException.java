package im.mdx.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author xuebin.gxb
 * @version AccountNotFoundException, v0.1 18/12/19 下午11:01 xuebin.gxb Exp $
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND, reason="No such account")
public class AccountNotFoundException extends RuntimeException {

    public AccountNotFoundException() {
        super();
    }

    public AccountNotFoundException(String message) {
        super(message);
    }

    public AccountNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public AccountNotFoundException(Throwable cause) {
        super(cause);
    }

    protected AccountNotFoundException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}