import classNames from 'classnames';
import { Prato } from 'types/Prato';
import styles from './TagsPrato.module.scss';

export default function Tags({
    category,
    size,
    serving,
    price
}: Prato){
    return(
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags__tipo] : true,
                [styles[`tags__tipo__${category.label.toLocaleLowerCase()}`]] : true

            })}>
                {category.label}
            </div>
            <div className={styles.tags__porcao}>
                {size}
            </div>
            <div className={styles.tags__qtdpessoas}>
                Serve {serving} {serving === 1 ? 'pessoa' : 'pessoas'}
            </div>
            <div className={styles.tags__valor}>
                {`R$ ${price.toFixed(2)}`}
            </div>
        </div>
    );
}