# Discussion for validation specifics



##  General

*varchar* - isString

*ints* - isInt

*enums* - set specific key-value, rest is covered by typeORM



### Election Organizer

*email* - is email, unique in db

*firstname* - is email

*lastname* - is string

*p*assword - min(6), max(225)



### Election

*title* - min(0), max(50)

*desc* - min(0l, max(500)

*dates* - dateformat ISO 8601

*password* - opt, min(3), max(200) 

*image* - on req: check img size, type (jpg, png, tiff) -> isString()





### Ballot

*order* - isInt(), isPositive





### rest of entities should be self explanatory