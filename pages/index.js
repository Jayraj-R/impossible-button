import Head from 'next/head';
import ImpButton from '../components/ImpButton';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<div className={styles.root}>
			<Head>
				<title>Impossible button - Jayraj</title>
				<meta name='description' content='Impossible button/slider' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<ImpButton />

			<div className={styles.code}>
				<Link href='https://github.com/Jayraj-R/impossible-button'>
					<a target='_blank'>View source code</a>
				</Link>
			</div>
		</div>
	);
}
