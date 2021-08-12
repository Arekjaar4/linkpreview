import { TestBed } from '@angular/core/testing';

import { LinkPreviewService } from './link-preview.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LinkPreviewService', () => {
  let service: LinkPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
        providers: [LinkPreviewService]
    });
    service = TestBed.inject(LinkPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
