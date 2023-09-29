import Result from '@/components/Result'
import styles from './page.module.css'
import Hand from '@/components/Hand'
import Score from '@/components/Score'
import { Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className={styles.main}>
       <section className={styles.score}>
        <Score/>
       </section>
       <section className={styles.center}>
        <Result/>
       </section>
       <section className={styles.computer}>
         <Heading as="h1">Chifumi</Heading>
        Computer
       </section>
       <section className={styles.me}>
        <Hand/>
        You
       </section>
    </main>
  )
}
