import { people } from './people';
import {os} from 'node:os'

console.log(people);

console.log(os.platform(), os.hostname(), os.homedir());