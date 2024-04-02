import { componentInterface } from '../factory';
export declare function getFingerprintData(): Promise<componentInterface>;
export declare function getFingerprint(includeData?: boolean): Promise<string | {
    hash: string;
    data: componentInterface;
}>;
export declare function getFingerprintPerformance(): Promise<{
    [key: string]: any;
}>;
