import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      whut?
      <br></br>
      {process.env.NEXT_PUBLIC_FOO} {process.env.NEXT_PUBLIC_BAR}

    </div>
  )
}
