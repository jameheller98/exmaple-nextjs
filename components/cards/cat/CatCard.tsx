import Image from 'next/image';
import styles from './CatCard.module.css';

export type TCatCard = {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
};

const CatCard: React.FC<TCatCard> = ({ tag, title, body, author, time }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src="/cat.jpg"
            alt="card__image"
            className={styles.card__image}
            width="600"
            height="400"
          />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <div className={styles.user__image}>
              <Image
                src="https://i.pravatar.cc/40?img=3"
                alt="user__image"
                style={{ borderRadius: '50%' }}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.user__info}>
              <h3>{author}</h3>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
