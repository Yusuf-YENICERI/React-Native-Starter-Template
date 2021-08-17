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

## ❓ What should be add to template?

Well, animation while switching between tabs should be add. One can use ```materialBottomTabNavigator``` with just changing the line 24 in ```navigation\tabs.js``` and can have the animation effect, yet there isn't any animation for default case.

## 📷 Screenshots

![1](https://user-images.githubusercontent.com/38917909/129787539-04e0e979-bf2f-4288-95dc-09de113956de.png)


![2](https://user-images.githubusercontent.com/38917909/129787544-45000a8b-d35e-467e-8fb7-487229d644a2.png)


![3](https://user-images.githubusercontent.com/38917909/129787547-f812f485-3a7d-4190-a88b-d80b7c37c8a0.png)


## References

I have used this resource while making that project.

https://www.youtube.com/watch?v=diUDjNwZ8Lg&list=RDCMUC3_z0yLxjNQpgGoc5VWuV2A&start_radio=1&ab_channel=ByProgrammers

