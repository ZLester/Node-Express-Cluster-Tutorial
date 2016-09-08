# Node-Express-Cluster-Tutorial
### A simple demo showing the power of Node's `cluster` module.

* With just a few lines of code you can significantly increase the performance of your Node/Express applications!
* `server-basic.js` contains a minimalist Node/Express server
* `server-cluster.js` contains the same server forked using the Node `cluster` module.

#### Testing server performance
* You can compare the performance of each server with [Siege](https://github.com/JoeDog/siege), an awesome HTTP load testing utility.
* The below comparison was generated using the siege command `siege -b -c 255 -t 15S http://localhost:3000`

![](https://github.com/ZLester/Scaling-Node-Express-Applications/blob/master/serverStats.png?raw=true)

#### Setting up the repository/running performance tests yourself
* Use `npm install` to grab the required node modules
* Install the Siege command line tool by following the steps outlined in [this blog post](https://drupalize.me/blog/201507/load-testing-your-site-siege)
* Run the basic server via `npm run basic`
* In another terminal window, test the server's performance via `npm run siege` or create a custom siege test of your choosing
* Once the test is complete, shut down the basic server and run the cluster server via `npm run cluster`
* Test the cluster server with the same test you ran on the basic server
* Once the second test is complete, you can compare each servers' performance via the terminal log or view more detailed log results from Siege in `/usr/local/var/siege.log`

#### Further Reading
* [Load Testing your Site with Siege](https://drupalize.me/blog/201507/load-testing-your-site-siege)
* [Node Cluster Module Docs](https://nodejs.org/api/cluster.html)
* [Sitepoint Tutorial](https://www.sitepoint.com/how-to-create-a-node-js-cluster-for-speeding-up-your-apps/)
* [Throng](https://github.com/hunterloftis/throng), an awesome library to assist in managing clustered Node apps in production
