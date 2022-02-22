var raagsf={'Kir':'Kirwani','Charu':'Charukeshi','Bhai':'Bhairav','Bhup':'Bhupali','Yam':'Yaman','Pur':'Puriya'}


var songsf={'B':'B-Scale','C':'C-Scale','C#':'CS-Scale','D':'D-Scale','D#':'DS-Scale','E':'E-Scale','F':'F-Scale','F#':'FS-Scale','G#':'GS-Scale','A':'A-Scale','A#':'AS-Scale'};
var pr=""
var opr="A#"
var rpr="Charu"
var song="";
var raag=""
player = document.getElementById('myMusic'); 
var volume = document.getElementById('rngVolume').value;
var speed = document.getElementById('rngSpeed').value; 
var raagpath=``;

function rescale()
{
    document.getElementById('scc').innerHTML=opr;
    load(opr)
}
function loadraag(rname)
{
    
    document.getElementById(rpr).classList.remove('active');
    document.getElementById(rname).classList.add('active');
    rpr=rname;
    raag=raagsf[rname];
    
    document.getElementById('rsc').innerHTML=raag;
    
    raagpath=`src/files/${raag}`;

    reset();
    rescale();
}

function load(name)
{
    if(pr=="")
    {
        pr=opr;
    }
    
        document.getElementById(pr).classList.remove('active');
        document.getElementById(name).classList.add('active');
        
        if(raag=="Puriya")
        {
            if(name=='A')
            {
                window.alert('Scale not Found')
            }
            else{
                document.getElementById('scc').innerHTML=name;
                pr=name;
                song=songsf[name];
                player.src=raagpath+`/${song}.mp3`;

            }
        }
        else{
            document.getElementById('scc').innerHTML=name;
            pr=name;
            song=songsf[name];
            player.src=raagpath+`/${song}.mp3`;

        }
        
    reset();


}
function reset()
{
    player.volume = volume;  
    player.playbackRate = speed;
    document.getElementById('play').classList.add('active');
    document.getElementById('pause').classList.remove('active');
    player.pause(); 
}


              
        window.onload=function()  
        {  
            
            document.getElementById('play').addEventListener('click', function(){  
               
                if(raag=="")
                {
                    window.alert("Please Select the Raag");
                }
                else{
                    document.getElementById('play').classList.remove('active');
                    document.getElementById('pause').classList.add('active');
                    player.play();   
                }
               
            });  
            document.getElementById('pause').addEventListener('click' ,function(){  
                document.getElementById('play').classList.add('active');
               document.getElementById('pause').classList.remove('active');
                player.pause();     
            });  
             
            document.getElementById('rngVolume').addEventListener("click", function(){  
                    volume = document.getElementById('rngVolume').value; 
                    player.volume = volume;  
                      
                }); 
                document.getElementById('rngSpeed').addEventListener("click", function(){  
                    speed = document.getElementById('rngSpeed').value; 
                    player.playbackRate = speed;  
                      
                }); 
            
              
        }  