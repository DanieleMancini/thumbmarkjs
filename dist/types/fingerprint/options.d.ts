export interface optionsInterface {
    exclude?: string[];
    include?: string[];
    webgl_runs?: number;
    canvas_runs?: number;
}
export declare let options: optionsInterface;
export declare function setOption<K extends keyof optionsInterface>(key: K, value: optionsInterface[K]): void;
