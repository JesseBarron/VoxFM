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
      self.configRemote()
      self.configInfoCenter()
      let infoCenter = MPNowPlayingInfoCenter.default()
      infoCenter.nowPlayingInfo = [
        MPMediaItemPropertyTitle: "VoxFM",
      ]
      return true
    } catch {
      NSLog("Did Not Work")
      return false
    }
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
  
  func playStream() -> Void {
    do {
      try self.audioSession.setActive(true)
      self.streamer = AVPlayer(url: self.streamURL!)
      self.streamer?.play()
    } catch {
      NSLog("Session could not be set to active")
    }
  }
  
  @objc func pause() -> Void {
    self.streamer?.pause()
  }
  
  @objc func configInfoCenter(_ title: String = "VoxFM") -> Void {
    NSLog("String For Information: %@", title)
    var nowPlayingInfo = [String : Any]()
    nowPlayingInfo[MPMediaItemPropertyTitle] = title
//    nowPlayingInfo[MPMediaItemPropertyArtist] = "Artist"
    nowPlayingInfo[MPMediaItemPropertyAlbumTitle] = "VoxFM"
    MPNowPlayingInfoCenter.default().nowPlayingInfo = nowPlayingInfo
  }
  
  func configRemote() -> Void {
    remoteCommand.playCommand.addTarget(self, action: #selector(self.playStream))
    remoteCommand.pauseCommand.addTarget(self, action: #selector(self.pause))
    remoteCommand.previousTrackCommand.isEnabled = false
    remoteCommand.nextTrackCommand.isEnabled = false
  }
  
  
}
