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
- [Self hosting](#self-hosting-to-be-written-based-on-actual-self-hosting)
- [Lessons learned](#lessons-learned)

---

## History and use cases

### History

The SMSWithoutBorders project began in 2021 and later became a tool for fighting internet shutdowns in 2022 thanks to a grant from Internews and later continued funding from the Open Technology Fund (OTF).

SMSWithoutBorders began with a single Android client called SWOB (for SMSWithoutBorders) which was later renamed to RelaySMS. From the years that follow in 2023, we began developing DekuSMS - an SMS messaging app with support for end-to-end encryption.

At this point we had been using Raspberry Pi and USB dongles for SMS forwarding for RelaySMS; this was inefficient due to power and other logistical issues. The downtime for the service was extremely high, leading to a low and continuously slow uptake.

We later moved the forwarding to DekuSMS which had better performance and lessened the down time by > 90%. This gave some better performance for first time users and some uptake to the service.

Our experience in developing RelaySMS stems from having lived in an environment undergoing internet shutdowns due to political reasons. The shutdown lasted more than 90 days in 2 regions of the country; setting an African record. This was Cameroon back in 2016.

### Use cases

RelaySMS is an open source communication platform that aims to enable messaging across the Internet using SMS messages. This is most useful in areas without an active Internet connection; usually common in both remote areas and during periods of unrest.

It is well established that governments weaponize the internet against its people by shutting it down completely (partially in some cases). This hinders people's ability to get news and live-saving information. Also hinders people's abilities for commerce and for safe and secure communications. In these circumstances, tools like VPNs and some major circumvention techniques do not work because they require some access to the Internet to function.

It is in these circumstances we are developing RelaySMS. While we know SMS messages are blocked sometimes during periods of unrest, it usually is unblocked faster than Internet connections; this could be because the adversaries may not consider SMS messaging a threat model yet (beyond person to person communication locally).

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
- Vault - A secure software which stores sensitive data on behalf of the user, including security keys, and online publishing tokens.

## Avenues to explore

In the short run tools like RelaySMS could be used to communicate with online platforms that have been primed to broadcast incoming information to subscribed listeners. This could be in messaging channels such as WhatsApp/Signal/Telegram groups.

## Platforms

This is the first and original mode of communication for RelaySMS. This functionality requires the user to save access to their online platforms on a cloud instance running RelaySMS’ Vaults. The types of access being saved are OAuth2.0 Tokens (with publish only scopes), account token (for platforms like Telegram).

The currently supported platforms are:

- Gmail
- Telegram
- Twitter (X)
- BlueSky
- Mastodon

## Bridges

This mode of publishing with RelaySMS is considered a secondary yet crucial one. Bridges transform the user’s phone number into a permanent emailing alias that can both send and receive messages.

- Example: A user with phone number +237123456789 uses a client (Android/iOS) to compose a message. It is encrypted and sent to a Gateway client, then forwarded to the Gateway server.
- The server forwards it to the bridge server which creates an alias (e.g., 237123456789@relaysms.me).
- Messages sent to this alias are encrypted and delivered back to the user via SMS.

This enables **bi-directional communication** securely through the RelaySMS system.

## Clients

Most supported clients are Android and iOS, each integrating the same protocols for Vault usage and publishing messages.

Required standards include:

- Creating an account on the Vault
- Signing in to the Vault
- Saving accounts for OAuth2.0 (e.g., Bluesky), phone number-based authentication (Telegram)
- Publishing messages through Bridges or saved platforms

## Gateway clients

Devices capable of receiving incoming SMS from RelaySMS clients. Can be Android or Linux devices with USB modems. RelaySMS defaults use Android devices running DekuSMS.

## Self hosting (to be written based on actual self hosting)

- Requirements
- Adding platforms
- Clients
- Gateway Clients
- Support
- Bitcoin / OSS donations / Paypal
- Possible avenues
- Internet by SMS / All messaging by SMS

## Lessons learned

- Releasing technical features too early can create negative user impressions.
- Building community engagement early helps users stay involved and forgiving of issues.
- Use Telegram and other channels to communicate development updates.
