import Icon from '@mui/icons-material/ChevronRight';
import MaximizeIcon from '@mui/icons-material/CropSquare';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';

import { aboutListItems } from '@data/terminal';
import Paper from '@components/common/Paper';
import styles from '@styles/components/terminal.module.css';

export default function Terminal() {
  return (
    <Paper className={styles['terminal']}>
      <div className={styles['terminal__top-bar']}>
        <h3 className={`heading-3 ${styles['heading-3--about']}`}>About</h3>
        <div className={styles['terminal__decorative-group']}>
          <span className={styles['terminal__decorative-item']}>
            <MinimizeIcon className={styles['terminal__decorative-icon']} />
          </span>
          <span className={styles['terminal__decorative-item']}>
            <MaximizeIcon className={styles['terminal__decorative-icon']} />
          </span>
          <span className={styles['terminal__decorative-item']}>
            <CloseIcon className={styles['terminal__decorative-icon']} />
          </span>
        </div>
      </div>

      <div className={styles['terminal__content']}>
        {aboutListItems.map((item) => (
          <div key={item.in}>
            <p className={styles['terminal__input']}>
              <Icon />
              {item.in}
            </p>
            <div className={styles['terminal__output']}>{item.out}</div>
          </div>
        ))}

        <div>
          <p className={styles['terminal__input']}>
            <Icon /> <span className={styles['terminal__cursor']} />
          </p>
        </div>
      </div>
    </Paper>
  );
}
