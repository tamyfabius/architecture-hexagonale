import {BaseCard} from '../../../domain/models/base-card.model';
import {Observable} from 'rxjs';
import {CardListUseCase} from '../../use-cases/card-list.use-case';
import {CardSearchUseCase} from '../../use-cases/card-search.use-case';
import {SearchCriteria} from '../../../domain/models/search-criteria.model';
import {CardInputPort} from './card-input.port';
import {CardOutputPort} from '../secondary/card-output.port';


export class CardInputImp<T extends BaseCard = BaseCard, S extends SearchCriteria = SearchCriteria> extends CardInputPort<T, S> {
  private cardListUseCase: CardListUseCase<T>;
  private cardSearchUseCase: CardSearchUseCase<T, S>;

  constructor(cardOutputPort: CardOutputPort<T, S>) {
    super();
    this.cardListUseCase = new CardListUseCase<T>(cardOutputPort);
    this.cardSearchUseCase = new CardSearchUseCase<T, S>(cardOutputPort);
  }

  getCards(): Observable<T[]> {
    return this.cardListUseCase.getCards();
  }

  onSearch(criteria: S): void {
    this.cardSearchUseCase.search(criteria)
  }
}
