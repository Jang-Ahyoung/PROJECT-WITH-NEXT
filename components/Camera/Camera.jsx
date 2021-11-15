import { useCallback, useRef, useState } from 'react';
import styles from './Camera.module.css';
import Webcam from 'react-webcam';
import { BsCamera } from 'react-icons/bs';
import { format } from 'date-fns';

const videoContraints = {
  facingMode: 'user', // 전면 카메라 모드
};

function Camera() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [date, setDate] = useState(null);
  const [write, setWrite] = useState(false);

  const handleCapture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setDate(format(new Date(), 'yyyy년 MM월 dd일 HH:mm'));
  }, [webcamRef]);

  return (
    <div className={styles.container}>
      <h2>방명록</h2>
      <div className={styles.cameraSection}>
        {write ? (
          <>
            {image && (
              <>
                <img src={image} className={styles.previewImage} />
                <div className={styles.date}>
                  <p className={styles.visitedText}>방문 일자</p>
                  <p className={styles.visitedDate}>{date}</p>
                </div>
                <div className={styles.inputContainer}>
                  <input
                    className={styles.inputText}
                    placeholder="방명록 작성"
                  />
                  <div className={styles.writerInfo}>
                    <img src={image} className={styles.writerImage} />
                    <input
                      className={styles.inputName}
                      placeholder="Enter Your Name 🌝"
                    />
                  </div>
                </div>
              </>
            )}
            <Webcam
              className={styles.camera}
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/webp"
              videoContraints={videoContraints}
            />
            <BsCamera className={styles.captureIcon} onClick={handleCapture} />
          </>
        ) : (
          <div className={styles.camera} onClick={() => setWrite(true)}>
            귀여운 포즈로 힘을 주세요! 🎃
          </div>
        )}
      </div>
    </div>
  );
}

export default Camera;
