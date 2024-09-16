import Icon from '@mui/icons-material/ChevronRight';
import MaximizeIcon from '@mui/icons-material/CropSquare';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';

import Paper from '@components/common/Paper';
import '@styles/components/terminal.css';
import { aboutListItems } from '@data/terminal';

export default function Terminal() {
  return (
    <Paper className='terminal'>
      <div className='terminal__top-bar'>
        <h3 className='heading-3 heading-3--about'>About</h3>
        <div className='terminal__decorative-group'>
          <span className='terminal__decorative-item'>
            <MinimizeIcon className='terminal__decorative-icon' />
          </span>
          <span className='terminal__decorative-item'>
            <MaximizeIcon className='terminal__decorative-icon' />
          </span>
          <span className='terminal__decorative-item'>
            <CloseIcon className='terminal__decorative-icon' />
          </span>
        </div>
      </div>

      <div className='terminal__content'>
        {aboutListItems.map((item) => (
          <div key={item.in}>
            <p className='terminal__input'>
              <Icon />
              {item.in}
            </p>
            <div className='terminal__output'>{item.out}</div>
          </div>
        ))}

        <div>
          <p className='terminal__input'>
            <Icon /> <span className='terminal__cursor' />
          </p>
        </div>
      </div>
    </Paper>
  );
}
