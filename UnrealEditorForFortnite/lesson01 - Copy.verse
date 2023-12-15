
using { /Fortnite.com/Devices }
using { /Verse.org/Simulation }
using { /UnrealEngine.com/Temporary/Diagnostics }

# See https://dev.epicgames.com/documentation/en-us/uefn/create-your-own-device-in-verse for how to create a verse device.

# A Verse-authored creative device that can be placed in a level
lesson01 := class(creative_device):

    var PlayerName : string = "Enter Name Here"
    var TotalHealth : int = 200
    var AttackDamage : int = 200
    var TotalMoney : float = 0.0

    # Runs when the device is started in a running game
    OnBegin<override>()<suspends>:void=
        Print(PlayerName)
        Print("Name: {PlayerName}")
        Print("Total Health: {TotalHealth}")
        Print("AttackDamage: {AttackDamage}")
        Print("TotalMoney: {TotalMoney}")
        set PlayerName = "Jonas The Man"
        set TotalMoney = 1000.0
        Print("Name: {PlayerName}")
        Print("TotalMoney: {TotalMoney}")