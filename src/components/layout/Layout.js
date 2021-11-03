import MainNav from './MainNav';
import styles from '../../styles/layout/Layout.module.css';

function Layout(props){
    return <div >
         <MainNav />
         <main className={styles.main}>
            {props.children}
         </main>
    </div>
}

export default Layout;