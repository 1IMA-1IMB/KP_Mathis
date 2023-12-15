using { /Fortnite.com/Devices }
using { /Verse.org/Simulation }
using { /UnrealEngine.com/Temporary/Diagnostics }
using { /Verse.org/Random }

# See https://dev.epicgames.com/documentation/en-us/uefn/create-your-own-device-in-verse for how to create a verse device.

# A Verse-authored creative device that can be placed in a level
Lesson03 := class(creative_device):

    var PlayerHeath : int = 100
    var EnenmyAttackDamage : int = 51

    # Runs when the device is started in a running game
    OnBegin<override>()<suspends>:void=
        Print("Enemy attacks player.")
        set PlayerHeath -= EnenmyAttackDamage

        if (PlayerHeath <= 0):
            Print("Player Died :(")

        Print("Player Flinched. Enemy attacks again.")
        set PlayerHeath -= EnenmyAttackDamage

        if (PlayerHeath <= 0):
            Print("Player Died :(")

        var PlayerDiceResult : int = GetRandomInt(1,20)
        var EnemyDiceResult : int = GetRandomInt(1,20)

        set PlayerHeath = 100
        Print("Player and enemy rolled dice")
        Print("Palayer Dice: {PlayerDiceResult}")
        Print("Enemy Dice: {EnemyDiceResult}")

        if (EnemyDiceResult > PlayerDiceResult):
            set PlayerHeath -= EnenmyAttackDamage
            Print("Enemy Attack Successful! Player HP is now: {PlayerHeath}")
        else if (EnemyDiceResult = PlayerDiceResult):
            set PlayerHeath -= 1
            Print("Roll was a tie. Player lost 1 HP")
        else:
            Print("The Enemy missed!")
            
            