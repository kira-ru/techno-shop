import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss',
})
export class FooComponent implements OnInit {
  @Input()
  people: {id: number, name: string}[] = [];

  @Input({required:true})
  state!: {people: {id: number, name: string}[]};

  cdref = inject(ChangeDetectorRef);

  ngOnInit(): void {
    console.log('foo init')
    // setTimeout(()=> {
    //   this.people.forEach((p, index) => {
    //     p.name = 'kira'
    //   })
    //   this.cdref.markForCheck()
    // }, 1000)

  }

  handler() {
    this.state.people = this.people.map((p, index) => ({...p, name:'sfsdfs'}))
    // this.people.forEach(p => p.name = 'kira')
  }

  render() {
    console.log('foo render')
  }
}
