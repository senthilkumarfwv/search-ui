import { Directive, Inject, Output, EventEmitter, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCommon]'
})
export class CommonDirective {

}


@Directive({
  selector: '.search-link'
})

export class SearchLinkDirective {


  constructor(private element: ElementRef) {

  }


  /*@HostListener("click", ["$event"])
   onClick(event:any) {
    let elem =  document.querySelector('.search-container');
    console.log(elem)
    elem?.classList.add('show')

   }

   @HostListener('document:mouseup', ['$event'])
    onDocumentClick(event:any) {

   }*/

   ngOnInit() {


   }

}
