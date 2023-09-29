import Result from '@/components/Result'
import styles from './page.module.css'
import Hand from '@/components/Hand'

export default function Home() {
  return (
    <main className={styles.main}>
       <section className={styles.score}></section>
       <section className={styles.center}>
        <Result/>
       </section>
       <section className={styles.computer}>
        Computer
       </section>
       <section className={styles.me}>
        You
        <Hand/>
       </section>
    </main>
  )
}
