window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script2 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script3 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script4 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script5 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script6 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script7 = function()
{
  var player = GetPlayer();
var timerCounter = setInterval(Timer, 1000);
var numberTimer;
var actionTimer

function Timer () {
	numberTimer = player.GetVar("timer");
	
 	actionTimer = player.GetVar("action_timer");
 	
	actionTimer ? numberTimer-- : numberTimer;
	
	player.SetVar("timer", numberTimer);
	
	if ( numberTimer == 0 || !actionTimer ){
	
			clearInterval(timerCounter);
		}
}
}

window.Script8 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script9 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script10 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script11 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script12 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script13 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script14 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script15 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script16 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script17 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script18 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script19 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script20 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script21 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script22 = function()
{
  var player = GetPlayer();
var timerCounter = setInterval(Timer, 1000);
var numberTimer;
var actionTimer

function Timer () {
	numberTimer = player.GetVar("timer");
	
 	actionTimer = player.GetVar("action_timer");
 	
	actionTimer ? numberTimer-- : numberTimer;
	
	player.SetVar("timer", numberTimer);
	
	if ( numberTimer == 0 || !actionTimer ){
	
			clearInterval(timerCounter);
		}
}
}

window.Script23 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script24 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script25 = function()
{
  var player = GetPlayer();
var timerCounter = setInterval(Timer, 1000);
var numberTimer;
var actionTimer

function Timer () {
	numberTimer = player.GetVar("timer");
	
 	actionTimer = player.GetVar("action_timer");
 	
	actionTimer ? numberTimer-- : numberTimer;
	
	player.SetVar("timer", numberTimer);
	
	if ( numberTimer == 0 || !actionTimer ){
	
			clearInterval(timerCounter);
		}
}
}

window.Script26 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script27 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script28 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script29 = function()
{
  DS.appState.onToggleVolume(1);
}

};
