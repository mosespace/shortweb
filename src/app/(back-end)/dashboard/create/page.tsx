import React from "react";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/connections/auth";
import { getAllCategories } from "@/actions/categories";
import { ShortForm } from "@/components/back-end/short-form";
import { CategoryForm } from "@/components/back-end/category-form";
import { createBulkShorts, deleteManyShirts } from "@/actions/shorts";

export default async function page() {
  const session = await getServerSession(authOptions);
  const categories: any = await getAllCategories();
  const user: User = session?.user;
  const userId = user.id;

  const data: any[] = [
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Hey there, welcome back",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "All our PRO level features at your fingertips.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Hey there, down here 👋 Want to hear something cool? ",
      tag: "Drift Chat",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "We’ll just use this to follow up if needed. No spam, promise.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "All prices in USD. Payments accepted with Credit Cards and PayPal. VAT may apply.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "You're now unsubscribed, but are you sure that's what you want?",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Not recommended on public or shared computers. ",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "You agree to receive automated texts to confirm your phone number.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "First, add your mobile number",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Message and data rates may apply.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "We can reimburse you if something’s not right.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "All membership packages come with a 30-day satisfaction guarantee.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Starting at $15/month (billed annually).",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "By sharing your email, you agree to our Terms of Service and Privacy Policy.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Keep me up to date on class events and new releases.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Change or update your password by clicking the button below.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "100% Privacy. Unsubscribe anytime.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "AHello! Looks like you’re enjoying our page, but you haven’t signed up for an account yet.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "If you'd like to delete your account click below.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "Please click on the confirmation link we sent you by email to keep using our service. ",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "⚠️ Your account hasn’t been confirmed yet. ",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "You’re almost there to start your 14 day Free Trial!",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "What describes you best?",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Tell us about yourself so we can customize your account",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "I accept the  Terms of use  and  subscription",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "I would like to hear about Company updates and special offers.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "You won't be charged if you cancel before billing starts on August 12th, 2021",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "We'll send you a reminder 2 days before your trial ends",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "You can change or cancel your plan anytime",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "We will send you a link where you can change your password.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Welcome 👋 Enter your email to continue.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "We use cookies to enable essential and secure site functionality and performance.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "Don't forget to download your files. They will be discarded automatically after 60 minutes.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Membership fees are billed at the beginning of each period",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Add backup payment method",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Your next billing date is August 13, 2021.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Hello John. This is what we’ve got for you today.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Not a member yet? Register now",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "Passwords must contain at least eight characters, including at least 1 letter and 1 number.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "Sign up for our emails! It's not required, you can opt out at any time.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "This site uses cookies to improve your user experience.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Sign up so you don't miss it!",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        'By clicking "Continue", you agree to the Terms and Privacy Policy',
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Anyone can see this info when they communicate with you",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "A picture helps people recognize you",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "A picture helps people recognize you",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "You can view and change your preferences here.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "By creating an account, you agree to the Terms of Service. ",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "You have unsaved changes. Are you sure you want to continue?",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Your username should include your authentic name. ",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "The email you entered isn’t connected to an account. ",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Can we send you email with tips, news, and offers?",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Get notifications you may have missed.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "You can only change your name twice within 14 days.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "After your free trial, the annual subscription is $29.99 USD and automatically renews each year.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Uh-Oh, Your Payment was Declined 💳",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "If you didn’t mean to set your password, just ignore this email and we’ll forget this ever happened 😉",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "Look out for an email from us with instructions on how to reset your password!",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "Please note that you will be required to verify your account by SMS.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "This name will be used to credit you for things you share. What should we call you?",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "No spam, ever. Your address will only be used for the company news. You can easily unsubscribe any time with a single click.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "You will receive an email with instructions about how to reset your password in a few minutes.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Sign in with Google.  Or, sign in with your email.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "We use cookies to make our site work and also for analytics and advertising purposes. See our Cookie Policy for more details.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Drag and drop files to upload",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "Hi there, we use cookies to offer you a better browsing experience and to analyze site traffic. ",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Subscribe to our monthly-ish newsletter",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "Please be sure not to violate others' copyright or privacy rights. Learn more.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "We use cookies to improve your experience and to show you personalized ads. Privacy Policy.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "By creating an account, you agree to the Terms of Service.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "A picture helps people recognize you",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "Privacy preferences: The cookies are ours. The control is yours.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "We want to let you know that we are placing cookies on your device that remember your choices.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "We want to let you know that we are placing cookies on your device that remember your choices.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Send me email notifications for mentions and direct messages.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "Choose notification preferences and how you want to be contacted.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "You may need to check your spam folder or unblock no-reply@company.com",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Enter your email address to reset your password",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Not your computer? Use Guest mode to sign in privately.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Decide what personal information you make visible to others.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Add a recovery phone to help keep your account secure",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "A photo helps personalize your account",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Don't have an account? Register here",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Enter your email to continue.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "You can upgrade, downgrade, or cancel your subscription anytime.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Your successful referrals will be shown here.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Send me email notifications for mentions and direct messages.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Use different settings for my mobile devices.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Notify me about replies to threads I'm following.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Sorry, we couldn’t find your email in our records.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Smart, simple online accounting software for small business.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Not ready to get started? Learn more.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Start your 30-day FREE trial. Cancel anytime.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "Configure your timezone settings in your profile settings page.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "Message sent successfully. Thank you, will get back to you soon!",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "We use your on-site activity to show you more relevant content.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "All documents have been uploaded!",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Need to create an account?  Sign Up.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "Please note: you'll still receive important administrative emails, such as password resets.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "You will receive an email to confirm your decision.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "You will receive an email to confirm your decision.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "This will not be shown publicly. ",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Update your password and secure your account.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Get in touch if you want to meet up.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "If you didn’t mean to set your password, just ignore this email.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "You elected to to receive these emails. No longer interested? Unsubscribe.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "I agree to receive [company] news and updates.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "By continuing, you’re agreeing to our Customer Terms of Service, Privacy Policy, and Cookie Policy.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Enter your phone number or recovery email.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "You can use letters, numbers & periods.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "Phone number, ID, etc don’t pass validation.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content:
        "Use 8 or more characters with a mix of letters, numbers & symbols.",
    },
    {
      categoryId: "66c0a41ae5436407f233a1f5",
      content: "This is an estimate based on the most recent conversion rate.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "Hmm… that email doesn't look valid",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content:
        "There's a billing issue. Update your payment information for uninterrupted service.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content:
        " Retry payment method if you believe you're seeing this billing issue by mistake.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content:
        "Apologies for the inconvenience! We’ll be back within the hour.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "We're quite sorry about this!",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "For some reason, we couldn't load 😓",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "⚠️ Your account hasn’t been confirmed yet. ",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "Please enter a valid email address",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content:
        "Image upload failed: Please try again later or select a different image.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "This card was declined. Try another payment method.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "This file is broken. Try picking another.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "Make sure it's at least 8 characters",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "Email is invalid or already taken",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "The email you entered isn’t connected to an account. ",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "Please fill in at least one field",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content:
        "Oops! Something went wrong! Help us improve your experience by sending an error report.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content:
        "Oops! Something went wrong! Help us improve your experience by sending an error report.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content:
        "Sorry, the member name and password  you entered do not match. Please try again.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content:
        "Incorrect password or confirmation code entered. Please try again.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content:
        "There was a problem with your submission. Please review the fields below.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content:
        "There was an error while submitting the form. Please try again later.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "Required fields were not filled.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "The phone number doesn’t fit the rule.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "One of the fields not filled.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "The username and password don’t match.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "User name or email doesn’t exist.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "Required fields were not filled.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "Verification of 2 password fields failed.",
    },
    {
      categoryId: "66c0a427e5436407f233a1f6",
      content: "Your request cannot be processed at this time.",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Your Chrome, Everywhere",
      tag: "Google Chrome",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Save Money, Without Thinking About It",
      tag: "Digit",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Maybe she’s born with it. Maybe it’s Maybelline.",
      tag: "Maybelline",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "The Best or Nothing",
      tag: "Mercedes-Benz",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Betcha can’t eat just one!",
      tag: "Lay's",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Designed for Driving Pleasure.",
      tag: "BMW",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "No battery is stronger longer",
      tag: "Duracell Batteries",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Your Chrome, Everywhere",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Melts in your mouth, not in your hand",
      tag: "M&M's",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Your Chrome, Everywhere",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Experience Listens. Be Heard.",
      tag: "Holme Roberts & Owen",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Shave time. Shave money.",
      tag: "Dollar Shave Club",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "We Are The Competition",
      tag: "Ferrari",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "15 minutes can save you 15 percent or more on car insurance",
      tag: "Geico",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Helping Good People Do Good Things",
      tag: "Law Firm for Non-Profits",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Double your pleasure, double your fun.",
      tag: "Doublemint Gum",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Your Chrome, Everywhere",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Don’t crack under pressure.",
      tag: "Tag Heuer",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "The ultimate driving machine.",
      tag: "BMW",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "The Happiest Place on Earth",
      tag: "Disney",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "The Best a Man Can Get",
      tag: "Gillette",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Work hard and go home.",
      tag: "slack",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content:
        "There Are Some Things Money Can’t Buy. For Everything Else, There’s Mastercard.",
      tag: "Mastercard",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Tastes So Good, Cats Ask for It By Name.",
      tag: "Meow Mix",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "The Fastest Email Experience Ever Made",
      tag: "Superhuman",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Remember Everything.",
      tag: "Evernote",
    },
    {
      categoryId: "66c0a3f7e5436407f233a1f4",
      content: "Forget Everything You Know About Insurance.",
      tag: "Lemonade",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Boom shakalak! Let’s get started.",
      tag: "TicTail",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "9 Disgusting Facts about Thanksgiving",
      tag: "Eat This Not That",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Boom shakalak! Let’s get started.",
      tag: "TicTail",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "This WORKS even if you are newbie",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "How to transform your uniqueness into profitable business.",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "You're getting ALL THIS.... and it's not even Christmas Yet !!",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "But Wait… There’s More!",
      tag: "TicTail",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Trust me, these bonuses is going to turn you ON!",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content:
        "I’m selling this for $297 but you’re getting it for FREE Today!",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content:
        "If you BUY now, I’ll be sending you another mystery bonus as a token of appreciation.",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Little-known secrets that can steer you to tremendous success",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Fire your boss",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Getting ready for a new venture?",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Let us do all the work for you so you don’t have to",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "",
      tag: "TicTail",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "👋 Hey there! Here is your daily roundup",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Four Business Rules I Learnt in Kindergarten",
      tag: "Naomi Simson",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Marriage Isn’t For You",
      tag: "Seth Adam Smith",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "7 Traits of Subtly Toxic Friends",
      tag: "Zuli Rane",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Let’s begin the adventure",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Up to €10 off 🍕 🌯 🥗 🍔",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Be kind to your mind",
      tag: "Headspace",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Greetings, fellow human.",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content:
        "This is Intercom: the Business Messenger you and your customers will love.",
      tag: "Intercom",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "The future of health is on your wrist.",
      tag: "Apple Watch",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Where the world builds software",
      tag: "GitHub",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Father Goes For Kidney Treatment – Leaves Hospital As A Women",
      tag: "UnKnown",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content:
        "Eminem Terrified As Daughter Begins Dating Man Raised On His Music",
      tag: "The Onion",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Build your brand, sell online—all in one place",
      tag: "Mailchimp",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "7 Lessons I Learned from Fighting a 9 Month Long Lawsuit",
      tag: "Syedbalkhi",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Too good to pass up, right?",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "So much to choose from, all guilt-free with zero calories!",
      tag: "Shea Makery",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content:
        "Our couriers have a very particular set of skills. They will find you. They will deliver to you.",
      tag: "Firebox",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "You made the list… here is your 10% coupon",
      tag: "TicTail",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Leave Your ❤️ in San Francisco",
      tag: "TicTail",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Why James Chartrand Wears Women’s Underpants.",
      tag: "James Chartrand",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "37 Tips for Writing Emails that Get Opened, Read, and Clicked",
      tag: "Henneke",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "They used Pinterest to plan a dream trip.",
      tag: "Pinterest",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "How To Hit 1,000,000 Visitors in a Year of Blogging.",
      tag: "Becky Mansfield",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Keep life organized and work moving—all in one place.",
      tag: "Dropbox",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Start a 7-day trial for $7.",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "You’ve got the ideas, we’ve got the domains.",
      tag: "Hover",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content:
        "Deliver Friction-Free Customer Service. Try Kayako free for 14 days.",
      tag: "Kayako",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Hi 👋 What's your name?",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content:
        "Creators deserve to get paid for their work. Gumroad makes it easy.",
      tag: "Gumroad",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Smart, simple online accounting software for small business.",
      tag: "Quickbooks",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Make your website better. Instantly.",
      tag: "CrazyEgg",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Get in the driver’s seat and get paid.",
      tag: "Uber",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Where remote teams get work done.",
      tag: "Miro",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Hire the Top 3% of Freelance Talent",
      tag: "Toptal",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Say goodbye to all your helpdesk nightmares with Freshdesk! ",
      tag: "Freshdesk",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "Treat yourself to 10% off. ",
    },
    {
      categoryId: "66c0a310e5436407f233a1f3",
      content: "In short: it’s a more human way to work.",
      tag: "Slack",
    },
  ];

  // const deleteMany = await deleteManyShirts();
  // const res = await createBulkShorts(data as any);

  // try {
  //   if (res) {
  //     console.log(`Created all shorts`);
  //   } else {
  //     console.log(`Failed to create Shorts`);
  //   }
  // } catch (error) {
  //   console.log(`Failed to create:`, error);
  // }

  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
        <div className='flex items-center'>
          <h1 className='text-lg font-semibold md:text-2xl'>
            Create Both The Shorts and categories from this screen
          </h1>
        </div>
        <div
          className='flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'
          x-chunk='dashboard-02-chunk-1'
        >
          <div className='w-full flex items-start justify-start flex-col md:flex-row gap-4 px-8'>
            <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-full'>
              <h1 className='text-2xl font-semibold tracking-tight'>
                Create a category
              </h1>
              <CategoryForm userId={userId} />
            </div>
            <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-full'>
              <h1 className='text-2xl font-semibold tracking-tight'>
                Create a short
              </h1>
              <ShortForm categories={categories} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
