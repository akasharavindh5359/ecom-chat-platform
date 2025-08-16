import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJoinRoomComponent } from './create-join-room.component';

describe('CreateJoinRoomComponent', () => {
  let component: CreateJoinRoomComponent;
  let fixture: ComponentFixture<CreateJoinRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateJoinRoomComponent]
    });
    fixture = TestBed.createComponent(CreateJoinRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
