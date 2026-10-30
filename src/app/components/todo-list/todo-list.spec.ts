import { TestBed } from '@angular/core/testing';
import { TodoList } from './todo-list';

describe('TodoList', () => {
  it('updates completion state when a checkbox is selected', async () => {
    await TestBed.configureTestingModule({
      imports: [TodoList],
    }).compileComponents();

    const fixture = TestBed.createComponent(TodoList);
    fixture.detectChanges();

    const checkbox = fixture.nativeElement.querySelector(
      'input[type="checkbox"]',
    ) as HTMLInputElement;
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(checkbox.checked).toBe(true);
    expect(fixture.nativeElement.querySelector('.progress').textContent).toContain(
      '1 of 4 done',
    );
    expect(fixture.nativeElement.querySelector('.todo-label').classList).toContain(
      'completed',
    );
  });
});
