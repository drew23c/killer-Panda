document.addEventListener('DOMContentLoaded', () =>{
    var n = document.querySelector('#n');
    var s = document.querySelector('#s');
    var e = document.querySelector('#e');
    var w = document.querySelector('#w');
    var p = document.querySelector('p');
    var l = document.querySelector('img');
    var pCount = Number(document.getElementById('#count'))
    var pCount = 5;
    document.addEventListener('click',(event) =>{    
        var panda = Math.floor(Math.random() * 4)
        var array = [0,1,2,3]        
        pCount -= 1
        for(var i = 0; i < array.length; i++){ 
            var random = Math.floor(Math.random() * array[i])                
            
            if(random === panda){
                p.innerText = 'You\'ve been caught!!'
            }                        
        }

        if(event.target === n){
            console.log(random , panda)
                p.innerText = 'Be careful, do not make any noise...' + '\n' + pCount + ' turns left';
                if(random === panda){
                    p.innerText = 'You\'ve been caught!!'
                    l.classList.remove('hide')
                }
                if(pCount === 0){
                    p.innerText = 'You made it out alive!!'            
                }
        }
        else if(event.target === s){
            console.log(random , panda)            
            console.log('South')
                p.innerText = 'You\'re sneaking past the next cage, be careful...' + '\n' + pCount + ' turns left';
                if(random === panda){
                    p.innerText = 'You\'ve been caught!!'
                    l.classList.remove('hide')                    
                }
                if(pCount === 0){
                    p.innerText = 'You made it out alive!!'            
                }
        }
        else if(event.target === e){
            console.log(random , panda)            
            console.log('East')
                p.innerText = 'You just sneaked past one of them, ssshhhh...' + '\n' + pCount + ' turns left';
                if(random === panda){
                    p.innerText = 'You\'ve been caught!!'
                    l.classList.remove('hide')                    
                }
                if(pCount === 0){
                    p.innerText = 'You made it out alive!!'            
                }
        }
        else if(event.target === w){
            console.log(random , panda)            
            console.log('West')
                p.innerText = 'Be on your toes, literally.' + '\n' + pCount + ' turns left';
                if(random === panda){
                    p.innerText = 'You\'ve been caught!!'
                    l.classList.remove('hide')                    
                }
                if(pCount === 0){
                    p.innerText = 'You made it out alive!!'            
                }
        }
    })
    
})