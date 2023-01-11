import { Link } from "react-router-dom";
import Slide from "../components/Slide";
import { groupObj, groupObjArr } from "../components/NavList";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      {groupObjArr.map((group) => {
        return (
          <div key={group}>
            <div className={styles.title}>
              <div className={styles.titleBox}>
                {/* 슬라이드쇼 위 그룹제목 링크 */}
                <Link to={`/page/${groupObj[group]}/1`}>
                  <div>
                    <span>{group}</span>
                  </div>
                </Link>
              </div>
            </div>
            <Slide
              ApiURL={`https://yts.mx/api/v2/list_movies.json?
            limit=10&${groupObj[group]}&sort_by=rating`}
            />
          </div>
        );
      })}
      <div className={styles.footer}></div>
    </div>
  );
}
export default Home;
