import styles from './Overlay.module.scss'

export default function Overlay() {
    return (
        <aside className={styles.overlay}>
            <h6 className={styles.title}>Em 2023, alcançamos</h6>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <h5 className={styles.number}>56</h5>
                    <h6 className={styles.subtitle}>doações
                    </h6>
                </div>
                <img src="/sparkle.svg" alt="" />
                <div className={styles.item}>
                    <h5 className={styles.number}>24</h5>
                    <h6 className={styles.subtitle}>parceiros
                    </h6>
                </div>
                <img src="/sparkle.svg" alt="" />
                <div className={styles.item}>
                    <h5 className={styles.number}>604</h5>
                    <h6 className={styles.subtitle}>impactados
                    </h6>
                </div>
            </div>
        </aside>
    )
}