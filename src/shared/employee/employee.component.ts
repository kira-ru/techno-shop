import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnChanges, OnInit {
  ngOnInit(): void {
    console.log('employee init')
  }
  ngOnChanges(changes: SimpleChanges): void {
      if (changes['people']) {
        console.log(changes);
      }
  }

  @Input()
  people: {id: number, name: string}[] = [];

  render() {
    console.log('employee render')
  }
}
