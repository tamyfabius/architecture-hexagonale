import {CardOutputPort} from '../ports/secondary/card-output.port';
import {map, Observable} from 'rxjs';
import {BaseCard} from '../../domain/models/base-card.model';
import {CardListService} from '../../domain/services/card-list.service';

export class CardListUseCase<T extends BaseCard> {

  private apiCardGateway: CardOutputPort<T>;
  private cardService: CardListService<T> = new CardListService<T>();

  constructor(apiCardGateway: CardOutputPort<T>) {
    this.apiCardGateway = apiCardGateway;
  }

  getCards(): Observable<T[]> {
    return this.apiCardGateway.getCards().pipe(
      map((cards) => this.cardService.filteredList(cards))
    );
  }
}
