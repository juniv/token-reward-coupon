/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category CreateMerchant
 * @category generated
 */
export type CreateMerchantInstructionArgs = {
  name: string
  image: string
}
/**
 * @category Instructions
 * @category CreateMerchant
 * @category generated
 */
export const createMerchantStruct = new beet.FixableBeetArgsStruct<
  CreateMerchantInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['name', beet.utf8String],
    ['image', beet.utf8String],
  ],
  'CreateMerchantInstructionArgs'
)
/**
 * Accounts required by the _createMerchant_ instruction
 *
 * @property [_writable_] merchant
 * @property [_writable_, **signer**] user
 * @category Instructions
 * @category CreateMerchant
 * @category generated
 */
export type CreateMerchantInstructionAccounts = {
  merchant: web3.PublicKey
  user: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
}

export const createMerchantInstructionDiscriminator = [
  249, 172, 245, 100, 32, 117, 97, 156,
]

/**
 * Creates a _CreateMerchant_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateMerchant
 * @category generated
 */
export function createCreateMerchantInstruction(
  accounts: CreateMerchantInstructionAccounts,
  args: CreateMerchantInstructionArgs,
  programId = new web3.PublicKey('2voaAEWrDYbrP5wPgm3K3QdPGzvstAC1b8QuGaPRSg3U')
) {
  const [data] = createMerchantStruct.serialize({
    instructionDiscriminator: createMerchantInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.merchant,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.user,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
