'use client';
import styles from './NavMobile.module.scss'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavMobile() {

    const pathName = usePathname()

    const hrefHome = "/";
    // const hrefEdicao2023 = "/edicao2023";
    const hrefSobre = "/sobre"
    const hrefContato = "/contato";

    return (
        <nav id='navmobile' className={styles.nav}>
                    <Link href={hrefHome} className={pathName === hrefHome ? 'active' : 'disabled'}>Trote Solidário 2024</Link>
                    <div className={styles.divider}></div>
                    {/* <Link href={hrefEdicao2023} className={pathName === hrefEdicao2023 ? 'active' : 'disabled'}>Edição 2023</Link>
                    <div className={styles.divider}></div> */}
                    <Link href={hrefSobre} className={pathName === hrefSobre ? 'active' : 'disabled'}>Sobre</Link>
                    <div className={styles.divider}></div>
                    <Link href={hrefContato} className={pathName === hrefContato ? 'active' : 'disabled'}>Contato</Link>
        </nav>
    )
}