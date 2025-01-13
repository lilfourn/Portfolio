'use client';

interface LonghornProps {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  height: number;
  isJumping: boolean;
  isDucking: boolean;
  runFrame: number;
}

export function drawLonghorn({
  ctx,
  x,
  y,
  height,
  isJumping,
  isDucking,
  runFrame,
}: LonghornProps) {
  ctx.save();
  ctx.fillStyle = '#BF5700'; // UT Austin Burnt Orange

  if (isDucking) {
    // Ducking Longhorn
    const bodyHeight = height * 0.6;
    // Body
    ctx.fillRect(x, y + height - bodyHeight, 44, bodyHeight);
    
    // Head (lowered)
    ctx.beginPath();
    ctx.moveTo(x + 44, y + height - bodyHeight + 10);
    ctx.lineTo(x + 54, y + height - bodyHeight + 5);
    ctx.lineTo(x + 44, y + height - bodyHeight + 15);
    ctx.fill();

    // Horns (lowered)
    ctx.beginPath();
    ctx.moveTo(x + 44, y + height - bodyHeight + 8);
    ctx.lineTo(x + 60, y + height - bodyHeight);
    ctx.lineTo(x + 44, y + height - bodyHeight + 12);
    ctx.fill();
  } else {
    // Standing/Running Longhorn
    // Body
    ctx.fillRect(x, y, 30, height);
    
    // Head
    ctx.beginPath();
    ctx.moveTo(x + 30, y + 10);
    ctx.lineTo(x + 45, y);
    ctx.lineTo(x + 30, y + 20);
    ctx.fill();

    // Horns
    ctx.beginPath();
    ctx.moveTo(x + 35, y + 5);
    ctx.lineTo(x + 55, y - 10);
    ctx.lineTo(x + 35, y + 15);
    ctx.fill();

    // Legs animation when running
    if (!isJumping) {
      const legOffset = runFrame > 5 ? 0 : 20;
      // Front leg
      ctx.fillRect(x + legOffset, y + height, 8, 3);
      // Back leg
      ctx.fillRect(x + 20 - legOffset, y + height, 8, 3);
    }
  }

  // Eye
  ctx.fillStyle = '#fff';
  const eyeX = isDucking ? x + 40 : x + 32;
  const eyeY = isDucking ? y + height - bodyHeight + 8 : y + 8;
  ctx.fillRect(eyeX, eyeY, 4, 4);

  ctx.restore();
}
