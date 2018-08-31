# polly-lambda

## Serverless application based on AWS Lambda and Vue front-end 
This application engine on AWS Lambda, DynamoDB, Polly, SNS and S3
The project schema looks like this:

<img src="/static/schema.jpg" />

1. User make request to Gitlab pages
2. From Gitlab pages we can make two type of request to API Gateway
3. API Gateway trigger Lambda function to getting or creating the new post
  a) `Get Post` Lambda will return all posts from DynamoDB
  b) `New Post` Lambda create the new post and put it into DynamoDb, then triggered SNS topic and will return post ID
4. Than SNS trigger next Lambda for convert text into mp3 file and write it to s3 bucket.

The project was build by following [A Cloud Guru](https://acloud.guru/) tutorials