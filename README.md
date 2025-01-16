# Personal Website
### *By Matt Burns*

## Requirements
* npm
* react
* python

## Infrastructure
* s3 bucket for domain, mburnsdev.com
    * static hosting enabled
        * index.html and error.html pointed to location in bucket
    * server logging enabled and pointed to logging bucket
    * block public access disabled

* s3 bucket for sub domain
    * static hosting enabled
        * redirect enabled pointing to domain bucket

* s3 for logging

* route 53 domain
    * domain registered (same as bucket name)
    * hosted zone created
        * A record created pointed to domain bucket endpoint
        * CNAME record created pointed to sub domain bucket

## Deployment
### Front End
1. from /personal-project-frontend run 
```
npm run build
```

2. Navigate to domain bucket, mburnsdev.com
3. Delete exisitng files
4. Upload all files in /personal-project-frontend/build directory
