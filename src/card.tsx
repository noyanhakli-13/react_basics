import { useState } from 'react'
import styles from './Card.module.css'

type Props = {
  name: string
  Position: string
  image: string
  rating: number
}

export default function Card({ name, Position, image, rating }: Props) {
  const [isInSquad, setIsInSquad] = useState(false)
  const [currentRating, setCurrentRating] = useState(rating) // Speichert das Rating und ermöglicht, es zu ändern.

  const [spiele] = useState(() => Math.floor(Math.random() * 100))
  const [tore] = useState(() => Math.floor(Math.random() * 30)) // die daten werden nur beim neuladen der seite geändert

  return (
    <article className={styles.card}>
      <img src={image} alt={name} />

      <h2>{name}</h2>
      <p>{Position}</p>
      <p>Spiele: {spiele}</p>
      <p>Tore: {tore}</p>

      <p>Rating: {currentRating}</p>

      <button onClick={() => setCurrentRating(Math.min(10, currentRating + 1))}>
        +
      </button>

      <button onClick={() => setCurrentRating(Math.max(0, currentRating - 1))}>
        -
      </button>

      <button
        className={isInSquad ? styles.selected : ''}
        onClick={() => setIsInSquad(!isInSquad)}
      >
        Kader
      </button>
    </article>
  )
}