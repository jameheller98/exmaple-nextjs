import styles from './BaseTemplate.module.css';

export type TBaseTemplate = {
  sampleTextProp: string;
};

const BaseTemplate: React.FC<TBaseTemplate> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
