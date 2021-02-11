class Question{
    /*constructor(){
        this.input = createInput("Name");
        this.title1 = createElement('h2');
        this.button = createButton('Submit');
        this.title2 = createElement('h2');
}*/
constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }
/*hide(){
    this.input.hide();
}*/
hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }
  
display(){
    this.title.html("MyQuiz Game");
    this.title.position(350,0);

    this.question.html("Question -: What starts and ends with letter 'E', but has only one letter? " );
    this.question.position(150,80);

    this.option1.html("1: Everyone");
    this.option1.position(150,100);

    this.option2.html("2: Envelope");
    this.option2.position(150,120);

    this.option3.html("3: Estimate");
    this.option3.position(150,140);

    this.option4.html("4: Example");
    this.option4.position(150,160);

    this.input1.position(150,230);
    this.button.position(200,250);

    this.button.mousePressed(()=>{
        this.input1.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
});
}
}