import { DateCalc } from "./datecalc.js";
import { Tabs } from "./tabs.js";
import { Timer } from "./timer.js";
import { initTimer } from "./utils.js";

new DateCalc("datecalc", "datecalc__result");

Tabs();

const timer = new Timer("timer");
initTimer(timer);