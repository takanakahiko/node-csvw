import * as fs from 'fs';
import { Table } from './types'

export const readMetadata = (path:string) => {
    let rawdata = fs.readFileSync(path).toString();
    let metadata:Table = JSON.parse(rawdata);
    return metadata
}