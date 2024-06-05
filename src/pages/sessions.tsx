import Image from "next/image";
import styles from "@/styles/Sessions.module.css";


const Sessions : React.FC = () => {

    return(
        <>
            <main>
                <div className={styles.sessions}>
                    <Image
                        src="/assets/natal-chart-img.png"
                        alt="Natal chart"
                        width={320}
                        height={320}
                        className={styles.sessionsImg}
                    />
                    <div className={styles.sessionsDescription}>
                        <h3 className={styles.sessionsH3}>Natal chart lecture</h3>
                        <p className={styles.sessionsP}>Reading a birth chart consists of interpreting the astrological map that is generated from 
                            the exact date, time and place of a person&#39;s birth. This map shows the position of the 
                            planets, the Sun and the Moon in the zodiac signs and astrological houses at the time of 
                            birth. Through reading a birth chart, valuable insights can be gained about an individual&#39;s 
                            personality, talents, challenges, and growth potential. This deep interpretation offers a 
                            unique and personalized view of the patterns and cycles of life, helping us better 
                            understand our motivations, relationships, and purpose in the world.</p>
                    </div>
                </div>
                <div className={styles.sessions}>
                    <Image
                            src="/assets/synastry.png"
                            alt="Synastry charts"
                            width={320}
                            height={320}
                            className={styles.sessionsImg}
                    />
                    <div className={styles.sessionsDescription}>
                        <h3 className={styles.sessionsH3}>Synastry charts</h3>
                        <p className={styles.sessionsP}>Synastry consists of the comparative analysis of two birth charts to evaluate the 
                            compatibility and dynamics between two people, whether in a romantic, friendship, family or 
                            work relationship. By overlaying and comparing the planetary positions and aspects of both 
                            birth charts, an astrologer can identify areas of harmony, tension, challenges, and 
                            opportunities for mutual growth. This technique allows us to understand how the energies of 
                            each individual interact, revealing communication patterns, shared values, potential 
                            conflicts and forms of support. Synastry provides a valuable tool to improve understanding 
                            and connection in any type of relationship, offering insights to strengthen the bond and 
                            better navigate differences.</p>

                    </div>
                </div>
                <div className={styles.sessions}>
                    <Image
                            src="/assets/whisperer.png"
                            alt="Synastry charts"
                            width={320}
                            height={320}
                            className={styles.sessionsImg}
                    />
                    <div className={styles.sessionsDescription}>
                        <h3 className={styles.sessionsH3}>Transits</h3>
                        <p className={styles.sessionsP}>The transit analysis in astrology focuses on examining the 
                        dynamic movements of planets and their interactions with an individual&#39;s birth chart over 
                        time. By analyzing transits, astrologers observe how the current positions of planets 
                        influence specific areas of life, revealing periods of opportunities, challenges, and 
                        personal transformations. This analysis highlights how planetary energies impact various 
                        aspects such as career, relationships, health, and personal growth. Through transit 
                        analysis, individuals can gain insight into the timing of significant events and make 
                        informed decisions that align with the prevailing cosmic influences, fostering a deeper 
                        connection with the cycles of the universe and promoting a more conscious and harmonious 
                        life.</p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Sessions;