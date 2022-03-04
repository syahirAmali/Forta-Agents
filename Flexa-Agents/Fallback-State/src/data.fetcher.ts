import { Contract, providers, BigNumber } from "ethers";
import { flexaInterface } from "./abi";

export default class DataFetcher {
  readonly moduleAddress: string;
  readonly provider: providers.Provider;

  constructor(moduleAddress: string, provider: providers.Provider) {
    this.moduleAddress = moduleAddress;
    this.provider = provider;
  }

  public async getFallbackSetDate(blockNumber: number, flexaAddress: string): Promise<number> {
    const flexaContract: Contract = new Contract(flexaAddress, flexaInterface, this.provider);
    const fallbackSetDate: BigNumber = await flexaContract.fallbackSetDate({ blockTag: blockNumber });
    return BigNumber.from(fallbackSetDate).toNumber();
  }

  public async getFallbackWithdrawalDelaySeconds(blockNumber: number, flexaAddress: string): Promise<number> {
    const flexaContract: Contract = new Contract(flexaAddress, flexaInterface, this.provider);
    const fallbackWithdrawalDelaySeconds: BigNumber = await flexaContract.fallbackWithdrawalDelaySeconds({
      blockTag: blockNumber
    });
    return BigNumber.from(fallbackWithdrawalDelaySeconds).toNumber();
  }
}
