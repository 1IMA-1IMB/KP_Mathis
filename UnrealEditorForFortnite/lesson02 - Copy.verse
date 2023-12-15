
using { /Fortnite.com/Devices }
using { /Verse.org/Simulation }
using { /UnrealEngine.com/Temporary/Diagnostics }

# See https://dev.epicgames.com/documentation/en-us/uefn/create-your-own-device-in-verse for how to create a verse device.

# A Verse-authored creative device that can be placed in a level
lesson02 := class(creative_device):

    var PlayerTotalHealth : int = 200
    var EnemyAttackDamage : int = 20
    var PlayerDefense : int = 10
    var SpecialAttackDamage : float = 20.0
    var BaseAttackDamage : int = 27
    var PlayerAttack : int = 35
    var EnemyTotalHealth : int = 250

    # Runs when the device is started in a running game
    OnBegin<override>()<suspends>:void=
        Print("Palyer Health: {PlayerTotalHealth}")
        Print("Enemy Attacked Player For {EnemyAttackDamage} Damage")
        set PlayerTotalHealth = PlayerTotalHealth - EnemyAttackDamage
        Print("Palyer Health: {PlayerTotalHealth}")

        # Subtraction, Multiplication, Division, Addition

        set PlayerTotalHealth -= (EnemyAttackDamage - PlayerDefense)
        Print("Palyer Health After Defense and Attack: {PlayerTotalHealth}")

        HealthPotion : int = 20
        set PlayerTotalHealth += HealthPotion
        Print("Health: {PlayerTotalHealth}")

        SpecialAttack01 : float = SpecialAttackDamage / 3.0
        Print("Special Attack 01: {SpecialAttack01}")

        PowerUpMultiple : int = 3
        TempAttackDamage : int = BaseAttackDamage * PowerUpMultiple

        set EnemyTotalHealth =- (PlayerAttack * PowerUpMultiple)