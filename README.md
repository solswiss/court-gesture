# Court Gesture
A web-based beach volleyball game controlled by your gestures incorprating 3D and 2D elements in one world!  For now, you can play 1v1 against a bot in our [demo](https://solswiss.github.io/howdyhack-vball). Note that it works best in Chrom browsers. There are plans for cross-device multiplayer!

## Features
- Tutorial (teaches you all the moves)
- CPU difficulty setting
- Character customization
- Gesture recognition

## How To Play
Each side gets 3 touches and the game plays until one side reaches 11 points or the host restarts. Use [gestures](#gestures) to play moves; move your hand horizontally to aim; push toward the camera/screen to increase power/speed.  It may help to know that you can recalibrate your hand as needed below the camera feed and that the player automatically follows to where the ball is projected to land.

### Gestures
- Bump (fist)
- Set (point up)
- Spike (thumbs up)
- Restart (victory aka peace)

# Development
Run these commands to play or work on the game locally:
```
npm install
npm run dev
```

## Tech Stack
TypeScript, ThreeJS, Vite, MediaPipe