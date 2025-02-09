import {BaseCard} from '../models/base-card.model';

export class CardListService<T extends BaseCard> {

  filteredList(cards: T[]): T[] {
    return cards;
  }
}
