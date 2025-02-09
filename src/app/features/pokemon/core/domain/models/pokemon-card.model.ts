import {PokemonTypeEnum} from '../enums/pokemon-type.enum';
import {StrictBuilder} from 'builder-pattern';

export interface PokemonCard {
  id?: string;
  name?: string;
  avatarUrl?: string;
  description?: string;
  type: PokemonTypeEnum;
  hp: number;
  figureCaption: string;
  attackName: string;
  attackStrength: number;
}

export interface PokemonProperties {
  color: string
  defaultImageUrl: string;
}

export const PokemonTypeProperties: { [key: string]: PokemonProperties } = {
  [PokemonTypeEnum.PLANT]: {
    defaultImageUrl: 'assets/img/plant.png',
    color: 'rgba(135, 255, 124)'
  },
  [PokemonTypeEnum.ELECTRIC]: {
    defaultImageUrl: 'assets/img/electric.png',
    color: 'rgb(255, 255, 104)'
  },
  [PokemonTypeEnum.FIRE]: {
    defaultImageUrl: 'assets/img/fire.png',
    color: 'rgb(255, 104, 104)'
  },
  [PokemonTypeEnum.WATER]: {
    defaultImageUrl: 'assets/img/water.png',
    color: 'rgba(118, 234, 255)'
  },
}

export const StubPokemonBuilder = () => {
  return StrictBuilder<PokemonCard>()
    .id('000ElectP1')
    .type(PokemonTypeEnum.ELECTRIC)
    .name('Pik')
    .hp(40)
    .figureCaption('N°001 Monster')
    .attackName('Standard Attack')
    .attackStrength(15)
    .description('This is a long description of monster capacity Probably something to do with electricity...')
}


export const electricPokemon1: PokemonCard = StubPokemonBuilder().build();
export const waterPokemonr1: PokemonCard = StubPokemonBuilder()
  .id('000WaterP1')
  .type(PokemonTypeEnum.WATER)
  .name('Tortank')
  .hp(100)
  .figureCaption('N°002 Monster')
  .attackStrength(40)
  .build();
