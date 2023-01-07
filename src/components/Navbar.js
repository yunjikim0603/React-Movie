import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { groupObj, groupObjArr } from "./NavList";
import logo from "./Img/logo.png";

function Navbar() {
  return (
    <div className={styles.container}>
      {/*  logo */}
      <div className={styles.logo}>
        <Link to={"/"}>
          <img src={logo} alt="MOVIETIME" />
        </Link>
      </div>
      {/* Group Link */}
      <div className={styles.groupLink}>
        {groupObjArr.map((key) => {
          return (
            <div className={styles.Link} key={key}>
              <div className={styles.Link_sep}>
                <Link to={`/page/${groupObj[key]}/1`}>{key}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
