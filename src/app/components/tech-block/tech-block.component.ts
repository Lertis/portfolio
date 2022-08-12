import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-tech-block',
  templateUrl: './tech-block.component.html',
  styleUrls: ['./tech-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechBlockComponent {
  @Input() title: string
  @Input() content: string
}
