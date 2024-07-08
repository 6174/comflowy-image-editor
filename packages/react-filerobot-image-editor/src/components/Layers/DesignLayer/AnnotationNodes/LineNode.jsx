import React, { useMemo } from 'react';
import { Line, Shape } from 'react-konva';

const LineNode = ({
  id,
  name,
  scaleX,
  scaleY,
  rotation,
  annotationEvents,
  points,
  lineCap,
  stroke,
  strokeWidth,
  shadowOffsetX,
  shadowOffsetY,
  shadowBlur,
  shadowColor,
  shadowOpacity,
  tension,
  opacity,
  ...otherProps
}) => {
  const optimizedPoints = useMemo(() => {
    const simplified = simplifyPoints(points, 1); // 容差值可以调整
    return smoothPoints(simplified);
  }, [points]);

  return (
    <Line
      id={id}
      name={name}
      points={optimizedPoints}
      rotation={rotation}
      scaleX={scaleX}
      scaleY={scaleY}
      stroke={stroke}
      strokeWidth={strokeWidth}
      shadowOffsetX={shadowOffsetX}
      shadowOffsetY={shadowOffsetY}
      shadowBlur={shadowBlur}
      shadowColor={shadowColor}
      shadowOpacity={shadowOpacity}
      lineCap={lineCap}
      tension={tension}
      opacity={opacity}
      {...annotationEvents}
      {...otherProps}
    />
  );
};

/**
 * 使用移动平均法平滑点集
 * @param {number[]} points - 原始点集，格式为 [x1, y1, x2, y2, ...]
 * @param {number} factor - 平滑因子，范围 0 到 1，值越大平滑效果越强
 * @returns {number[]} 平滑后的点集
 */
function smoothPoints(points, factor = 0.2) {
  if (points.length < 4) return points; // 至少需要两个点才能平滑

  const smoothed = [...points]; // 创建原数组的副本

  for (let i = 2; i < smoothed.length - 2; i += 2) {
    for (let j = 0; j < 2; j++) { // 对 x 和 y 坐标分别处理
      const prevVal = smoothed[i - 2 + j];
      const currVal = smoothed[i + j];
      const nextVal = smoothed[i + 2 + j];

      // 计算当前点、前一个点和后一个点的加权平均
      smoothed[i + j] = prevVal * factor / 2 + currVal * (1 - factor) + nextVal * factor / 2;
    }
  }

  return smoothed;
}

/**
 * 计算点到线段的垂直距离
 * @param {number} px - 点的 x 坐标
 * @param {number} py - 点的 y 坐标
 * @param {number} x1 - 线段起点的 x 坐标
 * @param {number} y1 - 线段起点的 y 坐标
 * @param {number} x2 - 线段终点的 x 坐标
 * @param {number} y2 - 线段终点的 y 坐标
 * @returns {number} 点到线段的垂直距离
 */
function perpendicularDistance(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;

  // 如果线段实际上是一个点，则直接计算点到点的距离
  if (dx === 0 && dy === 0) {
    return Math.sqrt((px - x1) ** 2 + (py - y1) ** 2);
  }

  // 计算 t 值（点在线段上的投影比例）
  const t = ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy);

  // 如果 t 超出 [0, 1] 范围，则点距离线段端点更近
  if (t < 0) {
    return Math.sqrt((px - x1) ** 2 + (py - y1) ** 2);
  }
  if (t > 1) {
    return Math.sqrt((px - x2) ** 2 + (py - y2) ** 2);
  }

  // 计算投影点坐标
  const projX = x1 + t * dx;
  const projY = y1 + t * dy;

  // 返回点到投影点的距离
  return Math.sqrt((px - projX) ** 2 + (py - projY) ** 2);
}

/**
 * 使用 Douglas-Peucker 算法简化点集
 * @param {number[]} points - 原始点集，格式为 [x1, y1, x2, y2, ...]
 * @param {number} epsilon - 简化阈值
 * @returns {number[]} 简化后的点集
 */
function simplifyPoints(points, epsilon = 1) {
  if (points.length <= 4) return points; // 如果只有两个或更少的点，则无需简化

  let maxDistance = 0;
  let index = 0;
  const lastIndex = points.length - 2;

  // 寻找距离首尾线段最远的点
  for (let i = 2; i < lastIndex; i += 2) {
    const distance = perpendicularDistance(
      points[i], points[i + 1],
      points[0], points[1],
      points[lastIndex], points[lastIndex + 1]
    );

    if (distance > maxDistance) {
      index = i;
      maxDistance = distance;
    }
  }

  // 如果最大距离小于阈值，则所有点可以用首尾两点表示
  if (maxDistance <= epsilon) {
    return [points[0], points[1], points[lastIndex], points[lastIndex + 1]];
  }

  // 否则，递归地处理两个子部分
  const firstHalf = simplifyPoints(points.slice(0, index + 2), epsilon);
  const secondHalf = simplifyPoints(points.slice(index), epsilon);

  // 合并两个子部分的结果，去掉重复的中间点
  return firstHalf.slice(0, -2).concat(secondHalf);
}
// ... propTypes 和 defaultProps 保持不变

export default LineNode;