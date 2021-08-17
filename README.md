# React-Native-Starter-Template
Simple but strongly structured react native starter template

## 🚀 Why should i use this?

It helps you to easily start your project. You don't have to make folders from scratch to keep your project in a structured manner.
It has a good structure to let you focus on coding.

## :exclamation: Requirements

Yarn, expo and npm should be installed on machine.

## :video_game: Usage

It is very easy to start using that template. What you need is

* Clone this repo:
```bash
  git clone https://github.com/Yusuf-YENICERI/React-Native-Starter-Template
```
* Change directory to that project:
```bash
cd React-Native-Starter-Template
```
* Install packages and start project:
```bash
yarn install && yarn start
```
## ⚙ Project Structure

📁 assets -> It has icons, images and fonts.

📁 constants -> It access to icons, images and fonts with javascript. Also theme variables, COLORS, SIZES, FONTS included. You can use them with importing the constants folder.

📁 components -> It has components defined by user. Each component has an index file and has specific components for that component leverages ```styled-components```.

📁 screens -> It has screens used in app. Screens make use of ```📁 components``` folder.

📁 navigation -> This folder includes the tabs inside the app. Each tab make use of a screen. So that folder make use of ```📁 screens``` folder.

🗄 App.js -> It includes the whole tabs app has.

## References

I have used this resource while making that project.

https://www.youtube.com/watch?v=diUDjNwZ8Lg&list=RDCMUC3_z0yLxjNQpgGoc5VWuV2A&start_radio=1&ab_channel=ByProgrammers

