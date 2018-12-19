package im.mdx.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * @author xuebin.gxb
 * @version Account, v0.1 18/12/19 下午10:46 xuebin.gxb Exp $
 */
@Data
@Entity
public class Account {

    public Account() {}

    public Account(String username) {
        this.username = username;
        this.createAt = new Date();
        this.updateAt = new Date();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column
    private Date createAt;

    @Column
    private Date updateAt;
}