"""

System variables

"""
"""

Continue

"""
# global emTP
# global emHP
# global emAT
# global emWRD
# global emCWRD
# global antHP
# global antAT
# global snakeHP
# global snakeAT
# global snakeVNM
# global ratWHIP
# global birdPECK
def enemyRoller():
    global emTP, emEND2
    emTP = randint(1, 4)
    while emEND2 == False:
        if emTP == 1:
            emHP2 = ratHP
            emAT2 = ratAT
            ratWHIP2 = True
            emWRD2 = "rat"
            emCWRD2 = "Rat"
            emEND2 = True
        elif emTP == 2:
            emHP2 = birdHP
            emAT2 = birdAT
            birdPECK2 = True
            emWRD2 = "bird"
            emCWRD2 = "Bird"
            emEND2 = True
        elif emTP == 3:
            emHP2 = antHP
            emAT2 = antAT
            emWRD2 = "ant colony"
            emCWRD2 = "Ant colony"
            emEND2 = True
        elif emTP == 4 and XPLevelUp1 == True:
            emHP2 = snakeHP
            emAT2 = snakeAT
            emWRD2 = "snake"
            emCWRD2 = "Snake"
            snakeVNM2 = True
            emEND2 = True
        elif emTP == 4 and XPLevelUp1 == False:
            emTP = randint(1, 3)
emEND2 = False
emTP = 0
XPLevelUp2 = False
XPLevelUp1 = False
battleCounter = 0
ratWHIP = False
snakeVNMHurt = False
emFlee = False
emEND = False
playerSTUN = 0
deathPass = False
playerEND = False
luckCounter = 0
turnCounter = 0
battleEnd = False
boarPass = False
XPLevelCap1 = False
XPTotal = 0
introDialogue = False
Chp1Skip = False
ChpEnd1 = False
TheCheck = False
snakeAT = 0
snakeHP = 0
antAT = 0
antHP = 0
birdAT = 0
birdHP = 0
ratAT = 0
ratHP = 0
ChpEND = False
bossBeat = False
snakeVNM = False
birdPECK = False
# Player inputs:
player_confirm = ["Yes", "yes", "Y", "y"]
player_deny = ["No", "no", "N", "n"]
player_attack = ["Attack", "attack", "att", "Att", "a", "A"]
player_defend = ["Defend", "defend", "def", "Def", "d", "D"]
player_flee = ["Flee", "flee", "F", "f"]
player_rest = ["Rest", "rest", "Heal", "heal", "R", "r", "H", "h"]
player_loot = ["Loot", "loot", "Scavenge", "scavenge", "Search", "search"]
player_explore = ["Explore", "explore", "L", "l", "S", "s", "E", "e"]
# player_rand = ["Random","random","Rand","rand"]
my_sprite = sprites.create(assets.image("""
    Yes
"""), SpriteKind.player)
my_sprite.set_position(0, 0)
playerHP = 8
playerMaxHP = 8
playerAT = 2
playerDEF = 1
# *Removed Content*
# playerATL = 1 #Attack Level
# playerATLxp = 0
# playerDEFL = 1 #Defense Level
# playerDEFLxp = 0
# Rat
ratHP = 4
ratAT = 2
ratDEF = 1
# Bird
birdHP = 3
birdAT = 3
birdDEF = 1
# Ant Colony
antNUM = randint(2, 3)
antHP = antNUM
antAT = int(1.5 * antNUM)
snakeHP = 7
snakeAT = 2
snakeWRD = "Snake"
snakeCWRD = "Snake"
emDEF = 1
emWRD = "placeholder"
# Boss: Boar
boarHP = 12
boarAT = 4
# print("Test") #Used to test if the emEND variable was doing its job
emTP2 = 4
x = randint(1, 4)
# print(XPTotal)
# defenseCounter = 0
# enemyRoller()
while TheCheck == False:
    decision = "Yes"
    # str(input("Begin from chapter 1? "))
    if player_deny.index(decision) >= 0:
        ChpEnd1 = True
        Chp1Skip = True
        TheCheck = True
    elif player_confirm.index(decision) >= 0:
        ChpEnd1 = False
        TheCheck = True
    else:
        print("Invalid response; Try again...")
while ChpEnd1 == False and Chp1Skip == False:
    # playerHP > 0 and
    # Leads to a bossfight which ends the game
    if introDialogue == False:
        print("""
            You are a slime and have woken up in a small cave with little light and the sounds of creatures surronding you, lurking in the dark...
        """)
        # Perhaps realate the XP system to gaining mass as a slime with float points (like 1.6 KG instead of just 1 XP)
        introDialogue = True
    pause(3000)
    if XPTotal >= 20:
        XPLevelCap1 = True
    if XPTotal < 20:
        enemyRoller()
    if XPLevelCap1 == False:
        # Used to summon boss
        if emTP2 == 3:
            print("Suddenly, a colony of ants froms a large monster. They appear very hungry!")
        else:
            print("Suddenly, a " + emWRD + " appears, looking hungry!")
    elif boarPass == False:
        print("As you travel through the sewers, you see light coming from outside the tunnel.")
        pause(3000)
        print("You swiftly dash towards the light, only to bump into a boar. He snorts furiously, as you are in his territory and attacks you!")
        pause(1800)
        emHP = boarHP
        emAT = boarAT
        emWRD = "boar"
        emCWRD = "Boar"
        bearChance = randint(1, 20)
        if bearChance == 20:
            emWRD = "bear"
            emCWRD = "Bear"
        boarPass = True
    while playerHP > 0 and emHP > 0 and battleEnd == False:
        turnCounter = turnCounter + 1
        luckCounter = luckCounter + 1
        if luckCounter > 12:
            luckCounter = 12
        while playerEND == False:
            playerDEF = 1
            # if snakeVNMHurt == True and playerHP > 0:
            # playerHP = playerHP - 1
            # print("\nYou take 1 venom damage!")
            # #Will give a turn
            if playerHP <= 0 and deathPass == False:
                print("The slime shriveled up and died!")
                deathPass = True
            if playerHP > 0:
                print("\nYour Turn!")
                print("You Health: " + ("" + str(playerHP)))
                playerACT = "Attack"
                # input(
                # "\nChoose an action: \nAttack:\nDefend:\nFlee:\n\n")  #Modify wording...
                if player_attack.index(playerACT) >= 0 and playerSTUN == 0:
                    playerLCK = randint(1, 7)
                    print("Rolling for attack... ")
                    pause(500)
                    if playerLCK > 0 and playerLCK <= 4:
                        # LCK stands for "Luck"
                        playerCLCK = randint(luckCounter, 12)
                        # Stands for Crit Luck
                        if playerCLCK == 12:
                            print("Whoa! Critical Hit! You did " + ("" + str(2 * int(playerAT / emDEF))) + " damage!")
                            emHP = int(emHP - 2 * (playerAT / emDEF))
                            luckCounter = 0
                        elif playerCLCK != 12:
                            # Used to reset critical hit chance
                            print("You hit the " + emWRD + " for " + ("" + str(int(playerAT / emDEF))) + " damage")
                        # It can display -#. Stop this... (Fixed: line 176 (now 208))
                        emHP = emHP - int(playerAT / emDEF)
                        # Used to stop negative enemy health numbers
                        if emHP < 0:
                            emHP = 0
                        # if snakeVNMHurt == True:
                        # snakeVNMHurt = False
                        # snakeVNM = False
                        print("Enemy Health: " + ("" + str(emHP)))
                        int(playerLCK)
                    elif playerLCK != 0 and 0 < playerLCK or playerLCK > 7:
                        print("You missed the " + emWRD + "... ")
                    playerEND = True
                elif player_attack.index(playerACT) >= 0 and playerSTUN != 0:
                    print("You cannot attack! You are stunned for " + ("" + str(playerSTUN)) + " turn(s)!")
                elif player_defend.index(playerACT) >= 0:
                    playerDEF = 2
                    print("You defend")
                    playerEND = True
                elif player_flee.index(playerACT) >= 0:
                    # Change later; Perhaps a form of parry?
                    playerRUN = randint(1, 6)
                    if playerRUN == 1:
                        print("You ran away!")
                        playerEND = True
                        battleEnd = True
                    else:
                        print("You failed to run away...")
                        playerEND = True
                else:
                    print("""
                        Invalid input. Please try again...
                    """)
            elif playerHP < 0:
                playerEND = True
        if playerSTUN > 0:
            playerSTUN = playerSTUN - 1
        # Last change before random enemy implementation: 6.00 pm 11/30/21
        if playerHP > 0:
            while emEND == False and emHP > 0 and battleEnd == False:
                emDEF = 1
                print("" + "\n" + emCWRD + "'s turn:")
                print("Enemy Health: " + ("" + str(emHP)))
                emAI = randint(1, 7)
                if emAI == 7 or emAI == 6 or emAI == 5 or emAI == 4:
                    emLCK = randint(1, 5)
                    # Attack function
                    print("The " + emWRD + " tries to attack you!")
                    pause(700)
                    if emLCK == 1 or emLCK == 2:
                        playerHP = playerHP - int(emAT / playerDEF)
                        if playerDEF == 1:
                            print("The " + emWRD + " hit you for " + ("" + str(emAT)) + " damage!")
                        elif playerDEF == 2:
                            print("You defend from the " + emWRD + ", only letting it deal " + ("" + str(Math.idiv(emAT, playerDEF))) + " damage!")
                        # Snake special
                        # if snakeVNM True:
                        # print(
                        # "The snake hit you with its venom attack! You are posioned! (You will take damage every turn until the end of the fight...)"
                        # )
                        # snakeVNMHurt = True
                        # Rat special
                        # elif ratWHIP == True and emLCK == 1:
                        # print(
                        # "The mouse whipped you with its tail, dealing an extra 2 damage!"
                        # )
                        # playerHP = playerHP - 2
                        # player_run_rat = randint(1, 4)
                        # if player_run_rat == 1:
                        # pause(305)
                        # print("\nYou got scared and ran away! ")
                        # battleEnd = True
                        # Bird speical
                        # elif birdPECK == True and emLCK == 1:
                        # birdSTUN = randint(1, 2)
                        # print(
                        # "The bird peck at you, causing you to be stunned for "
                        # + str(birdSTUN) +
                        # " turns! You can only defend or flee!")
                        # playerSTUN = birdSTUN
                        # elif emLCK != 1 or emLCK != 2:
                        print("The " + emWRD + " missed you")
                    emEND = True
                elif emAI == 2 or emAI == 3:
                    # Use "and emHP != 1 or emHP != 2" to make sure AI doesn't use it when it is low on HP. Maybe make it more likely for the enemy to run when on low hp?
                    emDEF = 2
                    print("The " + emWRD + " defends")
                    emEND = True
                elif emAI == 1:
                    emRUN = randint(1, 6)
                    if emRUN == 1:
                        # Change how it works later
                        print("The " + emWRD + " ran away!\n")
                        battleEnd = True
                        emEND = True
                        emFlee = True
                    else:
                        print("The " + emWRD + " tried and failed to flee!")
                        emEND = True
        playerEND = False
        emEND = False
    battleEnd = False
    emFlee = False
    snakeVNMHurt = False
    ratWHIP = False
    turnCounter = 0
    battleCounter = battleCounter + 1
    if emWRD == "boar":
        ChpEnd1 = True
    # Used to display what happend after the fight when awarding XP
    if playerHP > 0 and emHP <= 0 and emFlee == False:
        # and XPLevelCap1 == False
        if emWRD == "rat":
            print("""
                You defeated the rat! You gained 3 XP!
            """)
            XPTotal = XPTotal + 3
        elif emWRD == "bird":
            print("""
                You defeated the bird! You gained 3 XP
            """)
            XPTotal = XPTotal + 3
        elif emWRD == "ant colony":
            print("You absorbed the ant colony! You gained 2 XP!")
            XPTotal = XPTotal + 2
        elif emWRD == "snake":
            print("""
                You defeated the snake! You gained 4 XP!
            """)
            XPTotal = XPTotal + 4
        pause(1200)
    if playerHP <= 0:
        print("""
            The slime shriviled up and died!
        """)
    # After battle looting system / made simple text; can be expanded later.
    if playerHP > 0:
        print("" + """
            You survived your encounter with
        """ + emWRD + ", you now have free time wandering in the sewers. You may rest to heal, search for loot to gain mass (or XP).")
        playerRestStop = "Rest"
        # input("Please make your choice: ")
        PRSE = False
        # Used for next line; stands for playerRestStopEnd (Thought it was too long)
        while PRSE == False:
            if player_rest.index(playerRestStop) >= 0 and playerMaxHP > playerHP:
                playerHeal = randint(1, 3)
                for i in range(1, 4):
                    if playerHeal + playerHP > playerMaxHP:
                        playerHeal = playerHeal - 1
                print("You take a breather and healed " + ("" + str(playerHeal)) + " health back.\n")
                # Expand on how player heals later
                playerHP = playerHP + playerHeal
                # Originally forgot to actually add the amount back to the player XD
                PRSE = True
            elif player_rest.index(playerRestStop) >= 0 and playerMaxHP <= playerHP:
                playerHeal = randint(1, 3)
                print("You are already at maximum hitpoints!")
                forgive1 = "No"
                # str(input("Do you still wish to heal? "))
                if player_confirm.index(forgive1) >= 0:
                    forgive2 = "No"
                    # input("Are you sure? (Results may be permanant... ")
                    if player_confirm.index(forgive2) >= 0:
                        BadChance = int(randint(1, 20))
                        pause(1000)
                    elif player_deny.index(forgive2) >= 0:
                        # while BadChance != 1 or BadChance != 20 and PRSE == False:
                        # BadChance = randint(1, 20)
                        # if BadChance == 1:
                        # print(
                        # "And all of the sudden, the slime exploded! With acidic bits and pieces of itself flying everywhere in the dark sewers..."
                        # )
                        # playerHP = playerHP - playerHP
                        # ChpEnd1 = True
                        # PRSE = True
                        # elif BadChance == 20 and playerHP > 0:
                        # print("You overheal " + str(playerHeal) +
                        # " hit points.")
                        # playerHP = playerHP + playerHeal
                        # PRSE = True
                        print("Good call. Let's continue.")
                        PRSE = True
                elif player_deny.index(forgive1) >= 0:
                    print("Alright, let's continue.")
                    pause(0.7)
                    PRSE = True
            elif player_loot.index(playerRestStop) >= 0:
                # IDK WHY THIS BREAKS IT SHOULD WORK FINE!
                playerLoot = randint(1, 7)
                if playerLoot != 7:
                    print("""
                        You scavenged around and found enough food to gain + 1 XP
                    """)
                    XPTotal = XPTotal + 1
                    print("You have " + ("" + str(XPTotal)) + " XP!\n\n")
                elif playerLoot == 7:
                    print("""
                        You were lucky and found good food! you gained + 2 XP!
                    """)
                    # Go into more depth in descriptions...
                    XPTotal = XPTotal + 2
                    print("You have " + ("" + str(XPTotal)) + " XP!\n\n")
                PRSE = True
            else:
                playerRestStop = "Test"
        # input("Unrecognized input; Please respond with a valid action: ")  #Make it sound less harsh and robotic..
        pause(1000)
        PRSE = False
        if Math.idiv(XPTotal, 10) == 1 and XPLevelUp1 == False:
            print("""
                You leveled up!
                New Stats:
                Attack: 2 --> 3
                HP: 8 --> 10
            """)
            # Add an ability gain here
            playerAT = 3
            playerHP = 10
            playerMaxHP = 10
            XPLevelUp1 = True
            pause(2500)
        elif Math.idiv(XPTotal, 10) == 2 and XPLevelUp2 == False:
            print("""
                You leveled up!
                New Stats:
                Attack: 3 --> 4
                HP: 10 --> 12
            """)
            # Add an ability gain here
            playerAT = 4
            playerHP = 12
            playerMaxHP = 12
            XPLevelUp2 = True
            pause(2500)
        # Change where this time stop is located later
        # Post-Battle story moments
        if battleCounter == 1:
            print("After the sudden fight with " + emWRD + """
                , you look around at your surrondings... 
                It is a dark tunnel with a putrid smell. 
                You look around and know that you need to escape whever this is...
                You begin by heading in a random direction.
            """)
        elif battleCounter == 3:
            print("""
                You begin to feel the layout of the place.
                 The creatures here are constanly hungry and being a reflective slime, you do stand out amongst the darkness...
            """)
            EggM1 = randint(1, 5)
            if EggM1 == 1:
                pause(1500)
                print("""
                    You feel as if you are at a disadvantage going throughout this place...
                """)
        elif battleCounter == 6:
            print("""
                You begin to feel stronger as you crawl through these tunnels...
                You don't know why you exist as an abomination to nature, but you do.
                You continue on with the hope of escape.
            """)
        elif battleCounter == 9:
            print("You hear hushed calls from outside. You don't understand what they are saying or who or what they are, but you feel you are close to escaping this maze. You feel determined to keep pushing.")
            # Last sentence is extra?
            pause(300)
        # input("Press anything to continue: ")
        print("\n\n")