import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users') // Table name
export class User {
  @PrimaryGeneratedColumn()
  id: number; // Auto-incremented primary key

  @Column({ type: 'varchar', length: 255 })
  name: string; // Name field with a max length of 255 characters

  @Column({ type: 'varchar', length: 255, nullable: true })
  address: string; // Address field with a max length of 255 characters

  @Column({ type: 'varchar', length: 15, nullable: true })
  phone_number: string; // Phone number field with a max length of 15 characters

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string; // Email field with a max length of 255 characters, must be unique

  @Column({ type: 'varchar', length: 255 })
  password: string; // Password field with a max length of 255 characters

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date; // Automatically set when the record is created

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date; // Automatically updated whenever the record is modified
}
