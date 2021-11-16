import { useCallback, useRef, useState } from 'react';
import styles from './Camera.module.css';
import Webcam from 'react-webcam';
import { BsCamera } from 'react-icons/bs';
import { format } from 'date-fns';

const videoContraints = {
  facingMode: 'user',
};

const LoadingScreen = () => <div className={styles.loadingIcon}>❤</div>;

function Camera() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(null);
  const [camera, setCamera] = useState(false);
  const [guestName, setGusetName] = useState('');
  const emotion = [
    '깜찍한',
    '경이로운',
    '좋아하는',
    '달달한',
    '소중한',
    '아픈',
    '반쯤 남은',
  ];
  const name = [
    '손수건',
    '춘식',
    '립글로즈',
    '무선 마우스',
    '나침반',
    '모자',
    '아메리카노',
  ];

  const handleCamera = () => {
    setCamera(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleCapture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setDate(format(new Date(), 'yyyy년 MM월 dd일 HH:mm'));
  }, [webcamRef]);

  const MakeRandomName = () => {
    setGusetName(
      emotion[Math.floor(Math.random() * emotion.length)] +
        ' ' +
        name[Math.floor(Math.random() * name.length)]
    );
  };

  return (
    <div className={styles.container}>
      <h2>방명록</h2>
      <div className={styles.cameraSection}>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            {camera ? (
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
                          onChange={(e) => setGusetName(e.target.value)}
                          value={guestName || ''}
                        />
                        {guestName ? (
                          <div className={styles.redo} onClick={MakeRandomName}>
                            ↻
                          </div>
                        ) : (
                          <button
                            className={styles.randomBtn}
                            onClick={MakeRandomName}
                          >
                            랜덤 생성
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                )}
                <Webcam
                  className={styles.camera}
                  ref={webcamRef}
                  audio={false}
                  screenshotFormat="image/webp"
                  videocontraints={videoContraints}
                />
                {!image && (
                  <p className={styles.guideText}>
                    Click me!
                    <br />↓
                  </p>
                )}
                <BsCamera
                  className={styles.captureIcon}
                  onClick={handleCapture}
                />
              </>
            ) : (
              <div
                className={`${styles.camera} ${styles.background}`}
                onClick={handleCamera}
              >
                귀여운 포즈로 힘을 주세요! 🎃 <br />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Camera;
