import { ChangeDetectionStrategy, Component, Inject } from '@angular/core'

import { LINKED_IN_LINK } from '../../tokens'

@Component({
  selector: 'portfolio-about-me-block',
  templateUrl: './about-me-block.component.html',
  styleUrls: ['./about-me-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeBlockComponent {
  constructor (@Inject(LINKED_IN_LINK) readonly linkedInLink: string) { }
}
