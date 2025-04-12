import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/home.module.css';
import Layout from '../components/Layout';

const concerts = [
  {
    id: 1,
    artist: 'The Rolling Stones',
    date: '2025-05-20',
    venue: 'Madison Square Garden',
    price: '$120',
  },
  {
    id: 2,
    artist: 'Taylor Swift',
    date: '2025-06-15',
    venue: 'Wembley Stadium',
    price: '$150',
  },
  {
    id: 3,
    artist: 'BTS',
    date: '2025-07-10',
    venue: 'Seoul Olympic Stadium',
    price: '$200',
  },
];

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to SOMSRI</h1>
      <p>Your gateway to the most exciting concerts around the globe!</p>
      <h2>Featured Concerts</h2>
      <ul>
        {concerts.map((concert) => (
          <li key={concert.id} className={styles.concertItem}>
            <h2>{concert.artist}</h2>
            <p>Date: {concert.date}</p>
            <p>Venue: {concert.venue}</p>
            <p>Price: {concert.price}</p>
            <Link href={`/concert/${concert.id}`}>
              <button>Reserve Now</button>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
