import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LinkPreviewComponent } from './link-preview.component';

describe('LinkPreviewComponent', () => {
  let component: LinkPreviewComponent;
  let fixture: ComponentFixture<LinkPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkPreviewComponent ],
      imports: [HttpClientTestingModule],
        providers: [LinkPreviewComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
