# Hello! My name is Maxb0tbeep, I created this discord.js v13 bot template with the intention to make creating discord bots much easier! To set up your bot, please carefully follow the instructions. IF YOU SKIP THEM THE BOT WILL NOT WORK

## Reminder: this is to get you started in bot developement, not a complete guide, please don't expect that

### REQUIREMENTS:
A computer
A bit of JS knowledge or other language but it will be harder
A discord account (duh)
Probably administrator permissions on your computer

1. Install Node.JS, this is how you are able to run javascript on your computer. 
    -[Download](https://nodejs.org/en/download/)

    Note: if you already have node installed, make sure it is added to your path if you are running windows, and also is version 16 or higher (you can check this by running the command "node --version" in your powershell or terminal)

2. Install git if you already haven't. Self explanatory install. 
    -[Download](https://git-scm.com/downloads)

3. Install VS Code, Atom, or Sublime text, your choice (I will be using VS Code)
    -[VS Code](https://code.visualstudio.com/download)
    -[Atom](https://atom.io/)
    -[Sublime Text](https://www.sublimetext.com/)

4. Install dependencies, once you've installed node 
    -In your console, write "npm install discord.js fs nodemon" to install the packages we need, you may need administrator permissions on your computer to do this.

5. Clone this repo, using github desktop or by typing these commands into your console
    -"cd <location you want to clone to>"
    -"git clone https://"

6. Create your bot account
    -Go to the [Discord Dev Portal](https://discord.com/developers/applications)
    -Click "New Application" and name it whatever you want
    -You can change the picture, name, description (about me) and other things here
    -Click on the bot tab, "Add bot", "Yes, do it"
    -If your picture didn't move over you can upload it again
    -Scroll down to "Privileged Gateway Intents" and enable all
    -Next, go to the "OAuth2" tab and click "URL Generator"
    -Enable "Bot" and "Administrator"
    -Copy the link that was just generated and paste it into your browser
    -Select the server you are adding it to (you can come back here if you want to add more servers) and press continue -> authorize -> I am human
    -You just created the bot account! Great job!

7. Set up your code
    -To start, go back to your discord bot in the [dev portal](https://discord.com/developers/applications) and click "Bot"
    -Copy your Token 
        Note: It's really important to keep this token secret, if anyone gets it, they can control your bot. If it does get leaked, make sure you regenerate it.
    -Go to src/Data/config.json in your project and replace "<your token>" with the actual token, Ex: "OTE2ODM5MjQwOTkyNjkwMTc3.Yav_FQ.ppYITZMtD3FLVke19O_CI0eKPI4" (keep the quotes and the comma at the end)
    -In that config file, replace the prefix to whatever you want to write before commands Ex: "!" (make sure you dont have any spaces, and keep the quotes)
    -If you haven't already, rename the project folder to the name of your bot.
    -To change the status of your bot, go in src/Events/ready.js and change the 6th line
    -In the help command, it says "Learn how to use <Your bot's name>" just change this to your bot's name (src/Commands/help.js)
    -You can also change the image by replacing "https://cdn.discordapp.com/attachments/773631079428653099/916834260604842049/New_Project.png" on line 14 to a link to an image. (If you aren't sure how to get an image's link, send your image in a discord channel and right click it -> Copy Link)
    -The admin folder in src/Commands is for commands that you want to hide from the help command, I've made ban and kick commands for you already, feel free to delete them if you dont want them in your bot. Replace the image link if you do though as they are embeds.
    -In package.json and package-lock.json change "rename-me" to your bot's name (undercase or else you get issues)

8. Running the code
    -Open your system's console and write the following
        "cd <path to bot folder, NOT parent folder>"
        "npm run dev" (for development, this will restart your bot every time you save a file inside of the bot's folder)
        alternatively: "npm run start" (will not restart for file changes)

9. MOAR
    -If you would like to add more features to your bot (you will) these will help you.

    1. Adding more commands
        -Duplicate one of your existing commands, I recommend hello.js because it is simple
        -Name it the name of your command
        -on line 4 change the name to what you want
        -on line 5 change the desc to what you want in help command
        -finally, change the code inside the run function to whatever you want the command to do
    2. Adding more functions
        -Duplicate ready.js and remove the indented code
        -on line 5, change "ready" to your event name and "(client)" to whatever you need from the event.
        -add your code in the function
    3. Help me i'm stuck 
        stack overflow
        google
        [me](https://fanlink.to/maxb0tbeep)
        [Discord.js discord server](https://discord.gg/djs)
        [documentation](https://discord.js.org/#/docs/main/stable/general/welcome)
