type Words = {
  // 해시
  [key: string]: string | string[];
  //객체의 property에 대해 모르지만 타입만을 알 때 유용하다
};
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    // word는 Word 클래스의 인스턴스 타입.
    if (!this.words[word.term]) {
      // 사전에 없는 단어이면
      this.words[word.term] = word.def;
    }
  }
  find(term: string) {
    return this.words[term];
  }
  // 단어를 삭제
  rmv(term: string) {
    delete this.words[term];
  }
  // 단어 이름 업데이트
  update(oldTerm: string, newTerm: string) {
    if (this.words.hasOwnProperty(oldTerm)) {
      this.words[newTerm] = this.words[oldTerm];
      delete this.words[oldTerm];
    }
  }
  // 사전에 저장된 단어의 개수
  size() {
    return Object.keys(this.words).length;
  }
  // 모든 사전의 이름과 뜻 출력
  all() {
    for (let [key, value] of Object.entries(this.words)) {
      console.log(`${key}: ${value}`);
    }
  }
  static hello() {
    // 클래스를 생성 안해도 사용 가능
    return 'hello';
  }
}
// words는 initializer 없이 선언해주고 contructor에서 수동으로 초기화
// constructor에 인자로 넣어 constructor가 지정해주길 바라는 게 아니므로

// 각각의 단어에 대한 클래스
class Word {
  constructor(
    // 값을 보여주고는 싶지만 수정은 불가능하게
    public readonly term: string,
    public def: string | string[]
  ) {}
  // 단어 출력하는 메소드
  toString() {
    console.log(`${this.term}: [뜻] ${this.def}`);
  }
  // 단어 정의 추가
  addDef(newDef: string) {
    if (typeof this.def === 'string') {
      this.def = [this.def, newDef];
    } else {
      this.def = [...this.def, newDef];
    }
  }
  // 단어 정의 수정
  updateDef(oldDef: string, newDef: string) {
    if (typeof this.def === 'string') {
      if (oldDef === this.def) this.def = newDef;
    } else {
      this.def.filter((val) => val !== oldDef);
      this.def.push(newDef);
    }
  }
}

Dict.hello();
