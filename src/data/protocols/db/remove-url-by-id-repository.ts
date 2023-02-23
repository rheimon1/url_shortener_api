export interface RemoveUrlByIdRepository {
  removeById: (id: RemoveUrlByIdRepository.Params) => Promise<RemoveUrlByIdRepository.Result>
}

export namespace RemoveUrlByIdRepository {
  export type Params = string;
  export type Result = boolean;
}