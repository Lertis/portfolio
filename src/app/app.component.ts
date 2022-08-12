import { AfterViewInit, Component, OnInit } from '@angular/core'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  readonly LINKED_IN_LINK = 'https://www.linkedin.com/in/yura-husak/'

  readonly techBlocks = [
    {
      class: 'main',
      title: 'Main stack',
      content: 'SPA/PWA Angular 2-14, NX monorepo approach'
    },
    {
      class: 'styling',
      title: 'Styling',
      content: 'CSS3/SCSS/PostCSS in combination with UI libs: Material UI, PrimeNg, Kendo, EaNG, Ngx-bootstrap'
    },
    {
      class: 'sceleton',
      title: 'Sceleton',
      content: 'HTML5/PUG'
    },
    {
      class: 'functionality',
      title: 'Functionality',
      content: 'TS (3+), JS (ES6+)'
    },
    {
      class: 'patterns',
      title: 'Patterns',
      content: 'Project architecture may be based on or elegantly cooperate with the next patterns: OOP, reactive programming based on RxJS operators, functional programming'
    },
    {
      class: 'uikit',
      title: 'Uikit',
      content: 'Update your docs and UiKit with Storybok + JsDoc + Compodoc'
    },
    {
      class: 'tests',
      title: 'Tests',
      content: 'Advanced unit testing using Jest framework. Intergation and e2e testing using Jasmine and Cypress'
    },
    {
      class: 'state-management',
      title: 'State management',
      content: 'Wrap your events architecture based on the Redux pattern and used the most popular implementation of it - NGRX'
    },
    {
      class: 'libs',
      title: 'Libs & frameworks',
      content: 'Libs: ag-Grid, Husky, Fullcalendar, Highcharts, Moment.js/Date-fns, Lodash, Quill. Frameworks: ReactJs, NestJs and Ionic3+ usage on basic/intermediate level'
    },
    {
      class: 'communication',
      title: 'Communication & Work',
      content: 'Jira + Confluence, Skype, Slack, Discord, Microsoft Teams. Agile: Kanban & Scrum methodologies, ADRs, road maps, pair programming'
    }
  ]

  ngOnInit (): void {
    this.registerGsapPlugins()
  }

  ngAfterViewInit (): void {
    this.createStrolling()
  }

  private readonly createStrolling = () => {
    gsap.utils.toArray(".revealUp").forEach(function (elem: any) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: function () {
          gsap.fromTo(
            elem,
            { y: 100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto"
            }
          )
        },
        onLeave: function () {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" })
        },
        onEnterBack: function () {
          gsap.fromTo(
            elem,
            { y: -100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto"
            }
          )
        },
        onLeaveBack: function () {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" })
        }
      })
    })
  }

  private readonly registerGsapPlugins = () => gsap.registerPlugin(ScrollTrigger)

}
