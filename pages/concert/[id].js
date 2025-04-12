import { useRouter } from 'next/router';
import styles from '../../styles/home.module.css';
import { useState } from 'react';
import Layout from '../../components/Layout';
import Modal from '../../components/Modal'; // Assuming a Modal component exists or will be created

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

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [reservationDetails, setReservationDetails] = useState(null);

  if (!concert) {
    return <p>Concert not found.</p>;
  }

  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const tickets = selectedSeats.length;

    setReservationDetails({ name, email, tickets, concert: concert.artist });
    setShowModal(true);
  };

  const seats = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <Layout>
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
          <div className={styles.seatPicker}>
            {seats.map((seat) => (
              <div
                key={seat}
                className={`${styles.seat} ${selectedSeats.includes(seat) ? styles.selected : ''}`}
                onClick={() => handleSeatClick(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
          <br />
          <button type="submit">Reserve</button>
        </form>

        {showModal && reservationDetails && (
          <Modal onClose={() => setShowModal(false)}>
            <h1>Reservation Confirmed</h1>
            <p>Thank you, {reservationDetails.name}!</p>
            <p>Your reservation for {reservationDetails.concert} has been confirmed.</p>
            <p>Details:</p>
            <ul>
              <li>Email: {reservationDetails.email}</li>
              <li>Number of Tickets: {reservationDetails.tickets}</li>
            </ul>
          </Modal>
        )}
      </main>
    </Layout>
  );
}