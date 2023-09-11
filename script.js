const buttons = document.querySelectorAll(".button");
const textarea = document.getElementById("textarea"); 

const clickon = (event) => {
  const buttonValue = event.target.innerHTML;

  switch(buttonValue){
    case "C" :
       textarea.value = null;
            break; 
    case "=" :
      try{
        textarea.value = eval(textarea.value);
      }catch(e){
        textarea.value = "ERROR"
      }
       
            break;
    case "⬅" :
      textarea.value=textarea.value.slice(0,textarea.value.length-1);
            break;

    default:
      textarea.value = `${textarea.value}${buttonValue}`; 
  }
};


buttons.forEach((button) => {
  button.addEventListener("click", clickon);
});

