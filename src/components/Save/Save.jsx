import clsx from 'clsx';
import BackupIcon from '@mui/icons-material/Backup';

const Save = ({ data = [], setValue, value, className, onClick }) => {
  const date = new Date();
  const name = `phone book ${date.toLocaleDateString()} ${date.toLocaleTimeString()}.json`;
  return (
    <a
      className={clsx({
        ["menu__button"]: true,
        [className]: true,
        ["bold"]: true,
        [" menu__button--activ"]: value,
      })}
      href={`data:text/plain;charset=utf-8,${JSON.stringify(data)}`}
      download={name}
      onFocus={() => setValue(true)}
      onBlur={() => setValue(false)}
      onMouseEnter={() => setValue(true)}
      onMouseLeave={() => setValue(false)}
      onClick={onClick}
    >
      <span className='menu__span'>
        <BackupIcon className='menu__svg' />
        Экспортировать контакты
      </span>
    </a>
  )
}

export default Save
