import Logo from '@/components/icons/Logo'
import RightArrow from '@/components/icons/RightArrow'
import styles from '@/styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles["main-content"]}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div className={styles["logo-image-container"]}>
						<Logo stroke="#354DA1" />
					</div>
					<h1 className={styles.title}>GuessThatRank</h1>
				</div>
				<p className={styles.description}>
					watch clips, guess the rank, upload your own clips, see what the world thinks, climb the leaderboard, level up your skills
				</p>
				<button className={styles["get-started-button"]}>
					<h2 className={styles["button-text"]}>Get Started</h2>
					<div className={styles["arrow-icon-container"]}>
						<RightArrow />
					</div>
				</button>
			</div>

			<video autoPlay muted loop className={styles.video}>
				<source src="/full.mp4" type="video/mp4" />
			</video>
		</div>
	)
}
