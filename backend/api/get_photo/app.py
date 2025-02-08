import json
import boto3
import os

# Initialize S3 client
s3 = boto3.client("s3")

# Set your S3 bucket name
BUCKET_NAME = "mjburns-processed-photos"

def generate_presigned_url(bucket, key, expiration=3600):
    return s3.generate_presigned_url(
        "get_object",
        Params={"Bucket": bucket, "Key": key},
        ExpiresIn=expiration,
)

def lambda_handler(event, context):
    try:
        # List objects in the S3 bucket
        response = s3.list_objects_v2(Bucket=BUCKET_NAME)

        # Extract file details if available
        if "Contents" in response:
            photos = [
                {
                    "url": generate_presigned_url(BUCKET_NAME, item["Key"]),
                    "name": item["Key"],
                }
                for item in response["Contents"]
            ]
        else:
            photos = []

        # Return response
        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps(photos)
        }


    except Exception as e:
        print(f"Error fetching S3 images: {e}")
        return {
            "statusCode": 500,
            "body": json.dumps({"error": "Failed to fetch images from S3."}),
        }
