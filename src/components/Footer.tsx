import styles from "@/styles/Footer.module.css";
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
    const pathname = usePathname();

    const conditionalClassName = pathname === '/aboutme'  ? styles.aboutMeFooter : "";

    return (
        <footer className={`${styles.footer} ${conditionalClassName}`}>
            <h5>Copyright 2024 Cosmic synchronicity</h5>
        </footer>
    );
}

export default Footer;
