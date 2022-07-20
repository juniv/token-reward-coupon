/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link Merchant}
 * @category Accounts
 * @category generated
 */
export type MerchantArgs = {
  user: web3.PublicKey
  name: string
  promoCount: beet.bignum
}

export const merchantDiscriminator = [71, 235, 30, 40, 231, 21, 32, 64]
/**
 * Holds the data for the {@link Merchant} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Merchant implements MerchantArgs {
  private constructor(
    readonly user: web3.PublicKey,
    readonly name: string,
    readonly promoCount: beet.bignum
  ) {}

  /**
   * Creates a {@link Merchant} instance from the provided args.
   */
  static fromArgs(args: MerchantArgs) {
    return new Merchant(args.user, args.name, args.promoCount)
  }

  /**
   * Deserializes the {@link Merchant} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [Merchant, number] {
    return Merchant.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Merchant} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey
  ): Promise<Merchant> {
    const accountInfo = await connection.getAccountInfo(address)
    if (accountInfo == null) {
      throw new Error(`Unable to find Merchant account at ${address}`)
    }
    return Merchant.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      '37kdkULv7NwBh9QSgv5SYSU3MQSZQwj5BXCUeMys16tF'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, merchantBeet)
  }

  /**
   * Deserializes the {@link Merchant} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Merchant, number] {
    return merchantBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link Merchant} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return merchantBeet.serialize({
      accountDiscriminator: merchantDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Merchant} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: MerchantArgs) {
    const instance = Merchant.fromArgs(args)
    return merchantBeet.toFixedFromValue({
      accountDiscriminator: merchantDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Merchant} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: MerchantArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Merchant.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link Merchant} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      user: this.user.toBase58(),
      name: this.name,
      promoCount: (() => {
        const x = <{ toNumber: () => number }>this.promoCount
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const merchantBeet = new beet.FixableBeetStruct<
  Merchant,
  MerchantArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['user', beetSolana.publicKey],
    ['name', beet.utf8String],
    ['promoCount', beet.u64],
  ],
  Merchant.fromArgs,
  'Merchant'
)
