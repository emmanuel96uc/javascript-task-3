
function myFunction(give){
  
    let take = [];
   
    for(let i = 1; i <= give; i++){
     
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
            take.push("yu-gi-oh");
        }
        
        else if (i % 2 === 0 && i % 3 === 0){
            take.push("yu-gi");
        }
        
        else if(i % 2 === 0 && i % 5 === 0){
            take.push("yu-oh");
        }
        
        else if (i % 3 === 0 && i % 5 === 0){
            take.push("gi-oh");
        }
        
        else if (i % 2 === 0){
            take.push("yu");
        }
        
        else if (i % 3 === 0){
            take.push("gi");
        }
        
        else if (i % 5 === 0){
            take.push("oh");
        }
        
        else{
            take.push(i);
        }
    }

    console.log(take);
    return take;
}
myFunction(100);
myFunction(85); 