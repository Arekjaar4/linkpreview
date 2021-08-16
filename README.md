
# LinkPreview

Link previewer reading the Open Graph tags


## Demo

https://test-link-preview.herokuapp.com/

  
## Installation

Install link-preview with npm

```bash
  npm i --save @arekjaar/link-preview
```
    
## Screenshots

![App Screenshot](https://drive.google.com/uc?id=11wdnLmzgxI5F-JlS3dsscViJeqlnp7Oz)
![App Screenshot](https://drive.google.com/uc?id=1B1v0sCfpVC0NdF1Mejq0Meyh8xbBIlYs)

  
## Features

- Configurable background color ```[background]```
- Configurable font color ```[fontColor]```
- Configurable preview size ```[size]```
- Fixed url ```[fixUrl]```
- Dynamic url ```[url]```
- Theming: ```rectangle-image-left```, ```rectangle-image-right```, ```square-image-up```, ```square-image-down```, ```square-image-center```

  
## Usage/Examples

app.module.ts
```javascript
import { LinkPreviewModule } from '@arekjaar/link-preview';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LinkPreviewModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
app.component.html
```html
<div [style.padding]='"10px"'>
<link-preview [url]='url1' [type]='"rectangle-image-right"' [fixUrl]='"https://freecons.herokuapp.com/"' [size]=400 [fontColor]='"white"' [background]='"black"'></link-preview>
<mat-form-field class="example-full-width" appearance="fill">
  <mat-label>Set url and click out</mat-label>
  <input matInput (change)='setUrl1($event)'>
</mat-form-field>
</div>
```
app.component.ts
```javascript
public url1: Subject<string> = new Subject();

setUrl1(event: any){
      if (event.target.value !== '') {
      this.url1.next(event.target.value);
      }
    }
```

# Hi, Do you want to collaborate by inviting me to a coffee? 👋

[![buymeacoffee](https://drive.google.com/uc?id=1lFRr7rhDH66bqb7SKIIPQ2YslcnGdu4_)](https://www.buymeacoffee.com/martinmul)

# Keywords

link, preview, angular, open graph, opengraph

  