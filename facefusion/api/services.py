
from fastapi import FastAPI, BackgroundTasks
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from pydantic import BaseModel, EmailStr
import os
import requests
import traceback
import asyncio
from dotenv import find_dotenv, load_dotenv

load_dotenv()

# Pydantic model for email request
class EmailSchema(BaseModel):
    email: list[EmailStr]
    subject: str
    body: str


class Services:
    def __init__(self):
        pass



    def scrape_profile_proxycurl(self, profile):
        try:

            # api_key = os.environ.get("PROXYCURL_API_KEY")
            # logging.info("API_KEY_proxycurl 2:::",api_key)

            headers = {'Authorization': 'Bearer ' + str("rV2AiFgyn3X6b9xpttFWgQ")}
            print("HEADER:::",headers)
            api_endpoint = 'https://nubela.co/proxycurl/api/v2/linkedin'
            params = {
                'linkedin_profile_url': profile,
                'use_cache': 'if-recent',
            }
            response = requests.get(api_endpoint,
                                    params=params,
                                    headers=headers)
            
            if response.status_code != 200:
                print(response.status_code)
                raise Exception
                
            
            print("proxycurl response: ", response.status_code)
            return response.json()
        
        except Exception as ex:
            traceback.print_exc()
            raise ex
        

    async def send_email(background_tasks: BackgroundTasks, msg, url, email, name):

        
        # Configure email settings
        conf = ConnectionConfig(
            MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
            MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
            MAIL_FROM=os.getenv("MAIL_FROM"),
            MAIL_PORT=os.getenv("MAIL_PORT"),
            MAIL_SERVER=os.getenv("MAIL_SERVER"),  # Replace with your SMTP server
            MAIL_SSL_TLS=False,
            MAIL_STARTTLS=True,
            USE_CREDENTIALS=True
        )


        recipients=email,

        email_error_template = """
                                 <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body {{
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                                background-color: #f9f9f9;
                            }}
                            .email-container {{
                                max-width: 600px;
                                margin: 20px auto;
                                background-color: #ffffff;
                                border: 1px solid #dddddd;
                                border-radius: 8px;
                                overflow: hidden;
                                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                            }}
                            .header {{
                                background-color: #0078d7;
                                color: #ffffff;
                                padding: 20px;
                                text-align: center;
                            }}
                            .header h1 {{
                                margin: 0;
                                font-size: 24px;
                            }}
                            .content {{
                                padding: 20px;
                            }}
                            .content p {{
                                font-size: 16px;
                                line-height: 1.5;
                                color: #333333;
                            }}
                            .video-link {{
                                display: block;
                                margin: 20px 0;
                                text-align: center;
                            }}
                            .video-link a {{
                                display: inline-block;
                                text-decoration: none;
                                background-color: #0078d7;
                                color: #ffffff;
                                padding: 10px 20px;
                                border-radius: 5px;
                                font-size: 16px;
                            }}
                            .video-link a:hover {{
                                background-color: #005bb5;
                            }}
                            .footer {{
                                background-color: #f1f1f1;
                                color: #777777;
                                text-align: center;
                                padding: 15px;
                                font-size: 14px;
                            }}
                            .footer a {{
                                color: #0078d7;
                                text-decoration: none;
                            }}
                            .footer a:hover {{
                                text-decoration: underline;
                            }}
                        </style>
                    </head>
                    <body>
                        <div class="email-container">
                            <div class="header">
                                <h1>Your Video Status!</h1>
                            </div>
                            <div class="content">
                                <p>Dear {customer_name},</p>
                                <p>Sorry We’re disappointed to let you know that your requested video failed to build. See the error below:</p>
                                <div class="video-link">
                                    <code>{message}</code>
                                </div>
                                <p>If you have any questions or need further assistance, feel free to reply to this email.</p>
                                <p>Thank you for choosing us!</p>
                            </div>
                            <div class="footer">
                                <p>&copy; 2025 Your Company Name. All rights reserved.</p>
                                <p><a href="{unsubscribe_link}">Unsubscribe</a> | <a href="{privacy_policy_link}">Privacy Policy</a></p>
                            </div>
                        </div>
                    </body>
                    </html>
        """

        email_template = """
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body {{
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                                background-color: #f9f9f9;
                            }}
                            .email-container {{
                                max-width: 600px;
                                margin: 20px auto;
                                background-color: #ffffff;
                                border: 1px solid #dddddd;
                                border-radius: 8px;
                                overflow: hidden;
                                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                            }}
                            .header {{
                                background-color: #0078d7;
                                color: #ffffff;
                                padding: 20px;
                                text-align: center;
                            }}
                            .header h1 {{
                                margin: 0;
                                font-size: 24px;
                            }}
                            .content {{
                                padding: 20px;
                            }}
                            .content p {{
                                font-size: 16px;
                                line-height: 1.5;
                                color: #333333;
                            }}
                            .video-link {{
                                display: block;
                                margin: 20px 0;
                                text-align: center;
                            }}
                            .video-link a {{
                                display: inline-block;
                                text-decoration: none;
                                background-color: #0078d7;
                                color: #ffffff;
                                padding: 10px 20px;
                                border-radius: 5px;
                                font-size: 16px;
                            }}
                            .video-link a:hover {{
                                background-color: #005bb5;
                            }}
                            .footer {{
                                background-color: #f1f1f1;
                                color: #777777;
                                text-align: center;
                                padding: 15px;
                                font-size: 14px;
                            }}
                            .footer a {{
                                color: #0078d7;
                                text-decoration: none;
                            }}
                            .footer a:hover {{
                                text-decoration: underline;
                            }}
                        </style>
                    </head>
                    <body>
                        <div class="email-container">
                            <div class="header">
                                <h1>Your Video is Ready!</h1>
                            </div>
                            <div class="content">
                                <p>Dear {customer_name},</p>
                                <p>We’re excited to let you know that your requested video is ready. Click the link below to view it:</p>
                                <div class="video-link">
                                    <a href="{video_link}" target="_blank">Watch Video</a>
                                </div>
                                <p>If you have any questions or need further assistance, feel free to reply to this email.</p>
                                <p>Thank you for choosing us!</p>
                            </div>
                            <div class="footer">
                                <p>&copy; 2025 Your Company Name. All rights reserved.</p>
                                <p><a href="{unsubscribe_link}">Unsubscribe</a> | <a href="{privacy_policy_link}">Privacy Policy</a></p>
                            </div>
                        </div>
                    </body>
                    </html>
                    """

        if msg and not url:
            # Replace placeholders dynamically
            email_content = email_error_template.format(
                customer_name=name,
                message=msg,
                unsubscribe_link="https://example.com/unsubscribe",
                privacy_policy_link="https://example.com/privacy-policy"
            )
        if url and not msg:
            # Replace placeholders dynamically
            email_content = email_template.format(
                customer_name=name,
                video_link=url,
                unsubscribe_link="https://example.com/unsubscribe",
                privacy_policy_link="https://example.com/privacy-policy"
            )

        message = MessageSchema(
            subject=str("Your cutomized Papya Global Advert"),
            recipients=recipients,  # List of recipients
            body=email_content,
            subtype="html"  # You can use "plain" for plain text
        )

        fm = FastMail(conf)
        # Use BackgroundTasks to send the email asynchronously
        await fm.send_message(message=message)
        # await asyncio.to_thread(fm.send_message,message)
        print("EMAIL------SENT:",email)

        return {"message": "Email has been sent!"}
    
        
service_module = Services()
