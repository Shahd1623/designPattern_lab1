// 2- Create new Document from existing Document each document should have header , footer , pages and  text

//Prototype
class Documents {
  constructor(header, footer, pages, text) {
    this.header = header;
    this.footer = footer;
    this.pages = pages;
    this.text = text;
  }
}

class DocumentPrototype {
  constructor(doc) {
    this.doc = doc;
  }
  clone() {
    return new Documents(
      this.doc.header,
      this.doc.footer,
      this.doc.pages,
      this.doc.text,
    );
  }
}

let featuredDoc = new Documents(
  "Header:Hello World",
  "Footer: end of the Document",
  15,
  "Text: this is a text",
);

let doc1 = new DocumentPrototype(featuredDoc);
const clonedDoc = doc1.clone(); 

console.log(clonedDoc.header);
console.log(clonedDoc.footer);
console.log(clonedDoc.pages);
console.log(clonedDoc.text);
