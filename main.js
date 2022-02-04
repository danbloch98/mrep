//Main Client Click
let mainClientButton = document.getElementById('clientNavigationMenu');
let mainClientNavigation = document.getElementById('mainClientNavigationMenu');
let mainClientChange = document.getElementById('skyline');

var mainClientTest = 0; 
function mainClientClick(){
        if(mainClientTest == 0 ){
            mainClientNavigation.style.display = 'block';


        }
        mainClientTest = mainClientTest + 1;
    }
    function mainClientUnclick(){
        if(mainClientTest == 2){
            mainClientNavigation.style.display = 'none';
            mainClientTest = 0;


        }
    }
mainClientButton.addEventListener('click',mainClientClick);
mainClientButton.addEventListener('click',mainClientUnclick);
//Client Click End

//Button Click
let button = document.getElementById('buttonClick');
let sideNavigation = document.getElementById('sideNavigationMenu');
let mainChange = document.getElementById('main');
let missionStatement = document.getElementById('missionState');

var test = 0; 
function buttonClick(){
        if(test == 0 && window.location.pathname == '/C:/Users/Daniel/OneDrive/Code/Website/Michael%20Raymond/.vscode/index.html'){
            sideNavigationMenu.style.display = 'block';
            mainChange.style.marginLeft= '300px';
            missionStatement.style.left= '300px';
        }
        else if(test == 0){
            sideNavigationMenu.style.display = 'block';
            mainChange.style.marginLeft= '300px';
        }
        test = test + 1;

    }
 function buttonUnclick(){
        if(test == 2 && window.location.pathname == '/C:/Users/Daniel/OneDrive/Code/Website/Michael%20Raymond/.vscode/index.html'){
            sideNavigationMenu.style.display = 'none';
            mainChange.style.marginLeft= '0px';
            missionStatement.style.left= '0px';
            test = 0;
        }
        else if(test == 2){
            sideNavigationMenu.style.display = 'none';
            mainChange.style.marginLeft= '0px';
            test = 0;
        }
    }
button.addEventListener('click',buttonClick);
button.addEventListener('click',buttonUnclick);
//Button Click End


$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});



//Side Client Click
let sideClientButton = document.getElementById('sideClients');
let sideClientNavigation = document.getElementById('sideClientNavigationMenu');
let clientDrop = document.getElementById('sideDrop');
var sideClientTest = 0; 
function sideClientClick(){
        if(sideClientTest == 0){
            sideClientNavigation.style.display = 'block';
            clientDrop.style.top = '200px'
        }
        sideClientTest = sideClientTest + 1;
    }
    function sideClientUnclick(){
        if(sideClientTest == 2){
            sideClientNavigation.style.display = 'none';
            clientDrop.style.top = '0px'

            sideClientTest = 0;
        }
    }
sideClientButton.addEventListener('click',sideClientClick);
sideClientButton.addEventListener('click',sideClientUnclick);
//Client Click End

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

