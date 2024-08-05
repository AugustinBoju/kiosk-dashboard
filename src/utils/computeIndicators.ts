export const computeGenderParityRatio = (
  data: any[],
  totalHeadcount: number
) => {
  const femaleCount = data.reduce(
    (acc, item) => acc + (item.gender === 'female' ? item.count : 0),
    0
  );
  return totalHeadcount ? (femaleCount / totalHeadcount).toFixed(2) : 0;
};
