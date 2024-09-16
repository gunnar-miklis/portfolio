import Icon from '@mui/icons-material/ChevronRight';
import MaximizeIcon from '@mui/icons-material/CropSquare';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';

import { aboutListItems } from '@data/terminal';
import styles from '@styles/terminal.module.css';
import Paper from '@components/common/Paper';

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
            <p className={styles['terminal__in']}>
              <Icon />
              {item.in}
            </p>
            <p className={styles['terminal__out']}>{item.out}</p>
          </div>
        ))}

        <div>
          <p className={styles['terminal__in']}>
            <Icon /> <span className={styles['terminal__cursor']} />
          </p>
        </div>
      </div>
    </Paper>
  );
}
