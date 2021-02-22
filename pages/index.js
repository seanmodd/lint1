import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div >
      <Navbar class="w-16 md:w-32 lg:w-48" />
      <h1 className="mt-2 text-gray-500">Hey! I'm the index page</h1>
      <p className="w-16 md:w-32 lg:w-48">
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem ipsum
      </p>
      <Footer />
    </div>
  );
}
