import { HeroInterface } from "../../../interfaces/Hero.interface";

export interface HeroSubcontentProps {
  content: HeroInterface[]
  button?: {
    name: string
  }
}