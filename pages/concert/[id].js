import { useRouter } from 'next/router';
import styles from '../../styles/home.module.css';

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

export default function ConcertDetails() {
  const router = useRouter();
  const { id } = router.query;
  const concert = concerts.find((concert) => concert.id === parseInt(id));

  if (!concert) {
    return <p>Concert not found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const tickets = formData.get('tickets');

    router.push({
      pathname: '/confirmation',
      query: { name, email, tickets, concert: concert.artist },
    });
  };

  return (
    <main className={styles.main}>
      <h1>{concert.artist}</h1>
      <p>Date: {concert.date}</p>
      <p>Venue: {concert.venue}</p>
      <p>Price: {concert.price}</p>

      <h2>Reserve Your Tickets</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Number of Tickets:
          <input type="number" name="tickets" min="1" required />
        </label>
        <br />
        <button type="submit">Reserve</button>
      </form>
    </main>
  );
}