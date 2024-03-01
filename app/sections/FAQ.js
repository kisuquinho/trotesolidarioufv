import styles from './FAQ.module.scss'

export default function FAQ({ faq, index, toggleFAQ }) {
    return (
        <div
            className={"faq " + (faq.open ? "open" : "")}
            key={index}
            onClick={() => toggleFAQ(index)}
        >
            <h5 className={styles.question}>{faq.question}</h5>
            <p className={styles.answer}>{faq.answer}</p>
      </div>
    );
}