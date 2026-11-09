import { useState } from 'react'
import styles from './Card.module.css'

type Props = {
  name: string
  Position: string
  image: string
}

export default function Card({ name, Position, image }: Props) {
  const [isInSquad, setIsInSquad] = useState(false)

  const spiele = Math.floor(Math.random() * 100)
  const tore = Math.floor(Math.random() * 30)

  return (
    <article className={styles.card}>
      <img src={image} alt={name} />

      <h2>{name}</h2>
      <p>{Position}</p>
      <p>Spiele: {spiele}</p>
      <p>Tore: {tore}</p>

      <button
        className={isInSquad ? styles.selected : ''}
        onClick={() => setIsInSquad(!isInSquad)}
      >
        Kader
      </button>
    </article>
  )
}