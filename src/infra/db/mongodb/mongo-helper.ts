import { MongoClient, Collection } from 'mongodb'
import { ConnectionNotFoundError } from './errors';

export class MongoHelper {
  private static instance?: MongoHelper
  private uri?: string;
  private client?: MongoClient

  private constructor() {}

  static getInstance (): MongoHelper {
    if (MongoHelper.instance === undefined) MongoHelper.instance = new MongoHelper()
    return MongoHelper.instance
  }

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  }

  async disconnect (): Promise<void> {
    if (!this.client) throw new ConnectionNotFoundError();
    await this.client.close()
    this.client = undefined
  }

  getCollection (name: string): Collection {
    if (!this.client) throw new ConnectionNotFoundError();
    return this.client.db().collection(name)
  }

  map (data: any): any {
    const { _id, ...rest } = data
    return { ...rest, id: _id.toHexString() }
  }

  mapCollection (collection: any[]): any[] {
    return collection.map(c => MongoHelper.getInstance().map(c));
  }
}
