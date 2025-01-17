import os
import sys
import json
import boto3
from botocore.exceptions import ClientError

"""
This script retrieve secret data from AWS secret manager and convert it to .env
system arg:
    - env_file_path = "/path-to-file/.env"
    - secret_name = "/freemind/project-one"
    - region_name = "ap-south-1"

command:  python3 build-env.py "/path-to-file/.env" "/freemind/project-one" "ap-south-1"
"""

def get_secret(secret_name:str, region_name:str):

    # Create a Secrets Manager client
    session = boto3.session.Session()
    client = session.client(
        service_name='secretsmanager',
        region_name=region_name
    )

    try:
        get_secret_value_response = client.get_secret_value(SecretId=secret_name)
    except ClientError as e:
        raise e
    
    secret = get_secret_value_response['SecretString']
    return json.loads(secret)


def convert_secret_to_env(secret, env_file_path):
    # Convert JSON data to string
    env_content = "\n".join([f"{key}={value}" for key, value in secret.items()])

    # Write the string to the .env file
    with open(env_file_path, 'w') as env_file:
        env_file.write(env_content)

    print(f"JSON data has been written to {env_file_path}")


if __name__ == "__main__":
    print("sys argv length: ", len(sys.argv))
    print("sys argv: ", sys.argv)

    if len(sys.argv) == 4:
        env_file_path = sys.argv[1]
        secret_name = sys.argv[2]
        region_name = sys.argv[3]
        convert_secret_to_env(get_secret(secret_name, region_name), env_file_path)
    
    else:
        usage = """
            system arg:
                - env_file_path = "/path-to-file/.env"
                - secret_name = "/levr/app-service"
                - region_name = "ap-south-1"

            usage:  python3 build-env.py "/path-to-file/.env" "/levr/oracle-service" "ap-south-1"
        """
        print(usage)




