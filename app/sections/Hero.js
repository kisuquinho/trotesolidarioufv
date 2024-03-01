import styles from './Hero.module.scss'
import Button from '../components/Button'
import Image from 'next/image'

export default function Hero() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.t_wrapper}>
                    <h1 className={styles.title}>Trote Solidário UFV</h1>
                    <p className={styles.subtitle}>Evento anual que recepciona os calouros da UFV e promove a arrecadação de cabelos, alimentos e produtos de limpeza para instituições sem fins lucrativos.</p>
                </div>
                <div className={styles.btn_wrapper}>
                    <div className={styles.info}>
                        <img src="/calendar.svg" alt="" />
                        <p className={styles.p}>De 04 a 08 de março</p>
                    </div>
                    <div className={styles.info}>
                        <img src="/map.svg" alt="" />
                        <p className={styles.p}>Espaço Multiuso (MU), UFV</p>
                    </div>
                    <Button section="main" href="https://docs.google.com/forms/d/e/1FAIpQLSdGHOrJ6Hx47A0DiRrMsAIs0AgJqRG_mhdGLpcdGI9nv__tNA/viewform" target="_blank">Agendar minha doação de cabelo</Button>
                </div>
            </div>
            {/* <img src="/bgufv.png" alt="UFV" className={styles.bg} /> */}
            <Image
            src="/bgufv.png"
            fill={true}
            alt="UFV"
            style={{objectFit: "cover", zIndex: "-1"}}
            priority={true}
            />
            <div className={styles.overlay}></div>
        </main>
    )
}