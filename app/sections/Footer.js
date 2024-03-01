'use client'

import styles from './Footer.module.scss'
import FAQ from './FAQ';
import { useState } from 'react';

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

    const [faqs, setFaqs] = useState([
        {
          question: "Quais alimentos e produtos podem ser doados?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
          open: true
        },
        {
          question: "Posso participar da doação de cabelos se meu cabelo tiver química?",
          answer: "You! The viewer!",
          open: false
        },
        {
          question:
            "A cor do cabelo importa?",
          answer: "This many!",
          open: false
        },
        {
          question:
            "Posso levar uma mecha previamente cortada?",
          answer: "This many!",
          open: false
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i === index) {
              faq.open = !faq.open;
            } else {
              faq.open = false;
            }
    
            return faq;
          })
        );
    };

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
                    <section className={styles.faq}>
                        <h3 className={styles.title}>DÚVIDAS FREQUENTES</h3>
                        <div className={styles.faqs}>
                            {faqs.map((faq, index) => (
                                <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                            ))}
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