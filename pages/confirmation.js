import { useRouter } from 'next/router';
import styles from '../styles/home.module.css';

export default function Confirmation() {
  const router = useRouter();
  const { name, email, tickets, concert } = router.query;

  if (!name || !email || !tickets || !concert) {
    return <p>Invalid reservation details.</p>;
  }

  return (
    <main className={styles.main}>
      <h1>Reservation Confirmed</h1>
      <p>Thank you, {name}!</p>
      <p>Your reservation for {concert} has been confirmed.</p>
      <p>Details:</p>
      <ul>
        <li>Email: {email}</li>
        <li>Number of Tickets: {tickets}</li>
      </ul>
      <p>We look forward to seeing you at the concert!</p>
    </main>
  );
}