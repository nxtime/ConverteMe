import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Comment } from "./comment.entity";
import { Follower } from "./follower.entity";
import { Post } from "./post.entity";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  avatar_url!: string;

  @Column({ nullable: false })
  firstName!: string;

  @Column({ nullable: false })
  lastName!: string;

  @Column({ nullable: false })
  date_of_birth!: Date;

  @Column({ type: "varchar", nullable: true, default: () => "'not specified'" })
  gender!: string;

  @Column({ nullable: false })
  email!: string;

  @OneToMany(() => Post, post => post.user)
  posts!: Post[];

  @OneToMany(() => Follower, follower => follower.follower)
  followers!: Follower[];

  @OneToMany(() => Follower, follower => follower.following)
  following!: Follower[];

  @OneToMany(() => Comment, comment => comment.user)
  comments!: Follower[];


  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at!: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at!: Date;
}