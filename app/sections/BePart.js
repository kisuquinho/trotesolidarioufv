'use client'

import styles from './BePart.module.scss'
import Button from '../components/Button'

const items = [
    {
        id: '01',
        item: 'Leite',
    },
    {
        id: '02',
        item: 'Óleo',
    },
    {
        id: '03',
        item: 'Feijão',
    },
    {
        id: '04',
        item: 'Arroz',
    },
    {
        id: '05',
        item: 'Farinha de trigo',
    },
]

function openModal() {
    document.getElementById('items').classList.add('active_items');
    console.log('items')
}

function closeModal()  {
    document.getElementById('items').classList.remove('active_items');
}

function toggleModal()  {
    document.getElementById('items').classList.toggle('active_items');
}

export default function BePart() {
    return (
        <article className={styles.container} id='contribute'>
            <div className={styles.img}>
                <svg width={36} height={27} fill="none">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.874 3.597l-2.187 13.68c-.027.144-.081.27-.153.378 3.087 2.925 6.363 5.436 9.918 7.992a2.441 2.441 0 003.123-.243l.036-.036-4.032-4.032a.896.896 0 111.269-1.269l4.464 4.464a2.722 2.722 0 001.647-1.098l-4.68-4.527a.888.888 0 01-.018-1.269.888.888 0 011.269-.018l5.571 5.391a2.69 2.69 0 001.008-.567c.216-.189.405-.414.549-.657l-5.652-5.085a.906.906 0 01-.072-1.269.897.897 0 011.269-.063l6.264 5.625a2.63 2.63 0 00.873-.558c.009 0 .018-.018.027-.027a2.68 2.68 0 00.711-2.295s-.675.243-1.044.306a.875.875 0 01-.747-.225l-9.45-8.559a5.897 5.897 0 00-2.772 1.638.806.806 0 01-.171.135c-1.341.855-2.385.918-3.087.81-.765-.126-1.188-.477-1.269-.54l-.036-.027c-.774-.684-.945-1.575-.855-2.403.117-1.044.702-1.962.693-1.944a14 14 0 013.087-3.546l.153-.126c-.063-.009-.126-.018-.189-.018H8.865l.009-.018zM36 2.733c0-.459-.315-.846-.72-.89 0 0-4.014-.478-7.047 1.961-.288.234-.405.64-.297 1.017l4.05 13.5c.108.37.423.612.765.612h2.43c.45 0 .81-.405.81-.9v-15.3H36zm-28.818.18a.966.966 0 00-.306-.9C3.915-.462.693.043.693.043.297.104 0 .482 0 .932v15.3c0 .495.36.9.801.9h3.204c.378 0 .711-.306.783-.72l2.403-13.5h-.009zm22.401 13.383c-.243.144-.441.243-.441.243l-9.441-8.55a.897.897 0 00-.774-.216 7.727 7.727 0 00-4.086 2.178c-1.242.747-2.088.37-2.151.342-.342-.324-.288-.774-.198-1.143.126-.504.378-.9.378-.9v-.018a12.281 12.281 0 012.7-3.087 8.112 8.112 0 012.826-1.485 1.87 1.87 0 011.134.081l7.11 2.763 2.934 9.792h.009z"
                    fill="#000"
                />
                </svg>
            </div>
            <h2 className={styles.title}>Como participar do trote?</h2>
            <section className={styles.topic}>
                <h3 className={styles.subtitle}>Doação de alimentos e produtos</h3>
                <h6 className={styles.paragraph}>Durante os dias de evento, receberemos doações de &nbsp;
                    <div className={styles.modal}><span id='modalControl' onMouseEnter={openModal} onMouseLeave={closeModal} onClick={toggleModal} className={styles.modal_span}>alimentos e itens domésticos</span>
                    <ul id='items' className={styles.items} onMouseEnter={openModal} onMouseLeave={closeModal}>
                    {items.map((item) => {
                        return (
                            <li className={styles.li} key={item.id}>{item.item}</li>
                        )
                    })}
                    </ul>
                    </div> listados aqui.
                </h6>
            </section>
            <section className={styles.topic}>
                <h3 className={styles.subtitle}>Doação de cabelos</h3>
                <p className={styles.paragraph}>Sobre as doações de cabelo,  os cortes poderão ser realizados durante o evento com um de nossos profissionais ou salões parceiros, basta agendar um horário. <br />
Os únicos critérios para a doação de cabelo são:</p>
            </section>
            <section className={styles.btns}>
                <p className={styles.required}>Doação mínima de 20cm</p>
                <p className={styles.required}>Cabelos secos e limpos</p>
                <Button section="bepart" href="https://docs.google.com/forms/d/e/1FAIpQLSdGHOrJ6Hx47A0DiRrMsAIs0AgJqRG_mhdGLpcdGI9nv__tNA/viewform" target="_blank">Horário agendado previamente</Button>
            </section>
        </article>
    )
}