import Card from './Card'
import styles from './Card.module.css'

function App() {
  return (
    <div>
      <h1>KADER</h1>
      <main className={styles.container}>
        <Card name="Hakan" Position="Stürmer" Spiele={10} Tore={0} />
        <Card name="Berke" Position="Mittelfeld" Spiele={10} Tore={5} />
        <Card name="Noyan" Position="Verteidiger" Spiele={15} Tore={10}/>
        <Card name="Can" Position="Torwart" Spiele={8} Tore={0} />
      </main>
    </div>
  )
}

export default App