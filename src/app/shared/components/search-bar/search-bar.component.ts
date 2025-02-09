import {Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  
  imports: [InputTextModule, Button, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  standalone: true,
})
export class SearchBarComponent {
  readonly form: InputSignal<FormGroup> = input.required();
  readonly search: OutputEmitterRef<void> = output<void>();

  onSearchClicked(): void {
    this.search.emit()
  }
}
