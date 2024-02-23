import { useRef, useState } from 'react';
import UploadSVG from '../../components/Icons/UploadSVG';
import { Container } from './styles'

export function FileButton({ onFileSelect, onDeleteFile }) {
  const fileInputRef = useRef();
  const [fileName, setFileName] = useState('Selecione imagem');
  const [fileSelected, setFileSelected] = useState(false);

  const handleButtonClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Prevent triggering click event twice
    fileInputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileSelected(true);
      if (onFileSelect) {
        onFileSelect(event);
      }
    }
  };

  const handleCancelUpload = (event) => {
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Prevent triggering file select
    fileInputRef.current.value = '';
    setFileName('Selecione imagem');
    setFileSelected(false);
    
    if (onDeleteFile) {
      onDeleteFile();
    }
  };

  return (
    <Container>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
      <div className="file_buttons">
        <div className="upload_button" onClick={handleButtonClick}>
          <UploadSVG />
          <span>{fileName}</span>
        </div>
        {fileSelected && (
          <div className="cancel_button" onClick={handleCancelUpload}>
            X
          </div>
        )}
      </div>
    </Container>
  );
}