import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmployeeComponent} from "../shared/employee/employee.component";
import {FooComponent} from "../shared/foo/foo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent, FooComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'techno-express-ui';

  state = {
    people: [
      {id: 1, name: 'jhon1'},
      {id: 2, name: 'jhon2'},
      {id: 3, name: 'jhon3'},
      {id: 4, name: 'jhon4'},
    ]
  }

  render() {
    console.log('render')
  }
}
