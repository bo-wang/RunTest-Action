_The example below is meant to be a reference more than a prescriptive template.
The end goal is that README files always present the information here presented in some capacity._ 

--- 
<a href="https://jenkins.albelli.com/view/{area}/job/{project-name}"><img src="https://img.shields.io/badge/-Jenkins-success?logo=jenkins&logoColor=D24939" />
</a> <a href="https://octopus.deploy.photoconnector.net/app#/Spaces-1/projects/{project-name}"><img src="https://img.shields.io/badge/-Octopus-2F93E0?logo=octopus-deploy&logoColor=white" /></a>

# <Name of the system/component/application/API>

## Resources

Include references to all resources related to and relevant for this system.

* Endpoints/URLs of all environments where an instance of this system exists
* Swagger URLs of all environments
* Deployment control panel URLs
* AWS accounts 
* Logs URLs

See for example:
* https://github.com/albumprinter/ECOM-OrderCloudAPI

# Purpose and context

The information should summarise:
* Why does this system exists
* What is its domain 
* Links to systems, external and internal, this system is connected to or interacts with

## Architecture

Include here diagrams describing the system in its components and flows.

If relevant, a diagram describing how this system is connected to other systems should also be added here.

For example:

![Order Promise Flow](https://github.com/albumprinter/PL-Blobs/blob/master/OrderPromise/Order%20Promise%20Flow.png)

More examples in context: 	
* https://github.com/albumprinter/OrderCutoff-Api
* https://github.com/albumprinter/storefront-product-info-provider
* https://github.com/albumprinter/storefront-feed-management-tool

## Functionality

High level description of what the system does and how it works.

### Schemas/Contracts/Business rules

Typical elements to include here:

* What are the existing contracts, what to they look like (include examples or references to examples)
* With whom such contracts have been agreed upon
* Why is the data structured in a certain way

## Development information

Here information on how to set up and run a development enviroment.

The information should include:
* How to get and use keys necessary to configure and run locally
* How to run unit/integration tests

### Commands and operations

Here the information on how to execute commands, trigger flows, make the system _work_ should also be included.

See for example: 
* https://github.com/albumprinter/storefront-platform
  
## User manual (when relevant)

Here information on how to use the system from a stakeholder point of view.

For example:
* Jarvis commands
* Etc.

