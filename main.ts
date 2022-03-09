let decision: string;
let emHP: number;
let emAT: number;
let emCWRD: string;
let bearChance: number;
let playerACT: string;
let playerLCK: number;
let playerCLCK: number;
let playerRUN: number;
let emAI: number;
let emLCK: number;
let emRUN: number;
let playerRestStop: string;
let PRSE: boolean;
let playerHeal: number;
let forgive1: string;
let forgive2: string;
let BadChance: any;
let playerLoot: number;
let EggM1: number;
/** System variables */
/** Continue */
//  global emTP
//  global emHP
//  global emAT
//  global emWRD
//  global emCWRD
//  global antHP
//  global antAT
//  global snakeHP
//  global snakeAT
//  global snakeVNM
//  global ratWHIP
//  global birdPECK
function enemyRoller() {
    let emHP2: number;
    let emAT2: number;
    let ratWHIP2: boolean;
    let emWRD2: string;
    let emCWRD2: string;
    let birdPECK2: boolean;
    let snakeVNM2: boolean;
    
    emTP = randint(1, 4)
    while (emEND2 == false) {
        if (emTP == 1) {
            emHP2 = ratHP
            emAT2 = ratAT
            ratWHIP2 = true
            emWRD2 = "rat"
            emCWRD2 = "Rat"
            emEND2 = true
        } else if (emTP == 2) {
            emHP2 = birdHP
            emAT2 = birdAT
            birdPECK2 = true
            emWRD2 = "bird"
            emCWRD2 = "Bird"
            emEND2 = true
        } else if (emTP == 3) {
            emHP2 = antHP
            emAT2 = antAT
            emWRD2 = "ant colony"
            emCWRD2 = "Ant colony"
            emEND2 = true
        } else if (emTP == 4 && XPLevelUp1 == true) {
            emHP2 = snakeHP
            emAT2 = snakeAT
            emWRD2 = "snake"
            emCWRD2 = "Snake"
            snakeVNM2 = true
            emEND2 = true
        } else if (emTP == 4 && XPLevelUp1 == false) {
            emTP = randint(1, 3)
        }
        
    }
}

let emEND2 = false
let emTP = 0
let XPLevelUp2 = false
let XPLevelUp1 = false
let battleCounter = 0
let ratWHIP = false
let snakeVNMHurt = false
let emFlee = false
let emEND = false
let playerSTUN = 0
let deathPass = false
let playerEND = false
let luckCounter = 0
let turnCounter = 0
let battleEnd = false
let boarPass = false
let XPLevelCap1 = false
let XPTotal = 0
let introDialogue = false
let Chp1Skip = false
let ChpEnd1 = false
let TheCheck = false
let snakeAT = 0
let snakeHP = 0
let antAT = 0
let antHP = 0
let birdAT = 0
let birdHP = 0
let ratAT = 0
let ratHP = 0
let ChpEND = false
let bossBeat = false
let snakeVNM = false
let birdPECK = false
//  Player inputs:
let player_confirm = ["Yes", "yes", "Y", "y"]
let player_deny = ["No", "no", "N", "n"]
let player_attack = ["Attack", "attack", "att", "Att", "a", "A"]
let player_defend = ["Defend", "defend", "def", "Def", "d", "D"]
let player_flee = ["Flee", "flee", "F", "f"]
let player_rest = ["Rest", "rest", "Heal", "heal", "R", "r", "H", "h"]
let player_loot = ["Loot", "loot", "Scavenge", "scavenge", "Search", "search"]
let player_explore = ["Explore", "explore", "L", "l", "S", "s", "E", "e"]
//  player_rand = ["Random","random","Rand","rand"]
let my_sprite = sprites.create(assets.image`
    Yes
`, SpriteKind.Player)
my_sprite.setPosition(0, 0)
let playerHP = 8
let playerMaxHP = 8
let playerAT = 2
let playerDEF = 1
//  *Removed Content*
//  playerATL = 1 #Attack Level
//  playerATLxp = 0
//  playerDEFL = 1 #Defense Level
//  playerDEFLxp = 0
//  Rat
ratHP = 4
ratAT = 2
let ratDEF = 1
//  Bird
birdHP = 3
birdAT = 3
let birdDEF = 1
//  Ant Colony
let antNUM = randint(2, 3)
antHP = antNUM
antAT = Math.trunc(1.5 * antNUM)
snakeHP = 7
snakeAT = 2
let snakeWRD = "Snake"
let snakeCWRD = "Snake"
let emDEF = 1
let emWRD = "placeholder"
//  Boss: Boar
let boarHP = 12
let boarAT = 4
//  print("Test") #Used to test if the emEND variable was doing its job
let emTP2 = 4
let x = randint(1, 4)
//  print(XPTotal)
//  defenseCounter = 0
//  enemyRoller()
while (TheCheck == false) {
    decision = "Yes"
    //  str(input("Begin from chapter 1? "))
    if (player_deny.indexOf(decision) >= 0) {
        ChpEnd1 = true
        Chp1Skip = true
        TheCheck = true
    } else if (player_confirm.indexOf(decision) >= 0) {
        ChpEnd1 = false
        TheCheck = true
    } else {
        console.log("Invalid response; Try again...")
    }
    
}
while (ChpEnd1 == false && Chp1Skip == false) {
    //  playerHP > 0 and
    //  Leads to a bossfight which ends the game
    if (introDialogue == false) {
        console.log(`
            You are a slime and have woken up in a small cave with little light and the sounds of creatures surronding you, lurking in the dark...
        `)
        //  Perhaps realate the XP system to gaining mass as a slime with float points (like 1.6 KG instead of just 1 XP)
        introDialogue = true
    }
    
    pause(3000)
    if (XPTotal >= 20) {
        XPLevelCap1 = true
    }
    
    if (XPTotal < 20) {
        enemyRoller()
    }
    
    if (XPLevelCap1 == false) {
        //  Used to summon boss
        if (emTP2 == 3) {
            console.log("Suddenly, a colony of ants froms a large monster. They appear very hungry!")
        } else {
            console.log("Suddenly, a " + emWRD + " appears, looking hungry!")
        }
        
    } else if (boarPass == false) {
        console.log("As you travel through the sewers, you see light coming from outside the tunnel.")
        pause(3000)
        console.log("You swiftly dash towards the light, only to bump into a boar. He snorts furiously, as you are in his territory and attacks you!")
        pause(1800)
        emHP = boarHP
        emAT = boarAT
        emWRD = "boar"
        emCWRD = "Boar"
        bearChance = randint(1, 20)
        if (bearChance == 20) {
            emWRD = "bear"
            emCWRD = "Bear"
        }
        
        boarPass = true
    }
    
    while (playerHP > 0 && emHP > 0 && battleEnd == false) {
        turnCounter = turnCounter + 1
        luckCounter = luckCounter + 1
        if (luckCounter > 12) {
            luckCounter = 12
        }
        
        while (playerEND == false) {
            playerDEF = 1
            //  if snakeVNMHurt == True and playerHP > 0:
            //  playerHP = playerHP - 1
            //  print("\nYou take 1 venom damage!")
            //  #Will give a turn
            if (playerHP <= 0 && deathPass == false) {
                console.log("The slime shriveled up and died!")
                deathPass = true
            }
            
            if (playerHP > 0) {
                console.log("\nYour Turn!")
                console.log("You Health: " + ("" + ("" + playerHP)))
                playerACT = "Attack"
                //  input(
                //  "\nChoose an action: \nAttack:\nDefend:\nFlee:\n\n")  #Modify wording...
                if (player_attack.indexOf(playerACT) >= 0 && playerSTUN == 0) {
                    playerLCK = randint(1, 7)
                    console.log("Rolling for attack... ")
                    pause(500)
                    if (playerLCK > 0 && playerLCK <= 4) {
                        //  LCK stands for "Luck"
                        playerCLCK = randint(luckCounter, 12)
                        //  Stands for Crit Luck
                        if (playerCLCK == 12) {
                            console.log("Whoa! Critical Hit! You did " + ("" + ("" + 2 * Math.trunc(playerAT / emDEF))) + " damage!")
                            emHP = Math.trunc(emHP - 2 * (playerAT / emDEF))
                            luckCounter = 0
                        } else if (playerCLCK != 12) {
                            //  Used to reset critical hit chance
                            console.log("You hit the " + emWRD + " for " + ("" + ("" + Math.trunc(playerAT / emDEF))) + " damage")
                        }
                        
                        //  It can display -#. Stop this... (Fixed: line 176 (now 208))
                        emHP = emHP - Math.trunc(playerAT / emDEF)
                        //  Used to stop negative enemy health numbers
                        if (emHP < 0) {
                            emHP = 0
                        }
                        
                        //  if snakeVNMHurt == True:
                        //  snakeVNMHurt = False
                        //  snakeVNM = False
                        console.log("Enemy Health: " + ("" + ("" + emHP)))
                        Math.trunc(playerLCK)
                    } else if (playerLCK != 0 && 0 < playerLCK || playerLCK > 7) {
                        console.log("You missed the " + emWRD + "... ")
                    }
                    
                    playerEND = true
                } else if (player_attack.indexOf(playerACT) >= 0 && playerSTUN != 0) {
                    console.log("You cannot attack! You are stunned for " + ("" + ("" + playerSTUN)) + " turn(s)!")
                } else if (player_defend.indexOf(playerACT) >= 0) {
                    playerDEF = 2
                    console.log("You defend")
                    playerEND = true
                } else if (player_flee.indexOf(playerACT) >= 0) {
                    //  Change later; Perhaps a form of parry?
                    playerRUN = randint(1, 6)
                    if (playerRUN == 1) {
                        console.log("You ran away!")
                        playerEND = true
                        battleEnd = true
                    } else {
                        console.log("You failed to run away...")
                        playerEND = true
                    }
                    
                } else {
                    console.log(`
                        Invalid input. Please try again...
                    `)
                }
                
            } else if (playerHP < 0) {
                playerEND = true
            }
            
        }
        if (playerSTUN > 0) {
            playerSTUN = playerSTUN - 1
        }
        
        //  Last change before random enemy implementation: 6.00 pm 11/30/21
        if (playerHP > 0) {
            while (emEND == false && emHP > 0 && battleEnd == false) {
                emDEF = 1
                console.log("" + "\n" + emCWRD + "'s turn:")
                console.log("Enemy Health: " + ("" + ("" + emHP)))
                emAI = randint(1, 7)
                if (emAI == 7 || emAI == 6 || emAI == 5 || emAI == 4) {
                    emLCK = randint(1, 5)
                    //  Attack function
                    console.log("The " + emWRD + " tries to attack you!")
                    pause(700)
                    if (emLCK == 1 || emLCK == 2) {
                        playerHP = playerHP - Math.trunc(emAT / playerDEF)
                        if (playerDEF == 1) {
                            console.log("The " + emWRD + " hit you for " + ("" + ("" + emAT)) + " damage!")
                        } else if (playerDEF == 2) {
                            console.log("You defend from the " + emWRD + ", only letting it deal " + ("" + ("" + Math.idiv(emAT, playerDEF))) + " damage!")
                        }
                        
                        //  Snake special
                        //  if snakeVNM True:
                        //  print(
                        //  "The snake hit you with its venom attack! You are posioned! (You will take damage every turn until the end of the fight...)"
                        //  )
                        //  snakeVNMHurt = True
                        //  Rat special
                        //  elif ratWHIP == True and emLCK == 1:
                        //  print(
                        //  "The mouse whipped you with its tail, dealing an extra 2 damage!"
                        //  )
                        //  playerHP = playerHP - 2
                        //  player_run_rat = randint(1, 4)
                        //  if player_run_rat == 1:
                        //  pause(305)
                        //  print("\nYou got scared and ran away! ")
                        //  battleEnd = True
                        //  Bird speical
                        //  elif birdPECK == True and emLCK == 1:
                        //  birdSTUN = randint(1, 2)
                        //  print(
                        //  "The bird peck at you, causing you to be stunned for "
                        //  + str(birdSTUN) +
                        //  " turns! You can only defend or flee!")
                        //  playerSTUN = birdSTUN
                        //  elif emLCK != 1 or emLCK != 2:
                        console.log("The " + emWRD + " missed you")
                    }
                    
                    emEND = true
                } else if (emAI == 2 || emAI == 3) {
                    //  Use "and emHP != 1 or emHP != 2" to make sure AI doesn't use it when it is low on HP. Maybe make it more likely for the enemy to run when on low hp?
                    emDEF = 2
                    console.log("The " + emWRD + " defends")
                    emEND = true
                } else if (emAI == 1) {
                    emRUN = randint(1, 6)
                    if (emRUN == 1) {
                        //  Change how it works later
                        console.log("The " + emWRD + " ran away!\n")
                        battleEnd = true
                        emEND = true
                        emFlee = true
                    } else {
                        console.log("The " + emWRD + " tried and failed to flee!")
                        emEND = true
                    }
                    
                }
                
            }
        }
        
        playerEND = false
        emEND = false
    }
    battleEnd = false
    emFlee = false
    snakeVNMHurt = false
    ratWHIP = false
    turnCounter = 0
    battleCounter = battleCounter + 1
    if (emWRD == "boar") {
        ChpEnd1 = true
    }
    
    //  Used to display what happend after the fight when awarding XP
    if (playerHP > 0 && emHP <= 0 && emFlee == false) {
        //  and XPLevelCap1 == False
        if (emWRD == "rat") {
            console.log(`
                You defeated the rat! You gained 3 XP!
            `)
            XPTotal = XPTotal + 3
        } else if (emWRD == "bird") {
            console.log(`
                You defeated the bird! You gained 3 XP
            `)
            XPTotal = XPTotal + 3
        } else if (emWRD == "ant colony") {
            console.log("You absorbed the ant colony! You gained 2 XP!")
            XPTotal = XPTotal + 2
        } else if (emWRD == "snake") {
            console.log(`
                You defeated the snake! You gained 4 XP!
            `)
            XPTotal = XPTotal + 4
        }
        
        pause(1200)
    }
    
    if (playerHP <= 0) {
        console.log(`
            The slime shriviled up and died!
        `)
    }
    
    //  After battle looting system / made simple text; can be expanded later.
    if (playerHP > 0) {
        console.log("" + `
            You survived your encounter with
        ` + emWRD + ", you now have free time wandering in the sewers. You may rest to heal, search for loot to gain mass (or XP).")
        playerRestStop = "Rest"
        //  input("Please make your choice: ")
        PRSE = false
        //  Used for next line; stands for playerRestStopEnd (Thought it was too long)
        while (PRSE == false) {
            if (player_rest.indexOf(playerRestStop) >= 0 && playerMaxHP > playerHP) {
                playerHeal = randint(1, 3)
                for (let i = 1; i < 4; i++) {
                    if (playerHeal + playerHP > playerMaxHP) {
                        playerHeal = playerHeal - 1
                    }
                    
                }
                console.log("You take a breather and healed " + ("" + ("" + playerHeal)) + " health back.\n")
                //  Expand on how player heals later
                playerHP = playerHP + playerHeal
                //  Originally forgot to actually add the amount back to the player XD
                PRSE = true
            } else if (player_rest.indexOf(playerRestStop) >= 0 && playerMaxHP <= playerHP) {
                playerHeal = randint(1, 3)
                console.log("You are already at maximum hitpoints!")
                forgive1 = "No"
                //  str(input("Do you still wish to heal? "))
                if (player_confirm.indexOf(forgive1) >= 0) {
                    forgive2 = "No"
                    //  input("Are you sure? (Results may be permanant... ")
                    if (player_confirm.indexOf(forgive2) >= 0) {
                        BadChance = Math.trunc(randint(1, 20))
                        pause(1000)
                    } else if (player_deny.indexOf(forgive2) >= 0) {
                        //  while BadChance != 1 or BadChance != 20 and PRSE == False:
                        //  BadChance = randint(1, 20)
                        //  if BadChance == 1:
                        //  print(
                        //  "And all of the sudden, the slime exploded! With acidic bits and pieces of itself flying everywhere in the dark sewers..."
                        //  )
                        //  playerHP = playerHP - playerHP
                        //  ChpEnd1 = True
                        //  PRSE = True
                        //  elif BadChance == 20 and playerHP > 0:
                        //  print("You overheal " + str(playerHeal) +
                        //  " hit points.")
                        //  playerHP = playerHP + playerHeal
                        //  PRSE = True
                        console.log("Good call. Let's continue.")
                        PRSE = true
                    }
                    
                } else if (player_deny.indexOf(forgive1) >= 0) {
                    console.log("Alright, let's continue.")
                    pause(0.7)
                    PRSE = true
                }
                
            } else if (player_loot.indexOf(playerRestStop) >= 0) {
                //  IDK WHY THIS BREAKS IT SHOULD WORK FINE!
                playerLoot = randint(1, 7)
                if (playerLoot != 7) {
                    console.log(`
                        You scavenged around and found enough food to gain + 1 XP
                    `)
                    XPTotal = XPTotal + 1
                    console.log("You have " + ("" + ("" + XPTotal)) + " XP!\n\n")
                } else if (playerLoot == 7) {
                    console.log(`
                        You were lucky and found good food! you gained + 2 XP!
                    `)
                    //  Go into more depth in descriptions...
                    XPTotal = XPTotal + 2
                    console.log("You have " + ("" + ("" + XPTotal)) + " XP!\n\n")
                }
                
                PRSE = true
            } else {
                playerRestStop = "Test"
            }
            
        }
        //  input("Unrecognized input; Please respond with a valid action: ")  #Make it sound less harsh and robotic..
        pause(1000)
        PRSE = false
        if (Math.idiv(XPTotal, 10) == 1 && XPLevelUp1 == false) {
            console.log(`
                You leveled up!
                New Stats:
                Attack: 2 --> 3
                HP: 8 --> 10
            `)
            //  Add an ability gain here
            playerAT = 3
            playerHP = 10
            playerMaxHP = 10
            XPLevelUp1 = true
            pause(2500)
        } else if (Math.idiv(XPTotal, 10) == 2 && XPLevelUp2 == false) {
            console.log(`
                You leveled up!
                New Stats:
                Attack: 3 --> 4
                HP: 10 --> 12
            `)
            //  Add an ability gain here
            playerAT = 4
            playerHP = 12
            playerMaxHP = 12
            XPLevelUp2 = true
            pause(2500)
        }
        
        //  Change where this time stop is located later
        //  Post-Battle story moments
        if (battleCounter == 1) {
            console.log("After the sudden fight with " + emWRD + `
                , you look around at your surrondings... 
                It is a dark tunnel with a putrid smell. 
                You look around and know that you need to escape whever this is...
                You begin by heading in a random direction.
            `)
        } else if (battleCounter == 3) {
            console.log(`
                You begin to feel the layout of the place.
                 The creatures here are constanly hungry and being a reflective slime, you do stand out amongst the darkness...
            `)
            EggM1 = randint(1, 5)
            if (EggM1 == 1) {
                pause(1500)
                console.log(`
                    You feel as if you are at a disadvantage going throughout this place...
                `)
            }
            
        } else if (battleCounter == 6) {
            console.log(`
                You begin to feel stronger as you crawl through these tunnels...
                You don't know why you exist as an abomination to nature, but you do.
                You continue on with the hope of escape.
            `)
        } else if (battleCounter == 9) {
            console.log("You hear hushed calls from outside. You don't understand what they are saying or who or what they are, but you feel you are close to escaping this maze. You feel determined to keep pushing.")
            //  Last sentence is extra?
            pause(300)
        }
        
        //  input("Press anything to continue: ")
        console.log("\n\n")
    }
    
}
