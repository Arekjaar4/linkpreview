import { NgModule } from '@angular/core';
import { LinkPreviewComponent } from './link-preview.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LinkPreviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LinkPreviewComponent
  ],
  providers: [LinkPreviewComponent]
})
export class LinkPreviewModule { }
