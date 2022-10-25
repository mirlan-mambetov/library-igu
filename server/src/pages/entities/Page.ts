import { AboutEntity } from "src/about/entities/About";
import { HeroE } from "src/Hero/entities/hero";
import { TabsEntity } from "src/Tabs/entities/Tabs";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'pages' })
export class PageEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => HeroE, (hero) => hero.page)
  @JoinColumn()
  hero: HeroE

  @OneToMany(() => TabsEntity, (tabs) => tabs.page)
  @JoinColumn()
  tabs: TabsEntity[]

  @OneToMany(() => AboutEntity, (about) => about.page)
  about: AboutEntity[]
} 