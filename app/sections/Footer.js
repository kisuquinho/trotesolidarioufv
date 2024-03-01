import styles from './Footer.module.scss'

const partners = [
    {
        id: 'ufv',
        href: 'https://www.ufv.br',
        logo: '/lufv.png',
        alt: 'Logo da Universidade Federal de Viçosa',
    },
    {
        id: 'fiosdobem',
        href: 'https://www.instagram.com/fios.do.bem/',
        logo: '/lfiosdobem.png',
        alt: 'Logo da ONG Fios do Bem',
    },
            {
        id: 'fiodeluz',
        href: 'https://www.instagram.com/ongfiodeluz_/',
        logo: '/lfiodeluz.png',
        alt: 'Logo da ONG Fio de Luz',
    },
    {
        id: 'prossan',
        href: 'https://www.instagram.com/prossan.apov/',
        logo: '/lprossan.png',
        alt: 'Logo do Projeto Prossan',
    },
    {
        id: 'apov',
        href: 'https://www.apov.org.br',
        logo: '/lapov.png',
        alt: 'Logo da Instituição de Desenvolvimento Social APOV',
    },
]

const socials = [
    {
        id: 'phone',
        href: '',
        icon: '/phoneicon.svg',
        alt: 'Ícone de telefone',
    },
    {
        id: 'mail',
        href: '',
        icon: '/emailicon.svg',
        alt: 'Ícone do e-mail',
    },
            {
        id: 'ig',
        href: 'https://www.instagram.com/trotesolidarioufv/',
        icon: '/igicon.svg',
        alt: 'Ícone do Instagram',
    },
]

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <section className={styles.head}>
                <div className={styles.wrapper}>
                    <section className={styles.card}>
                        <h5 className={styles.title}>Trote Solidário UFV</h5>
                        <p className={styles.paragraph}>Evento de arrecadação de cabelos para pessoas em tratamento contra o câncer e de alimentos e produtos para a instituição de desenvolvimento social Apov.</p>
                        <div className={styles.s_wrapper}>
                            {socials.map((social) => {
                                return (
                                    <a href={social.href} target="_blank" rel="noopener noreferrer" key={social.id}><img src={social.icon} alt={social.alt} /></a>
                                )
                            })}
                        </div>
                    </section>
                </div>
            </section>
            <section className={styles.foot}>
                <div className={styles.container}>
                    <p className={styles.info}><strong className={styles.bold}>Trote Solidário©2024</strong>, um site desenvolvido por <a className={styles.bold} href="">Joyci.</a></p>
                    <div className={styles.wrapper}>
                        {partners.map((partner) => {
                            return (
                                <a key={partner.id} href={partner.href} target="_blank" rel="noopener noreferrer"><img src={partner.logo} alt={partner.alt} /></a>
                            )
                        })}
                    </div>
                </div>
            </section>
        </footer>
    )
}