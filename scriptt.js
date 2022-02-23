const game =()=>{

    let pscore=0;
    let cscore=0;

//----------start the game which means that it hide's th lets play button and shows the playmatch section----------

    const startgame=()=> {
        const disp=document.querySelector(".display")                        //----------(1)------------
        const playbtn=document.querySelector(".display button")              //----------(2)------------
        const audio=document.querySelector(".audio")
        const match=document.querySelector(".match");                       //----------(3)---------------
        playbtn.addEventListener("click", () =>{  
            disp.style.visibility="hidden";
            match.style.visibility=" visible";
            audio.play();
        });
        
    };

    //------------match will start by pressing the option button-------------------

    const playmatch =()=>{
        const option=document.querySelectorAll(".option button");               //----------(4)------------
        const playerhand=document.querySelector(".playerhand");                  //----------(5)------------
        const computerhand=document.querySelector(".computerhand");             //----------(6)------------
        const hands=document.querySelectorAll('.hands img');                    //----------(7)------------

        hands.forEach(hand=>{
            hand.addEventListener("animationend",function(){
               this.style.animation="";
            });

        });

       
        const arr=["rock","paper","scissor"];
        option.forEach(option =>{
                 
            option.addEventListener("click",function(){
                const num=Math.floor(Math.random()*3);
                const choice=arr[num];

                setTimeout(()=>{
                   
                playerhand.src=`${this.textContent}.png`;
                computerhand.src=`${choice}.png`;

                // -------------calling of the compare funtion which will compare-----------
                //----------------animation given to the hand images----------------------
                compare(this.textContent,choice); 
                },1000);
                playerhand.style.animation="phands 1s linear";
                computerhand.style.animation="chands 1s linear";
               
            });
        });

    };

    // ------------score visible on the header part  will be updated after result-------

    const updatescore=()=>{
        const playerscore=document.querySelector(".player p");                  //----------(8)------------
        const computerscore=document.querySelector(".computer p");              //----------(9)------------
        playerscore.textContent=pscore;
        computerscore.textContent=cscore;
        if( playerscore.textContent==10 || computerscore.textContent==10)
        {
           
            const winner =document.querySelector(".winner"); 
            const match=document.querySelector('.match '); 
                const disp=document.querySelector(".display") ;
                const head=document.querySelector(".display h1");
                const lets=document.querySelector('.btn') ;
                const audio=document.querySelector('.audio');

            if(pscore==10)
            {
                  
                winner.textContent='you are the winner';
                match.style.visibility="hidden";
                disp.style.visibility="visible";
                lets.textContent="play again";
                audio.pause();
                head.textContent="you are the winner you have beaten the computer";
                
            }
           else{ 
                winner.textContent='computer is the winner';
                match.style.visibility="hidden";
                disp.style.visibility="visible";
                lets.textContent="play again";
                audio.pause();
                head.textContent="computer is the winner you lost the match";

               
            }
            pscore=0;
            cscore=0;
            playerscore.textContent=0;
            computerscore.textContent=0;
          
            
        }
    };

    //----------comparison between the player and computer happen----------------

    const compare=(pchoice,choice)=>{
        const winner =document.querySelector(".winner");                         //----------(10)------------
        if(pchoice===choice)
        {
            winner.textContent="It is a tie";
            return;
        }
        if(pchoice==='rock'){
            if(choice==='scissor')
            {
                winner.textContent='player wins';
                pscore++;
                updatescore();
                return;
            }
            else{
                winner.textContent='computer wins';
                cscore++;
                updatescore();
                return;
            }
            
        }
        if(pchoice==='scissor')
        {
            if(choice==='paper'){
                    winner.textContent='player win';
                    pscore++;
                updatescore();
                    return;
            }
            else{
                winner.textContent='computer win';
                cscore++;
                updatescore();
                return;
            }
        }
        if(pchoice==='paper')
        {
            if(choice==='rock'){
                    winner.textContent='player win';
                    pscore++;
                updatescore();
                    return;
            }
            else{
                winner.textContent='computer win';
                cscore++;
                updatescore();
                return;
            }
        }
    }

    startgame();
    playmatch();

    function playagain(){
                            
    }
};
    game();