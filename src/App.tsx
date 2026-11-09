import Card from './Card'
import styles from './Card.module.css'

function App() {
  return (
    <div>
      <h1>KADER</h1>

      <main className={styles.container}>
        <Card name="Hakan" Position="Stürmer" image="https://www.oefb.at/oefb2/images/1278650591628556536_1b38761830cdaa66c994-1,0-320x320.png" />
        <Card name="Berke" Position="Mittelfeld" image="https://www.oefb.at/oefb2/images/1278650591628556536_702a90af128354194944-1,0-320x320.png" />
        <Card name="Noyan" Position="Verteidiger" image="https://www.hchard.at/wp-content/uploads/2026/08/13_Hakli_Noyan-1920x1080.jpg" />
        <Card name="Can" Position="Torwart" image="https://www.oefb.at/oefb2/images/1278650591628556536_a9b0fb8308092d950ffd-1,0-320x320.png" />
      </main>
    </div>
  )
}

export default App