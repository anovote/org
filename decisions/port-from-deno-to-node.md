# Disucssion Deno -> Node

### Preface

In *Sprint 4*, we faced a lot of issues regarding thrid party modules with Deno. Especially when trying to utilize typeORM for database handling. The typeORM module were not fully compatible with PorstgreSQL and we faced a lot of issues when trying to use enums in the database. As well as issues with very slow compile times. 

### Discussion

- Its nice to contirbute to open source projects, and using the bleeding edge technologies. But it comes at a cost with the pace of development. It has been a lot of problems regarding the frameworks we have implemented with deno (typeorm). Premature frameworks are a issue with many of the bugs we are facing.

- All that we have implemented this week is working, but not with deno. (Typeorm issues). Moving over to node would make this weeks effort wourth it..

- deno typescript compiler is very slow. Making it very painful and slow to develop



### Possible solutions

#### Still using deno

1. Change database from postgres to mysql. Steffen has explored this solution. This would solve the enum issue, but they may be potential issues still.
2. Rewrite database handling from using typeorm to use a simpler database wrapper instead (like denodb)

#### Switch to node

Christoffer explored a solution of switching from deno to node. The main conversion is with changing from Oak and Optic logging to Express and Winston.  

As all our work this week is reproduceable on a node running server, we can just install all modules as is or change to the node version of the dependency. For instance, typeORM are fully functional on node, djwt has its own counterpart jwt on node, and so on. 

As node is a broadly used runtime for javascript for creating servers, we are very confident the result of porting from deno to node is worth the little extra cost before starting sprint 5. 

## Decision

<u>We change from deno to node.</u>

