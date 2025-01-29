import cgi
import logging
import mimetypes
import os
import traceback
import uuid
import re
import boto3
from fastapi import File, HTTPException, UploadFile
from botocore.exceptions import NoCredentialsError, ClientError
from dotenv import find_dotenv, load_dotenv

load_dotenv()


class S3Manager:
    def __init__(self):
        self.aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")
        self.aws_secret_access_key = os.getenv("AWS_SECRET_ACCESS_KEY")
        self.aws_region = os.getenv("AWS_REGION")
        self.s3_bucket_name = os.getenv("S3_BUCKET_NAME")

        self.s3_client = boto3.client('s3', aws_access_key_id=self.aws_access_key_id,
                                      aws_secret_access_key=self.aws_secret_access_key,
                                      region_name=self.aws_region)

        self.check_s3_connection()
        self.add_lifecycle_rule()

    def check_s3_connection(self):
        try:
            # Head bucket to confirm connection
            self.s3_client.head_bucket(Bucket=self.s3_bucket_name)
            print(f"Connected to S3 bucket: {self.s3_bucket_name}")
        except NoCredentialsError:
            print("Credentials not available or incorrect.")
        except Exception as e:
            print(f"Error connecting to S3 bucket: {e}")


    def add_lifecycle_rule(self):
        """Creates a lifecycle rule on an existing bucket for deletion based on prefix."""
        folder_name = "temp_docs"

        lifecycle_config = {
            'Rules': [
                {
                    'ID': 'DeleteObjectsInFolder' if folder_name else 'DeleteAllObjects',
                    'Filter': {
                        'Prefix': folder_name,
                    } if folder_name else {},
                    'Status': 'Enabled',
                    'Expiration': {
                        'Days': 25,  # Delete objects after 24hours
                    },
                }
            ]
        }

        try:
            print(f"Bucket name {self.s3_bucket_name}")
            self.s3_client.put_bucket_lifecycle_configuration(
                Bucket=self.s3_bucket_name,
                LifecycleConfiguration=lifecycle_config
            )
            print(f"Lifecycle rule created for bucket: {self.s3_bucket_name}")
        except ClientError as e:
            print(f"Error creating lifecycle rule: {e}")


    async def upload_file(self, file_path, file_name):
        file_contents=''
        path = f"{file_path}"
        file_url = "-"
        # Upload the file
        try:
            self.s3_client.upload_file(file_name, self.s3_bucket_name, path)
            print(f"File uploaded successfully to s3://{self.s3_bucket_name}/{path}")
            file_url = f"https://{self.s3_bucket_name}.s3.{self.aws_region}.amazonaws.com/{path}"
            # file_url = self.s3_client.generate_presigned_url(
            #     'get_object',
            #     Params={'Bucket': self.s3_bucket_name, 'Key': path},
            #     ExpiresIn=43200  # 12 hours in seconds
            # )
        except Exception as e:
            print(f"Error: {e}")

        finally:
            return file_url




    def sanitize_filename(self,filename):
        # Define a regular expression pattern to match special characters
        pattern = r'[^\w\d\s\-_.]'

        # Use the re.sub() function to replace special characters with an empty string
        sanitized_filename = re.sub(pattern, '', filename)

        return sanitized_filename


s3_manager = S3Manager()
