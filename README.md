# Scaling Node Express Applications
### A simple demo showing the power of the Node `cluster` module.

* With just a few lines of code you can significantly increase the performance of your Node/Express applications!
* `server-basic.js` contains a minimalist Node/Express server
* `server-cluster.js` contains the same server forked using the Node `cluster` module.

#### Testing server performance
* You can compare the performance of each server with [Siege](https://github.com/JoeDog/siege), an awesome HTTP load testing utility.
* The below comparison was generated using the siege command `siege -b -c 255 -t 15S $serverAddress`

![](https://github.com/ZLester/Scaling-Node-Express-Applications/blob/master/serverStats.png?raw=true)
