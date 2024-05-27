# Random Daily Haiku Newsletter
Sign up here: https://daily-random-haiku-x6v3lrwanq-uk.a.run.app
The webapp can add an email to Firestore or remove it. It is made with Tailwind and NextJS(and is hosted on Google Cloud Run). The email job pulls all user email addresses and uses SendGrid to send the day's haiku. It is in Google Cloud Run Jobs and is triggered by Google Cloud Scheduler.