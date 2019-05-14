interface Book {
  title: string;
  author: string;
  isPublished: boolean;
}
let b: Book = { title: "Angular in 24 hrs", author: "zeo", isPublished: true };

class FictionBook implements Book {
  title: string;
  author: string;
  isPublished: boolean;
}
