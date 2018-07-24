/*
import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';
// console.log('HostBinding     .....', @HostListener);

@Directive({
  selector : '[appDropdown]'
})
export class DropdownDirective  implements OnInit {
  @HostBinding('class.show') isOpen = true;

  ngOnInit() {
    console.log('HostBinding.....');
  }

  // @HostListener('click') onClick(eventData: Event) {
  //   console.log('click....................');
  //   this.isOpen = !this.isOpen;
  // }


  @HostListener('click') onClick(btn) {
    console.log('click....................');
    // this.isOpen = !this.isOpen;
  }

}
*/


import {Directive, HostListener, HostBinding, OnInit} from '@angular/core';
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  constructor() { }

  ngOnInit(){
    console.log('init.........');
  }

  @HostBinding('class.show')
  isOpen = true;

  @HostListener('click') toggleOpen() {
    console.log('click ..................................');
    this.isOpen = !this.isOpen;
  }

}
