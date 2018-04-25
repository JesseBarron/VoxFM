# Media APPS Overview
There are essentially THREE pieces to an application that plays media:
    - Player and UI
    - MediaSession
    - MediaController

## Player and UI
Android provides two media player APIs.

    One of them is MediaPlayer which provides the basic functionality for bare-bones players that supports hte most common audio/video formats and data sources.

    ExoPlayer is an open source library that's built on top of the MediaPlayer library. It supports high-performance features not available on MediaPlayer.

    UI is obviously the visual buttons or slides that allows the user to interacct with your application.

## Media Session and Media Controller
While the UI and Player can be arbritrary the interaction between are basically the same between all media player apps. 

    The Android framework defines two classes, a media session and a media controller, that impose a well-defined structure for building a media player app. 

    They communicate with each other using predefined callbacks that correspond to standard player actions.

### Media session
Is responsivle for all communication with the player. It hides all players' api from the rest of your app. The player is only called from the media session that controls it...
- Maintians a representation of the palyer's state(playing/paused) and info about what it's playing. A single session can recieve callbacks from multiple controllers, like from wear OS or transport or whatever.

### Media Controller
Media Controller isolates your UI. My UI only communicates with the media controller, not the player itself.

The media controller translates transport conrol actions into callbacks to the media session.

Also receives callbacks from the media session whenever the session state changes. This is used to update the UI

A single media controller can only connect to a single media session at a time.

## Audio Apps
With audio applications you typically want the audio to play in the background. 
because of this, it's encouraged to build an app using two components: 
 - an activity for the UI and a service for the player.
> In my case I'm not too sure how the UI bit factors into the code, all I need is a service that plays audio and shows the transport on the lockscreen

## MediaBrowserService and MediaBrowser
So the support library provides two classes in order to make this service and consumer relationship. 
- MediaBrowserService
- MediaBrowser

The MediaBrowserService contains the mediasession and the player. The activity that want's to make use of the mediasession and player uses contains the mediacontroller and makes use of the MediaBrowser library to communicate with the service...