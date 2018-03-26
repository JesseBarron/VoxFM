//
//  ShoutStreamerIOS.swift
//  voxfm
//
//  Created by Jesse Barron on 3/25/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
import AVFoundation
import AVKit
import MediaPlayer

@objc(ShoutStreamerIOS)
class ShoutStreamerIOS: NSObject {
  
  var streamURL: URL?
  var streamer: AVPlayer?
  let audioSession = AVAudioSession.sharedInstance()
  let remoteCommand = MPRemoteCommandCenter.shared()
  
  
  func initStreamer() -> Bool {
    do {
      try audioSession.setCategory(AVAudioSessionCategoryPlayback)
    } catch {
      NSLog("Did Not Work")
      return false
    }
    return true
  }
  
  func setURL(_ url: String) -> Void {
    let streamURL = URL(string: url)
    self.streamURL = streamURL
  }
  
  @objc func play(_ url: String) {
    NSLog("This is the fucking url: %@", url)
    if initStreamer() {
      self.setURL(url)
      self.playStream()
    }
  }
  
  func playStream() -> Void{
    do {
      try self.audioSession.setActive(true)
      self.streamer = AVPlayer(url: self.streamURL!)
      self.streamer?.play()
    } catch {
      NSLog("Session could not be set to active")
    }
  }
  
  @objc func pause() {
    self.streamer?.pause()
  }
}
