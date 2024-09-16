import Icon from '@mui/icons-material/ChevronRight';
import MaximizeIcon from '@mui/icons-material/CropSquare';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';

import { aboutListItems } from '@/data/terminal';
import '@/styles/terminal.css';
import Paper from '@/components/common/Paper';

export default function Terminal() {
  return (
    <Paper className='terminal window'>
      <div className='window-top-bar'>
        <h3>About</h3>
        <div>
          <span>
            <MinimizeIcon />
          </span>
          <span>
            <MaximizeIcon />
          </span>
          <span>
            <CloseIcon />
          </span>
        </div>
      </div>

      <div className='window-content'>
        {aboutListItems.map((item) => (
          <div key={item.in}>
            <p className='in'>
              <Icon />
              {item.in}
            </p>
            <p className='out'>{item.out}</p>
          </div>
        ))}
      </div>
    </Paper>
  );
}
