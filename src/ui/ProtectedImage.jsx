// ProtectedImage.js
import { useEffect, useRef } from "react";

const ProtectedImage = ({ src, alt }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.crossOrigin = "Anonymous"; // للتعامل مع الصور من مصادر مختلفة
    img.onload = () => {
      // تحديد أبعاد Canvas بناءً على الصورة الأصلية
      const maxWidth = 300; // أقصى عرض يمكن تعديله
      const ratio = maxWidth / img.width;
      canvas.width = maxWidth;
      canvas.height = img.height * ratio;

      // رسم الصورة
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // إضافة علامة مائية ديناميكية
      ctx.font = "20px Arial";
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.textAlign = "center";
      ctx.fillText(
        "© Created with ❤ by Moaz_Gad",
        canvas.width / 2,
        canvas.height / 2
      );

      // إضافة علامة مائية مخفية (شبه شفافة)
      ctx.font = "12px Arial";
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillText(`User: ${Date.now()}`, 10, 20);
    };

    img.src = src;
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      onContextMenu={(e) => e.preventDefault()}
    />
  );
};

export default ProtectedImage;
