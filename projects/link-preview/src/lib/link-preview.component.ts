import { Component, Input, OnInit } from '@angular/core';
import { LinkPreviewService } from './link-preview.service';
import {OpengraphInterface} from './opengraph-interface'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'arj-link-preview',
  templateUrl: './link-preview.component.html',
  styleUrls: ['./link-preview.component.scss']
})
export class LinkPreviewComponent implements OnInit {

  @Input()
  public data: OpengraphInterface = {title:'', description: '', image: '', url: '', site_name: ''};

  @Input()
  public size: number = 300;

  public height: number = 0;

  public width: number = 0;

  public heightImg: any = 0;

  public widthImg: number = 0;

  @Input()
  public type: string = 'rectangle-image-left';

  @Input()
  public background: string = 'white';

  @Input()
  public fontColor: string = 'black';

  @Input()
  public url: Subject<string> = new Subject();

  @Input()
  public fixUrl: string = '';

  fontSizeH2 = 0;
  fontSizeH3 = 0;
  fontSizeH4 = 0;
  fontSizeH5 = 0;

  public widthRow = 0;
  public defaultRectangleHeight: number = 150;
  public defaultRectangleWidth: number = 450;
  public defaultRectangleHeightImg: number = 150;
  public defaultRectangleWidthImg: number = 150;

  public defaultSquareHeight: number = 500;
  public defaultSquareWidth: number = 400;
  public defaultSquareHeightImg: any = 'auto';
  public defaultSquareWidthImg: number = 400;
  constructor(private service: LinkPreviewService) {

  }
  urlHtml: string = '';
  setUrl(urlHtml: string) : Observable<OpengraphInterface> {
    this.urlHtml = urlHtml;
    return this.service.gethttp(this.urlHtml);
  }

  openPage(url: string) {
    window.open(url);
  }

  ngOnInit(): void {
    if (this.type.includes('rectangle')) {
      this.height = this.size/3;
      this.width = this.height + this.size;
      this.heightImg = this.height;
      this.widthImg = this.height;
      this.widthRow = this.size - 10;
      let fontSize = this.size - this.widthImg;
      this.fontSizeH2 = fontSize * 0.1;
      this.fontSizeH3 = fontSize * 0.08;
      this.fontSizeH4 = fontSize * 0.06;
      this.fontSizeH5 = fontSize * 0.04;
    } else {
      this.width = this.size;
      this.height = this.size*1.3;
      this.heightImg = 'auto';
      this.widthImg = this.width;
      this.widthRow = this.width;
      this.fontSizeH2 = this.widthRow * 0.1;
      this.fontSizeH3 = this.widthRow * 0.08;
      this.fontSizeH4 = this.widthRow * 0.06;
      this.fontSizeH5 = this.widthRow * 0.04;
    }
    this.url.subscribe((data: string) => {
      if (data !== '') {
        this.service.gethttp(data).subscribe((og: OpengraphInterface) => this.data = og);
      }
    })
    if (this.fixUrl.length > 0) {
      this.service.gethttp(this.fixUrl).subscribe((og: OpengraphInterface) => this.data = og);
    }

  }

  cutUrl(url: string): string {
    url = url.includes('https') ? url.replace('https://', '') : url.replace('http://', '');
    url = url.substring(0, url.indexOf('/'));
    return url;
  }

  cutText(text: string, sizeText: number, sizeRow: number): string {
    let length = (sizeRow / sizeText) * 4;
    return text.length > length ? text.substring(0, length) + '...' : text;
  }


}
