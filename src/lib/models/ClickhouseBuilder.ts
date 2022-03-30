import { ClickhouseStatements } from './ClickhouseStatements';

export type ClickhouseBuilder = {
  readonly statement: ClickhouseStatements | null;
  readonly table: string | null;
  readonly fields: ReadonlySet<string>;
  readonly format: string | null;
  readonly alias: string | null;
  readonly final: boolean;
  readonly limit: number;
  readonly offset: number;
};