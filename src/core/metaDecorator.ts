import { METADATA_KEY } from "./constant";
import { IMetadata, IParamsMetadata } from "./interface/utils.interface";
import { setMetaData, setMethodParamsMetaData } from "./utils";

export function metaMethodDecorator(metaKey: string, metaValue: any) {
  return function (
    target: { [method: string | symbol]: IMetadata },
    key: string,
    descriptor: PropertyDescriptor
  ) {
    setMetaData(target[key], metaKey, metaValue);
  };
}

export function metaParamDecorator(metaKey: string, metaValue: any) {
  return function (
    target: { [method: string | symbol]: IParamsMetadata },
    key: string | symbol,
    index: number
  ) {
    setMethodParamsMetaData(target[key], index, metaKey, metaValue);
  };
}
