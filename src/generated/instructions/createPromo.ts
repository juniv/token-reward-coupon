/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category CreatePromo
 * @category generated
 */
export type CreatePromoInstructionArgs = {
  uri: string
  name: string
  symbol: string
}
/**
 * @category Instructions
 * @category CreatePromo
 * @category generated
 */
export const createPromoStruct = new beet.FixableBeetArgsStruct<
  CreatePromoInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['uri', beet.utf8String],
    ['name', beet.utf8String],
    ['symbol', beet.utf8String],
  ],
  'CreatePromoInstructionArgs'
)
/**
 * Accounts required by the _createPromo_ instruction
 *
 * @property [_writable_] merchant
 * @property [_writable_] promo
 * @property [_writable_] promoMint
 * @property [_writable_, **signer**] user
 * @property [_writable_] metadata
 * @property [] tokenMetadataProgram
 * @category Instructions
 * @category CreatePromo
 * @category generated
 */
export type CreatePromoInstructionAccounts = {
  merchant: web3.PublicKey
  promo: web3.PublicKey
  promoMint: web3.PublicKey
  user: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  metadata: web3.PublicKey
  tokenMetadataProgram: web3.PublicKey
}

export const createPromoInstructionDiscriminator = [
  135, 231, 68, 194, 63, 31, 192, 82,
]

/**
 * Creates a _CreatePromo_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreatePromo
 * @category generated
 */
export function createCreatePromoInstruction(
  accounts: CreatePromoInstructionAccounts,
  args: CreatePromoInstructionArgs,
  programId = new web3.PublicKey('FWup1J8CtHmrKuiN7HCBCPfcjFZaUCMEkCW8XXK3TLpU')
) {
  const [data] = createPromoStruct.serialize({
    instructionDiscriminator: createPromoInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.merchant,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.promo,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.promoMint,
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
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMetadataProgram,
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
