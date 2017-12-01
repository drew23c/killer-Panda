document.addEventListener('DOMContentLoaded', () =>{
    var n = document.querySelector('#n');
    var s = document.querySelector('#s');
    var e = document.querySelector('#e');
    var w = document.querySelector('#w');
    var p = document.querySelector('p');
    var l = document.querySelector('#scary-panda');
    var v = document.querySelector('#victory-dance');
    var pCount = Number(document.getElementById('#count'))
    var pCount = 5;
    var arr = [n,s,e,w]
    document.addEventListener('click',(event) =>{    
        pCount -= 1
        if(event.target === n){
            console.log('North')
                p.innerText = 'Be careful, do not make any noise...' + '\n' + pCount + ' turns left';
                if(n === arr[Math.floor(Math.random() * 4)]){
                    p.innerText = 'You\'ve been caught!!'
                    l.classList.remove('hide')
                }
                if(pCount === 0){
                    p.innerText = 'You made it out alive!!'
                    v.classList.remove('hide-victory'); 
                    l.classList.add('hide')                                                            
                }
        }
        else if(event.target === s){
            console.log('South')
                p.innerText = 'You\'re sneaking past the next cage, be careful...' + '\n' + pCount + ' turns left';
                if(s === arr[Math.floor(Math.random() * 4)]){
                    p.innerText = 'You\'ve been caught!!'
                    l.classList.remove('hide')                    
                }
                if(pCount === 0){
                    p.innerText = 'You made it out alive!!'  
                    v.classList.remove('hide-victory');
                    l.classList.add('hide')                                                            
                }
        }
        else if(event.target === e){
            console.log('East')
                p.innerText = 'You just sneaked past one of them, ssshhhh...' + '\n' + pCount + ' turns left';
                if(e === arr[Math.floor(Math.random() * 4)]){
                    p.innerText = 'You\'ve been caught!!'
                    l.classList.remove('hide')                    
                }
                if(pCount === 0){
                    p.innerText = 'You made it out alive!!'
                    v.classList.remove('hide-victory'); 
                    l.classList.add('hide')                                                            
                }
        }
        else if(event.target === w){
            console.log('West')
                p.innerText = 'Be on your toes, literally.' + '\n' + pCount + ' turns left';
                if(w === arr[Math.floor(Math.random() * 4)]){
                    p.innerText = 'You\'ve been caught!!'
                    l.classList.remove('hide')                    
                }
                if(pCount === 0){
                    p.innerText = 'You made it out alive!!'
                    v.classList.remove('hide-victory'); 
                    l.classList.add('hide')                                        
                }
        }
    })
    
})