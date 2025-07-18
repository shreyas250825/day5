class FeedbackBox<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const stringFeedback = new FeedbackBox<string>();
stringFeedback.add("Great course!");
stringFeedback.add("Need more examples.");
console.log(stringFeedback.getAll()); // ["Great course!", "Need more examples."]
