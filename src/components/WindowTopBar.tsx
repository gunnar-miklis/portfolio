import MaximizeIcon from '@mui/icons-material/CropSquare';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import '@/styles/windowTopBar.css';

export default function WindowTopBar({ title }: { title: string }) {
  return (
    <div className='window-top-bar'>
      <p>{title}</p>
      <div>
        <span>
          <MinimizeIcon />
        </span>
        <span>
          <MaximizeIcon />
        </span>
        <span style={{ backgroundColor: '#e66033dd' }}>
          <CloseIcon />
        </span>
      </div>
    </div>
  );
}
