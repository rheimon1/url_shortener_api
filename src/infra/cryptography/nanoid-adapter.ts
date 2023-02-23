import { Hasher } from '../../data/protocols/criptography/hasher';

import { nanoid } from 'nanoid';

export class NanoidAdapter implements Hasher {
  constructor (private readonly size: number) {}

  generate (): string {
    return nanoid(this.size);
  }
}
