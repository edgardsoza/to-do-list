export default class Task {
  constructor(completed, description, index) {
    this.completed = completed;
    this.description = description;
    this.index = index;
  }

  getDescription() {
    return this.description;
  }
}

export function bonjour(str) {
  return str;
}