# About RelaySMS

## Table of Contents

- [History and use cases](#history-and-use-cases)
  - [History](#history)
  - [Use cases](#use-cases)
- [Technological breakdown](#technological-breakdown)
  - [Key software components](#key-software-components)
- [Avenues to explore](#avenues-to-explore)
- [Platforms](#platforms)
- [Bridges](#bridges)
- [Clients](#clients)
- [Gateway clients](#gateway-clients)
- [Self hosting (to be written based on actually self hosting)](#self-hosting-to-be-written-based-on-actually-self-hosting)
- [Lessons learned](#lessons-learned)

---

## History and use cases

### History

The SMSWithoutBorders project began in 2021 and later became a tool for fighting internet shutdowns in 2022 thanks to a grant from Internews and later continued funding from the Open Technology Fund (OTF).

SMSWithoutBorders began with a single Android client called SWOB (for SMSWithoutBorders) which was later renamed to RelaySMS. From the years that follow in 2023, we began developing DekuSMS - an SMS messaging app with support for end-to-end encryption.

At this point we had been using Raspberry Pi and USB dongles for SMS forwarding for RelaySMS; this was inefficient due to power and other logistical issues. The downtime for the service was extremely high, leading to a low and continuously slow uptake.

We later moved the forwarding to DekuSMS which had a better performance and lessened the down time by > 90%. This gave some better performance for first time users and some uptake to the service.

Our experience in developing RelaySMS stems from having lived in an environment undergoing internet shutdowns due to political reasons. The shutdown lasted more than 90 days in 2 regions of the country; setting an African record. This was Cameroon back in 2016.

### Use cases

RelaySMS is an open source communication platform that aims to enable messaging across the Internet using SMS messages. This is most useful in areas without an active Internet connection; usually common in both remote areas and during periods of unrest.

It is well established that governments weaponize the internet against its people by shutting it down completely (partially in some cases). This hinders people's ability to get news and live saving information. Also hinders people's abilities for commerce and for safe and secure communications. In these circumstances, tools like VPNs and some major circumvention techniques do not work because they require some access to the Internet to function.

It is in these circumstances we are developing RelaySMS. While we know SMS messages are blocked sometimes during periods of unrest, it usually is unblocked faster than Internet connections; this could be because the adversaries may not consider SMS messaging a threat model yet (beyond person to person communication locally).

---

## Technological breakdown

RelaySMS can be used in 2 ways; bridges or platforms (more on this below). Regardless of which mode is used:

- The content of the user’s message is encrypted on the user’s device - using Signal’s Double Ratchet algorithm for forward secrecy.
- The messages are sent to a Gateway client (most likely an Android device running Deku SMS). This device then forwards the incoming message (still encrypted) to a cloud instance running a Gateway server.
- The Gateway server determines which mode the message is for and either moves the message to a bridge or platform server for publishing.
- The message is then decrypted with keys acquired from the Vault (server side software responsible for securing and storing the user’s credentials). The decrypted message is then published.
- In cases of publishing to online platforms such as Gmail the user receives an SMS message confirming the status of the request - either successfully published or failed to publish.

**Note:** The messages received from Bridge replies of an initial message sent from a client. This completes the Double Ratchet sessions which means a new set of keys are serviced (Ratcheting).

### Key software components

- Clients (Android or iOS apps)
- Gateway Clients: Android devices running DekuSMS
- Gateway server: Software which determines who to publish the messages
- Bridges - more details below
- Platforms - more details below
- Vault - A secure software which stores sensitive data on behalf of the user. This includes security keys, and online publishing tokens (more on platforms)

---

## Avenues to explore

In the short run tools like RelaySMS could be used to communicate with online platforms that have been primed to broadcast incoming information to subscribed listeners. This could be in messaging channels such as WhatsApp/Signal/Telegram groups.

---

## Platforms

This is the first and original mode of communication for RelaySMS. This functionality requires the user to save access to their online platforms on a cloud instance running RelaySMS’ Vaults. The types of access being saved are OAuth2.0 Tokens (with publish only scopes), account token (for platforms like Telegram). These tokens are designed to enable a third-party to work on the user’s behalf and scopes are used by the user to determine to what degree the third-party can take action.

The user would have to trust the third-party in order to grant these tokens; as they stand a chance the third-party could act on the user’s behalf without their consent.

RelaySMS educates users on how to verify if a third-party has acted on your behalf beyond any request made by you to do so. This is standard for almost all platforms as the scope granted by the user cannot allow for the service to modify (such as delete nor change) records of any actions they take.

The benefits of using one’s online platforms in this manner includes factors such as consistency which increases trust; the recipient knows who the sender is. For cases like social media, the user might have a large following which would benefit from having a live update of matters happening while the user is offline. The following cannot be migrated to another account and the message needs to be heard. This also applies for groups the user is a part of.

The user is required to take these steps while they have access to an Internet connection. It is strongly advised this be included in any early stages of preparing for an internet shutdown. We have some guides here on how to prepare for an internet shutdown with more resources below.

The currently supported platforms are:

- Gmail
- Telegram
- Twitter (X)
- BlueSky
- Mastodon

---

## Bridges

This mode of publishing with RelaySMS is considered a secondary yet a crucial one. In cases where the user has no access to the internet to save their online platforms, or would want to send out information without using their primary accounts then they use bridges.

Bridges work by transforming the user’s phone number into a permanent emailing alias that can both send and receive messages. An example scenario includes:

A user with phone number: +237123456789 uses one of the clients (on Android or iOS) to compose and send a message. The message is encrypted on the device and sent to a Gateway client that sends it to the Gateway server. The Gateway server makes a determination it is a bridge message and forwards to the bridge server. The bridge server then creates an alias from the user’s phone number and securely stores the accompanying public keys in the Vault. An example alias for the phone number of this user would be: 237123456789@relaysms.me.

The user’s message is sent to the intended recipients using that alias. This is a huge plus if the user’s phone number was already known by the recipient - as it would build trust in the origins of the message.

In cases where the recipient replies to the user’s message, the reply is encrypted and forwarded back to the user via SMS. The user can then decrypt the message from their RelaySMS client (app).

This mode enables bi-directional communication between the sender and the recipient. Once the alias is created, any message sent to the alias is encrypted and forwarded to the user by SMS.

[Should include more information on what is the alias’ inbox and how is it secured till the message is forwarded to the user]

---

## Clients

The most supported clients for RelaySMS are the Android and iOS clients. They both offer differing functionalities with the Android client receiving updates faster than the iOS.

The clients all integrate the same standardized protocols developed for use with communication with the Vault and for publishing messages. The required standards each clients has to integrate are:

- Creating an account on the Vault
- Signing into an account on the Vault
- Saving accounts to the Vault for the following protocols:
  - OAuth2.0 e.g Bluesky
  - Phone number based authentication e.g Telegram
  - Publishing first messages with Bridges
  - Publishing subsequent messages with Bridges
  - Publishing messages from saved platforms
  - Publishing messages from saved platforms using a device ID
  - Storing tokens on the device
  - Publishing with tokens stored on device

Concepts introduced here include:

- Device ID: This is an identifiable token derived and stored on both the Vault and the client. This allows the user to publish messages through their saved platforms without using their phone number as primary means of identification. This helps the clients in cases of a dual-sim phone where the phone number used to send the SMS message could change yet all the necessary sending details are still available on the device. This is an optional switch and mustn't be defaulted for the clients.

- Storing tokens on the device: The user’s tokens (OAuth2.0 or phone number based) are primarily stored securely on the Vault. The clients have the ability to request for these tokens to be migrated from the Vault to the device. The tokens are then appended to the message during publishing. In case of a refresh token (a common mechanism with OAuth2.0), the new token is sent back by SMS to the device.

Clients are free to implement any of the methods of publishing as they require for the functionality for their project.

The default clients provide users with the ability to point them to whichever Vault instance they prefer - more in self hosting. This would require that the Gateway client they use for publishing should also be pointing to that Vault instance - or else the messages would fail to decrypt on the server side.

Since each client can be different, each client should offer their own clients. For the default tutorials provided by RelaySMS team, you can find them here [insert tutorials to RelaySMS]

---

## Gateway clients

Gateway clients are devices capable of receiving incoming SMS messages from RelaySMS clients. Gateway clients can be run from Android devices or Linux devices with USB modems. RelaySMS default instances use Android Devices running DekuSMS as default Gateway clients. However the protocols to transform any receiver into a Gateway client would be to forward a payload in JSON [insert reference] format to a cloud instance running a Gateway server.

Since Gateway clients do not share keys with the clients (nor are aware of the clients beforehand) they cannot decrypt the incoming messages. The messages being sent also support forward secrecy; which means every message is encrypted with a different key - so deriving the key for one message does not allow for deriving for the next messages.

---

## Self hosting (to be written based on actually self hosting)

- Requirements
- Adding platforms
- Clients
- Gateway Clients
- Support
- Bitcoin
- OSS donations
- Paypal
- Possible avenues
- Internet by SMS
- All messaging by SMS

---

## Lessons learned

- Starting strong: Releasing the technical needs of the platform too early can lead to users forming a negative opinion about the software. This can be very difficult to bounce back from as the initial traction goes a long way in forming people’s opinions. Knowing when too early means is also very difficult and usually we will just go ahead with it “feels” ready.
- Creating a community early and communicating the development as it’s happening to the members keeps everyone engaged and more forgiven of the issues they face. We experienced this with DekuSMS which created a Telegram channel early and began communicating with the members there about the development and features coming up. Users would share their issues and to find updates - but even if the software is not ready or buggy people would join the communities.

