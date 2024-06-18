export enum MyColor {
  Success = 'success',
  Brand = 'brand',
  Error = 'error',
  Warning = 'warning',
  Neutral = 'neutral',
}

interface ColorConfig {
  borderColor: string;
  bgColor: string;
  textColor: string;
}

const colorMap: Record<MyColor, ColorConfig> = {
  [MyColor.Success]: {
    borderColor: '#cdf1d6',
    bgColor: '#f2fdf5',
    textColor: '#3b7b42',
  },
  [MyColor.Brand]: {
    borderColor: '#c8d3fb',
    bgColor: '#eff1fc',
    textColor: '#4338ca',
  },
  [MyColor.Error]: {
    borderColor: '#f2cfd2',
    bgColor: '#fcf2f2',
    textColor: '#c03934',
  },
  [MyColor.Warning]: {
    borderColor: '#f7eaa0',
    bgColor: '#fefbed',
    textColor: '#a05826',
  },
  [MyColor.Neutral]: {
    borderColor: '#e4e4e6',
    bgColor: '#f9fbfc',
    textColor: '#525154',
  },
};

export { colorMap };
