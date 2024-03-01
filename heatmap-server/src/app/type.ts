type ApexColorStop = {
  offset: number;
  color: string;
  opacity: number;
};

type ApexFill = {
  colors?: any[];
  opacity?: number | number[];
  type?: string | string[];
  /* The above code is defining a TypeScript interface with optional properties for defining different
  types of backgrounds for a component. These background types include gradient, image, and pattern.
  Each type has its own set of properties that can be configured, such as colors for gradients, image
  source and dimensions for images, and style and dimensions for patterns. */
  gradient?: {
    shade?: string;
    type?: string;
    shadeIntensity?: number;
    gradientToColors?: string[];
    inverseColors?: boolean;
    opacityFrom?: number | number[];
    opacityTo?: number | number[];
    stops?: number[];
    colorStops?: ApexColorStop[][] | ApexColorStop[];
  };
  image?: {
    src?: string | string[];
    width?: number;
    height?: number;
  };
  pattern?: {
    style?: string | string[];
    width?: number;
    height?: number;
    strokeWidth?: number;
  };
};

type ApexAxisChartSeries = {
  name?: string;
  type?: string;
  color?: string;
  group?: string;
  zIndex?: number;
  data:
    | (number | null)[]
    | {
        x: any;
        y: any;
        fill?: ApexFill;
        fillColor?: string;
        strokeColor?: string;
        meta?: any;
        goals?: any;
        barHeightOffset?: number;
        columnWidthOffset?: number;
      }[]
    | [number, number | null][]
    | [number, (number | null)[]][]
    | number[][];
}[];

type ApexNonAxisChartSeries = number[];

export { ApexAxisChartSeries, ApexNonAxisChartSeries, ApexFill, ApexColorStop };
