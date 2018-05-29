# Notes Angular

The main project is in the **section 3** folder     

## CLI snippet

**Create a component**    
```bash
ng g c newComponentName
```

**Create a component without the test file**     
```bash
ng g c newComponentnames --spec false
```

---

## Pass data between components
( ) are designed to pass data **OUT**    
[ ] are designed to pass data **IN**    
[( ngModel )] is designed to pass data **IN & OUT** 

**IMPORTANT** Do not forget `$event` to get datas from a child to a parent 

### Output ( )
+ with click a builtin event (When you click it call myFunction in the ts file)
````html
<div class="">
    <ul class="">
        <li><a href="#" (click)="myFunction('say hello')">Recipes</a></li>
        <li><a href="#" (click)="myFunction('say good bye')">Shopping List</a></li>
    </ul>
</div>
<div>
    <p>{{ sentenceToShow }}</p>
</div>
````
````typescript
sentenceToShow: string = 'nothing to say';

myFunction(sentence: string) {
    this.sentenceToShow = sentence;
}
````
+ with your own variable


### Input [ ]
With [ ] you can bind all Html elements like `[src]`, `[style]` ...    

### ngModel

### $event


---

## Attribute directive in Angular

### *ngFor *ngIf [ngClass] [ngStyle] reminder

Example:
````html
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <button
        class="btn btn-primary"
        (click)="onlyOdd = !onlyOdd">Only show odd numbers</button>
      <br><br>
      <ul class="list-group">
        <div *ngIf="onlyOdd">
            <li
            class="list-group-item"
            *ngFor="let odd of oddNumbers"
            [ngClass]="{odd: odd % 2 !== 0}"
            [ngStyle]="{backgroundColor: odd % 2 !== 0 ? 'yellow' : 'transparent'}">
            {{ odd }}
          </li>  
        </div>
        <div *ngIf="!onlyOdd">
            <li
            class="list-group-item"
            *ngFor="let even of evenNumbers"
            [ngClass]="{odd: even % 2 !== 0}" 
            [ngStyle]="{backgroundColor: even % 2 !== 0 ? 'yellow' : 'transparent'}">
            {{ even }}
          </li>  
        </div>
        
      </ul>
      <ng-template [ngIf]="onlyOdd">
        <p>Only odd</p>
      </ng-template>
    </div>
  </div>
</div>
````

````typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
}
````

````css
.container {
  margin-top: 30px;
}

.odd {
  color: red;
}
````

### Make your own directive (simple example, not a good practice!)
Generate a directive with CLI     
````bash
ng g directive basic-hightlight/BasicHighlight
````
or
````bash
ng g d basic-hightlight/BasicHighlight
````

Will generate the basic-highlight.directive.ts     
Finally the file should look like that:
````typescript
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHightlight]'
})
export class BasicHightlightDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
````

Don't forget to import it in the module (app.module.ts for this purpose)
````typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicHightlightDirective } from './basic-highlight/basic-hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHightlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
````
Now let's use it in our template!
````html
<p appBasicHightlight>this is the use of the directive</p>
````

### Make your own directive 2 (better solution with Renderer2)

````typescript
import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2 ) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }
}
````

Now let's use it in our template!
````html
<p appBetterDirective>this is the use of the directive</p>
````

### Make your own directive 3 (Make it more interactive with @HostListener)

````typescript
import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {
  
  constructor(private elRef: ElementRef, private renderer: Renderer2 ) { }
  
  ngOnInit() {
    
  }
  
  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}
````

### Make your own directive 3 (Make it more concise withe @HostBinding)

````typescript
import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {
  @HostBinding('style.backgroundColor') bkGroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2 ) { }
  
  ngOnInit() {
    
  }
  
  @HostListener('mouseenter') mouseover() {
    this.bkGroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseleave() {
    this.bkGroundColor = 'lightgrey';
  }
}
````
