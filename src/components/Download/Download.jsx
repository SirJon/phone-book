import clsx from 'clsx';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const Download = ({ setValue, value, className, onClick, handlerLoadList }) => {
  const handlerChange = (e) => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = function () {
      const obj = JSON.parse(reader.result);
      handlerLoadList(obj)
      onClick();
    };
  }
  return (
    <label
      className={clsx({
        ["menu__button"]: true,
        [className]: true,
        ["bold"]: true,
        [" menu__button--activ"]: value,
      })}
      onFocus={() => setValue(true)}
      onBlur={() => setValue(false)}
      onMouseEnter={() => setValue(true)}
      onMouseLeave={() => setValue(false)}
    >

      <input
        type="file"
        onChange={(e) => handlerChange(e)}
        hidden
      />
      <span className='menu__span'>
        <CloudDownloadIcon className='menu__svg' />
        Импортировать контакты
      </span>
    </label>
  )
};

export default Download;