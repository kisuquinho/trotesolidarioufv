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
          answer: "As doações aceitas para a APOV são: leite, óleo, feijão, arroz, farinha de trigo, achocolatado, polpa de suco concentrado, fermento, amido de milho, triguinho (trigo kibe), macarrão, detergente, desinfetante, álcool líquido, bucha de pia, água sanitária, papel higiênico, perfex, coco ralado, extrato de tomate e biscoito.",
          open: false
        },
        {
          question: "Posso participar da doação de cabelos se meu cabelo tiver química?",
          answer: "SIM, o uso de produtos (químicos ou naturais) no cabelo não é critério de exclusão para a doação.",
          open: false
        },
        {
          question:
            "A cor do cabelo importa?",
          answer: "NÃO, reforçamos que a diversidade de cores e texturas de cabelos é de extremo valor, ppois contribui para o pertencimento de quem os recebe.",
          open: false
        },
        {
          question:
            "Posso levar uma mecha previamente cortada?",
          answer: "SIM, mas reforçamos as condições: doação mínima de 20cm e mecha seca e limpa, amarrada com elástico e armazenada em saco plástico.",
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