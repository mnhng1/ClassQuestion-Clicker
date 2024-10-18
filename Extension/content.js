function handleQuestion() {
    const questions = document.querySelectorAll('.ansbtn');
  
    if (questions.length === 0) {
      console.log('No questions found.');
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    randomQuestion.click(); 
  
    console.log(`Clicked answer #${randomIndex + 1}`);
  

    setTimeout(handleSubmit, 1000);
  }
  
 
  function handleSubmit() {
    const submitBtn = document.querySelector('#submitbtn'); 
  
    if (!submitBtn) {
      console.log('Submit button not found yet, retrying...');
      setTimeout(handleSubmit, 1000); 
      return;
    }
  
    submitBtn.click();
    console.log('Clicked the submit button.');
  }
  
  
  function observeQuestionArea() {
    const questionArea = document.querySelector('#currentquestion'); 
  
    if (!questionArea) {
      console.log('Question area not found.');
      return;
    }
  
    
    const observer = new MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          console.log('New question detected!');
          handleQuestion(); 
        }
      }
    });
  
    
    observer.observe(questionArea, { childList: true, subtree: true });
  }
  
  
  window.addEventListener('load', () => {
    console.log('Page loaded. Starting to observe for questions.');
    observeQuestionArea(); 
  });