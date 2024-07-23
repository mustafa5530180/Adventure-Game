#! /usr/bin/env node
import inquirer from "inquirer";
// ------------------------------Games Variable--------------------------------//
let enemies = ["Skeleton", "Zombie", "Warrior", "Assassion"];
let maxEnemyHealth = 75;
let enemyAttackDemageToHero = 25;
// ------------------------------Player Variable--------------------------------//
let HeroHealth = 100;
let attackDemageToEnemy = 50;
let numHealthPotion = 3;
let healthPotionhealAmount = 30;
let healthPotionDropchance = 50;
// ------------------------------While Loop Condition--------------------------------//
let gameRunning = true;
console.log("Welcome to DeadZone!");
Game: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`#${enemy} has appeared#\n`);
    while (enemyHealth > 0) {
        console.log(`Your Health :${HeroHealth}`);
        console.log(`${enemy} Health : ${enemyHealth}`);
        let options = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "What Would You Like You ?",
            choices: ["1.Attack", "2.Take Health Potion", "3.Run"]
        });
        if (options.ans === "1.Attack") {
            let attackDemageToEnemy = 50;
            let demageToEnemy = Math.floor(Math.random() * attackDemageToEnemy + 1);
            let demageToHero = Math.floor(Math.random() * enemyAttackDemageToHero + 1);
            enemyHealth -= demageToEnemy;
            HeroHealth -= demageToHero;
            console.log(`You Strike the ${enemy} for ${demageToEnemy}`);
            console.log(`${enemy} Strike you for ${demageToHero} demage.`);
            if (HeroHealth < 1) {
                console.log("You have taken too Much Demage . You are too Weak  to Continue .");
                break;
            }
        }
        else if (options.ans === "2.Take Health Potion") {
            if (numHealthPotion > 0) {
                HeroHealth += healthPotionhealAmount;
                numHealthPotion--;
                console.log(`You use health potion  for ${healthPotionhealAmount}`);
                console.log(`You now have ${HeroHealth} health `);
                console.log(`You have ${numHealthPotion} health potions left.`);
            }
            else {
                console.log(`You have no Health potions left . Defeat  enemy  for a chance get health  potion`);
            }
        }
        else if (options.ans === "3.Run") {
            console.log(`You run away from ${enemy}`);
            continue Game;
        }
    }
    if (HeroHealth < 1) {
        console.log(`You  are out from battle .You are  to Weak.`);
        break;
    }
    console.log(`${enemy} was  defeated!`);
    console.log(`You have  ${HeroHealth} Health.`);
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < healthPotionDropchance) {
        numHealthPotion++;
        console.log(`Enemy give  you Health  potion`);
        console.log(`Your Health is  ${HeroHealth}`);
        console.log(`You Health Potion is ${numHealthPotion} `);
    }
    let userOption = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "What would you like to do Now ",
        choices: ["1.Continue ", "2.Exit"]
    });
    if (userOption.ans === "1.Continue") {
        console.log("You are Condition on your adventure");
    }
    else {
        console.log("You Successfly Exit  from  DeadZone");
        break;
    }
    console.log("Thanks For Playing\n");
}
