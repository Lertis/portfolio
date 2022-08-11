import { AfterViewInit, Component, OnInit } from '@angular/core'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

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
