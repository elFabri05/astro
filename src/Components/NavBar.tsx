import { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import styles from "@/styles/NavBar.module.css";
import useMediaQuery from "@/hooks/useMediaQuery";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar : React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const menuIsOpen = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const isTablet = useMediaQuery(720);

    return(
        <>
          <header>
              <nav className={styles.navBar }>
                  <div className={styles.iconTitleDiv}>
                    <Image
                        src="/assets/navBar-icon.png"
                        alt="Nav bar logo"
                        width={50}
                        height={50}
                    />
                    <h3 className={styles.navBarTitle}>Cosmic Synchronicity</h3>
                  </div>
                  {isTablet ? 
                  <>
                    <IconButton 
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={menuIsOpen}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>
                        <Link href="/" className={styles.link}>Home</Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link href="/sessions" className={styles.link}>Sessions</Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link href="/about" className={styles.link}>About</Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link href="/contact" className={styles.link}>Contact</Link>
                      </MenuItem>
                    </Menu>
                  </>
                  :
                  <ul>
                    <li><Link href="/" className={styles.link}>Home</Link></li>
                    <li><Link href="/sessions" className={styles.link}>Sessions</Link></li>
                    <li><Link href="/about" className={styles.link}>About</Link></li>
                    <li><Link href="/contact" className={styles.link}>Contact</Link></li>
                  </ul>
                  }
              </nav>
          </header>
        </>
    );
}

export default NavBar;
