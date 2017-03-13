---
layout: post
title:  "What designers can do to help developers"
date:   2017-02-21 22:35:11 -0300
---

Recently one of the designers in my team approached me with a problem; their design hadn't been implemented the same way as it had been designed. Automatically they blaimed the developers, instead of asking what they could have done to help them out. 

Our users never see our polished .PSD or .Sketch files - they see and interact with the UI which is build upon code. Therefore, as designers, we should be doing everything to ensure that the UI works in the browser and work with the developers to acheive this.

***Disclamer**: As designers I don't feel that we should be limited, we should have the freedom to design the best possible solution for our users. However, if this solution takes 20 seconds to load, I would argue that 1) this isn't the possible solution and 2) this solution could solve all our users problems, but our users aren't going to wait for 20 seconds for our perfect solution to load.*

So, what can we do?

### 1. Accept the fact that the design will change
> Let’s change the phrase “designing in the browser” to “deciding in the browser.”
> 
> — Dan Mall

**Its OK if the design changes**. Designers need to understand that just because we have designed a component doesn't mean that it should be built excatly how we designed it. We need to be open to compromise. If the frontend developer feels that the code for said component is hacky or it negatively impacts the performance of the product/website, we should work with the developer to adapt the design.

### 2. Make their lives easier
As designers we talk about congitive load. The idea that we should be aimming to [minimize the cognitive load](https://www.nngroup.com/articles/minimize-cognitive-load/) for our users, as their attention is limited and should be allocated accordingly. Lets apply that same principle to our developers and try to minimize **their** congitive load. We can attempt to do this in many ways:

1. Show them how we used the grid, for example you could generate a pdf of the design with an overlay of the grid.
2. Organise your .Sketch or .PSD file so that all the layers are named to help when the developer has to decide names for classes.
3. Generate a color palette with names for the colors so that the developer can quickly create all the needed color variables.
4. Follow a rule set (more on that below!).
5. If the design is for a complicated UI provide the developer with a detailed userflow, so that they can clearly see all the validations that need to be implemented.

### 3. Normalise your design
There are very few physical constraints with digital design. This allows us to think outside the box and focus on creating the ideal solution, but this lack of constraints can quickly lead to a disjointed user experience. As designers we have to create and follow our own contrainsts or as I like to call them: rules. Consistant user interfaces are all based on rules - these rules are important for everyone. They are important in terms of user experience; if the rules are followed, the interface will be consistant allowing the user to feel more comfortable and have more faith in the product or service. These rules are also important for the developers, it allows them to take subjective designs and easily indentify rule sets, which allows the codebase to be smaller and easier to manage.

Every deviation from these rules is one extra piece of complexicity the developers are adding to the codebase, one extra thing to manage, to go wrong. As designers we need to be aware of this and understand the importance of trying to follow rule sets we have put in place. There will be times when we will have to break some of the rules, which is ok, but we need to understand the consequences this will have on the developers and the codebase.


### My top tip:
Before handing the design over to the developer, work with them to define a **"production solution"**. By doing this a lot of the changes, compromises and discussions will take place, and if needed, be validated before the first line of code gets written.
