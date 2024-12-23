import type { ChartConfiguration, Chart as ChartJS, ChartTypeRegistry, UpdateMode } from 'chart.js';
import type { HTMLCanvasAttributes } from 'svelte/elements';

export interface BaseChartProps<CType extends keyof ChartTypeRegistry>
  extends HTMLCanvasAttributes,
    ChartConfiguration<CType> {
  chart?: ChartJS<CType> | null;
  canvasRef?: HTMLCanvasElement;
  updateMode?: UpdateMode;
}

export type ChartProps<CType extends keyof ChartTypeRegistry> = Omit<BaseChartProps<CType>, 'type'>;
