import { Box } from '../Box/Box';
import styles from './Error.module.scss';

export const Error = ({ error }) => {
  return (
    <Box>
      <div className={styles.error}>{error}</div>
    </Box>
  );
};
