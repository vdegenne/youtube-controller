import 'gamecontroller.js'

declare global {
  interface Window {
    gameControl: any;
  }
}

export class ControllerController {
  private secondary = false;

  get player () {
    return document.querySelector<any>('ytd-player')?.getPlayer()
  }

  constructor () {
    window.gameControl.on('connect', (gamepad) => {
      gamepad
      .before('button6', () => { this.secondary = true})
      .after ('button6', () => { this.secondary = false})

      .before('left0', () => {
        this.player?.seekTo(this.player.getCurrentTime() - (!this.secondary ? 1 : 2))
      })
      .before('right0', () => {
        this.player?.seekTo(this.player.getCurrentTime() + (!this.secondary ? 1 : 2))
      })
      .before('button0', () => {
        switch (this.player?.getPlayerState()) {
          case 5:
          case 2:
            this.player.playVideo()
            break
          case 1:
            this.player.pauseVideo()
            break
        }
      })
    })
  }
}




new ControllerController()