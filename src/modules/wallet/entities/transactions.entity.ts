import { AbstractEntity } from 'src/modules/shared/entities/abstract-entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import WalletEntity from './wallets.entity';

@Entity({ name: 'transactions' })
export default class TransactionEntity extends AbstractEntity {
  /** User relationship */
  @ManyToOne(() => UserEntity, (user) => user.transactions, {
    lazy: true,
    createForeignKeyConstraints: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({ name: 'user_id' })
  userId: string;
  /** User relationship */

  /** Wallet relationship */
  @ManyToOne(() => WalletEntity, (wallet) => wallet.transactions, {
    lazy: true,
    createForeignKeyConstraints: false,
  })
  @JoinColumn({ name: 'wallet_id' })
  wallet: WalletEntity;

  @Column({ name: 'wallet_id' })
  walletId: string;
  /** Wallet relationship */

  @Column('int', { name: 'type' })
  type: number;

  @Column('text', { name: 'description', nullable: true })
  description: string;

  @Column('decimal', { name: 'credit', default: 0 })
  credit: number;

  @Column('decimal', { name: 'debit', default: 0 })
  debit: number;

  @ManyToOne(() => UserEntity, {
    lazy: true,
    createForeignKeyConstraints: false,
    nullable: true,
  })
  @JoinColumn({ name: 'create_by' })
  createBy: UserEntity;
}
