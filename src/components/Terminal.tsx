import Icon from '@mui/icons-material/ChevronRight';
import MaximizeIcon from '@mui/icons-material/CropSquare';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import '@/styles/terminal.css';
import { about } from '../data/terminal';

export default function Terminal() {
  return (
    <article className='terminal window paper'>
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
        {Object.keys(about).map((keypoint: string) => (
          <div key={keypoint}>
            <p className='in'>
              <Icon />
              {about[keypoint].in}
            </p>
            <p className='out'>{about[keypoint].out}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
