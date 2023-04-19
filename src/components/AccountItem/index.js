import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import Image from '~/components/Images';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8da636be881c9aaebc6638e1135e40a5~c5_300x300.webp?x-expires=1676962800&x-signature=bKsdxD2y1aNRsWB5Qwh6BD7SDLg%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon
                        className={cx('icon')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>nguyenvanas</span>
            </div>
        </div>
    );
}

export default AccountItem;
