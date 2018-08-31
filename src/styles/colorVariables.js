export const primaryColor = '#2e7bff';
export const whiteColor = '#ffffff';
export const gray100 = '#fafafa';
export const gray200 = '#f5f5f5';
export const gray300 = 'rgba(0,0,0, .54)';

export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}