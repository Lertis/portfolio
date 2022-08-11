import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'portfolio-fancy-button',
  templateUrl: './fancy-button.component.html',
  styleUrls: ['./fancy-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FancyButtonComponent { }
