import styles from './Header.module.css';
import Image from 'next/image';

function Header() {
    return (
        <header>
            <Image 
                src="http://img.danawa.com/prod_img/500000/242/761/img/6761242_1.jpg?shrink=500:500&_v=20200221135725"
                layout="fill"
                objectFit="contain"
            />
        </header>
    )
}

export default Header;