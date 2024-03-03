'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Header.module.scss';
import Button from '../components/Button';
import { Fragment } from 'react';

export default function Header() {

    const pathName = usePathname()

    const hrefHome = "/";
    // const hrefEdicao2023 = "/edicao2023";
    const hrefSobre = "/sobre"
    const hrefContato = "/contato";

    function toggleMenu() {
        document.getElementById('navmobile').classList.toggle('active');
    }

    return (
        <div className={styles.header_wrapper}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <a className={styles.logo} href="#">Trote Solidário</a>
                    <nav className={styles.nav}>
                        <Link href={hrefHome} className={pathName === hrefHome ? 'active' : 'disabled'}>Trote Solidário 2024</Link>
                        <div className={styles.divider}></div>
                        {/* <Link href={hrefEdicao2023} className={pathName === hrefEdicao2023 ? 'active' : 'disabled'}>Edição 2023</Link>
                        <div className={styles.divider}></div> */}
                        <Link href={hrefSobre} className={pathName === hrefSobre ? 'active' : 'disabled'}>Sobre</Link>
                        <div className={styles.divider}></div>
                        <Link href={hrefContato} className={pathName === hrefContato ? 'active' : 'disabled'}>Contato</Link>
                    </nav>
                    <Button section='header' href='#contribute'>Como contribuir?</Button>
                    <div className={styles.menu} onClick={toggleMenu}></div>
                </div>
            </header>
            <nav id='navmobile' className={styles.navmobile}>
                    <Link href={hrefHome} className={pathName === hrefHome ? 'active' : 'disabled'}>Trote Solidário 2024</Link>
                    <div className={styles.divider}></div>
                    {/* <Link href={hrefEdicao2023} className={pathName === hrefEdicao2023 ? 'active' : 'disabled'}>Edição 2023</Link>
                    <div className={styles.divider}></div> */}
                    <Link href={hrefSobre} className={pathName === hrefSobre ? 'active' : 'disabled'}>Sobre</Link>
                    <div className={styles.divider}></div>
                    <Link href={hrefContato} className={pathName === hrefContato ? 'active' : 'disabled'}>Contato</Link>
        </nav>
        </div>
    )
}