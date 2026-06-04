import { useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LottieAnimationProps {
  src: string;
  id: string;
}

export const LottieAnimation = ({ src, id }: LottieAnimationProps) => {
  const dotLottieRef = useRef<any>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const cardElement = document.getElementById(id);
    if (!cardElement) return;

    // Функция плавного проигрывания ВПЕРЕД
    const playForward = () => {
      const player = dotLottieRef.current;
      if (!player) return;

      // Если дошли до конца, останавливаем цикл анимации
      if (player.currentFrame >= player.totalFrames - 1) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        return;
      }

      // Шагаем на 1 кадр вперед (можно увеличить шаг для скорости, например + 1.5)
      player.setFrame(
        Math.min(player.totalFrames - 1, player.currentFrame + 1)
      );

      animationFrameRef.current = requestAnimationFrame(playForward);
    };

    // Функция плавного проигрывания НАЗАД
    const playBackward = () => {
      const player = dotLottieRef.current;
      if (!player) return;

      // Если дошли до начала, останавливаем цикл анимации
      if (player.currentFrame <= 0) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        return;
      }

      // Шагаем на 1 кадр назад
      player.setFrame(Math.max(0, player.currentFrame - 1));

      animationFrameRef.current = requestAnimationFrame(playBackward);
    };

    const handleMouseEnter = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(playForward);
    };

    const handleMouseLeave = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(playBackward);
    };

    cardElement.addEventListener('mouseenter', handleMouseEnter);
    cardElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cardElement.removeEventListener('mouseenter', handleMouseEnter);
      cardElement.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [id]);

  return (
    <div className="lottie-container" style={{ width: '100%', margin: '0' }}>
      <DotLottieReact
        src={src}
        loop={false}
        autoplay={false}
        dotLottieRefCallback={(instance) => {
          dotLottieRef.current = instance;
        }}
      />
    </div>
  );
};
