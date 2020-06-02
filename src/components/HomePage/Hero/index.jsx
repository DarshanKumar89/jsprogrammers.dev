import Container from '../../Container';
import React from 'react';
import styles from './styles.module.scss';

export default function Hero() {
	return (
		<div className={styles.hero}>
			<Container>
				<div className={styles.contents}>
					<h1 className={styles.heroText}>
						Hello, there! I'm <span>JS Blogger.</span>
					</h1>
				</div>
			</Container>
		</div>
	);
}
