import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, isDemo },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageConatiner}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          {isDemo ? (
            <a href={demo} className={styles.link}>
              Demo
            </a>
          ) : (
            <p className={styles.linkDisable}>No Demo</p>
          )}
          <a href={source} className={styles.link}>
            Source
          </a>
        </div>
      </div>
      <div className={styles.data}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.descriptions}>
          {description.map((desc, id) => {
            return (
              <li key={id} className={styles.description}>
                {desc}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
