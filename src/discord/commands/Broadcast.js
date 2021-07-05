const DiscordCommand = require('../../contracts/DiscordCommand')

class BroadcastCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'broadcast'
    this.aliases = ['bc']
    this.description = '-'
  }

  onCommand(message) {
    this.sendMinecraftMessage('/gc /g discord <------ fun events, livestreams, money making methods, talking channels etc... join')

    setInterval(() => {
      this.sendMinecraftMessage('/gc /g discord <------ fun events, livestreams, money making methods, talking channels etc... join')
    }, 3600000)
  }
}

module.exports = BroadcastCommand
