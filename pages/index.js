import Head from 'next/head';
import ImpButton from '../components/ImpButton';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.root}>
			<Head>
				<title>Impossible button - Jayraj</title>
				<meta name='description' content='Impossible button/slider' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<ImpButton />
		</div>
	);
}
