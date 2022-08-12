import { Component } from '@angular/core'

@Component({
  selector: 'portfolio-tech-info-block',
  templateUrl: './tech-info-block.component.html',
  styleUrls: ['./tech-info-block.component.scss']
})
export class TechInfoBlockComponent {
  readonly techBlocks = [
    {
      class: 'main',
      title: 'tech-block.main-stack.title',
      content: 'tech-block.main-stack.description'
    },
    {
      class: 'styling',
      title: 'tech-block.styling.title',
      content: 'tech-block.styling.description'
    },
    {
      class: 'skeleton',
      title: 'tech-block.skeleton.title',
      content: 'tech-block.skeleton.description'
    },
    {
      class: 'functionality',
      title: 'tech-block.functionality.title',
      content: 'tech-block.functionality.description'
    },
    {
      class: 'patterns',
      title: 'tech-block.patterns.title',
      content: 'tech-block.patterns.description'
    },
    {
      class: 'uikit',
      title: 'tech-block.uikit.title',
      content: 'tech-block.uikit.description'
    },
    {
      class: 'tests',
      title: 'tech-block.tests.title',
      content: 'tech-block.tests.description'
    },
    {
      class: 'state-management',
      title: 'tech-block.state-management.title',
      content: 'tech-block.state-management.description'
    },
    {
      class: 'libs',
      title: 'tech-block.libs.title',
      content: 'tech-block.libs.description'
    },
    {
      class: 'communication',
      title: 'tech-block.communication-work.title',
      content: 'tech-block.communication-work.description'
    }
  ]
}
